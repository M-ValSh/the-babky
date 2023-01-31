import {
  CheckboxText,
  ModalCheckbox,
  ModalCmnt,
  ModalForm,
  ModalInput,
  ModalOpt,
  ModalSlct,
  ModalSwitch,
} from './AddTransactionForm.styled';
import { theme } from 'Styles/theme';
import WalletButton from 'components/WalletButton/WalletButton';
import { useFormik } from 'formik';
import { SlArrowDown } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindow } from 'redux/global/global-slice';
import { selectBalance } from 'redux/auth/auth-selectors';
import { changeBalance } from 'redux/auth/auth-slice';
import { addTransaction } from 'redux/transactions/transactions-operations';
import { selectTransactionCategories } from 'redux/transactionsCategories/transactionsCategories-selectors';
import { fetchTransactionCategories } from 'redux/transactionsCategories/transactionsCategories-operations';
import { useEffect } from 'react';

export default function AddTransactionForm() {
  // const userId = useSelector(selectId);
  const userBalance = useSelector(selectBalance);
  const categories = useSelector(selectTransactionCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionCategories());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      isChecked: true,
      category: '',
      amount: '',
      date: '',
      comment: '',
    },
    onSubmit: values => {
      const { category, amount, date, comment } = values;
      console.log(categories);
      const selectedCategory = categories.find(item => {
        return item.name === (category === '' ? 'Income' : category);
      });

      const balanceAfter =
        selectedCategory.type === 'INCOME'
          ? userBalance + amount
          : userBalance - amount;

      const categoryId = selectedCategory.id;

      const newTransaction = {
        transactionDate: date,
        type: selectedCategory.type,
        comment: comment,
        amount: selectedCategory.type === 'EXPENSE' ? '-' + amount : amount,
        categoryId,
      };
      dispatch(changeBalance(balanceAfter));
      dispatch(addTransaction(newTransaction));
      formik.resetForm();
      dispatch(closeModalWindow());;
    },
  });

  return (
    <>
      <ModalForm theme={theme} onSubmit={formik.handleSubmit}>
        <ModalCheckbox>
          <CheckboxText theme={theme} isChecked={formik.values.isChecked}>
            Income
          </CheckboxText>
          <ModalSwitch
            variant="myStyle"
            name="isChecked"
            onChange={formik.handleChange}
            isChecked={formik.values.isChecked}
            size="lg"
            theme={theme}
          />
          <CheckboxText theme={theme} isChecked={formik.values.isChecked}>
            Expense
          </CheckboxText>
        </ModalCheckbox>
        {formik.values.isChecked && (
          <ModalSlct
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
            theme={theme}
            placeholder="Select the category"
            variant="flushed"
            required
            icon={<SlArrowDown />}
          >
            {categories.map(category => (
              <ModalOpt key={category.id} value={category.name} theme={theme}>
                {category.name}
              </ModalOpt>
            ))}
          </ModalSlct>
        )}
        <ModalInput
          variant="flushed"
          type="number"
          name="amount"
          onChange={formik.handleChange}
          value={formik.values.amount}
          placeholder="0.00"
          required
        />
        <ModalInput
          variant="flushed"
          type="date"
          name="date"
          onChange={formik.handleChange}
          value={formik.values.date}
          placeholder="Select date"
          required
        />
        <ModalCmnt
          type="text"
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}
          placeholder="Comment"
          variant="flushed"
          resize="none"
          rows="3"
        />
        <WalletButton text={'add'} styleType={'normal'} type="submit" />
      </ModalForm>
      <WalletButton
        text={'cancel'}
        styleType={'transparent'}
        type="button"
        onClick={event => {
          event.preventDefault();
          dispatch(closeModalWindow());
        }}
      />
    </>
  );
}
