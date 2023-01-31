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
      console.log(
        values.isChecked,
        values.category,
        values.amount,
        values.date,
        values.comment
      );

      console.log(categories);
      const trType = values.isChecked ? 'EXPENSE' : 'INCOME';
      const balanceAfter =
        trType === 'INCOME'
          ? userBalance + values.amount
          : userBalance - values.amount;

      const selectedCategory = categories.find(category => {
        return category.name === values.category;
      });

      const categoryId =
        trType === 'EXPENSE' ? selectedCategory.id : categories[10].id;
      const newTransaction = {
        transactionDate: values.date,
        type: trType,
        comment: values.comment,
        amount: trType === 'EXPENSE' ? '-' + values.amount : values.amount,
        categoryId,
        // balanceAfter,
      };
      dispatch(changeBalance(balanceAfter));
      dispatch(addTransaction(newTransaction));
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
            {' '}
            {categories.map(category => (
              <ModalOpt key={category.id} value={category.name} theme={theme}>
                {category.name}
              </ModalOpt>
            ))}
            {/* <ModalOpt value="Main expenses" theme={theme}>
              Main expenses
            </ModalOpt>
            <ModalOpt value="Products" theme={theme}>
              Products
            </ModalOpt>
            <ModalOpt value="Car" theme={theme}>
              Car
            </ModalOpt>
            <ModalOpt value="Self care" theme={theme}>
              Self care
            </ModalOpt>
            <ModalOpt value="Child care" theme={theme}>
              Child care
            </ModalOpt>
            <ModalOpt value="Household products" theme={theme}>
              Household products
            </ModalOpt>
            <ModalOpt value="Education" theme={theme}>
              Education
            </ModalOpt>
            <ModalOpt value="Leisure" theme={theme}>
              Leisure
            </ModalOpt>
            <ModalOpt value="Other expenses" theme={theme}>
              Other expenses
            </ModalOpt>
            <ModalOpt value="Entertainment" theme={theme}>
              Entertainment
            </ModalOpt> */}
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
