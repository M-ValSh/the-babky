import {
  TableWrapperDesc,
  TRHeadDesc,
  TRBodyDesc,
  TRFooterDesc,
  THRedDesc,
  THGreenDesc,
  BoxDesc,
  THDesc,
} from './CategoryTable.styled';
import { categoryColorSwitcher } from './categoryColorSwitcher';

export const CategoryTable = ({
  categoriesSummary,
  incomeSummary,
  expenseSummary,
}) => {
  return (
    <TableWrapperDesc>
      <table>
        <thead>
          <TRHeadDesc>
            <th>Category</th>
            <th>Sum</th>
          </TRHeadDesc>
        </thead>
        <tbody>
          {/* Dynamic render of the table list */}
          {categoriesSummary.map(el => {
            return (
              <TRBodyDesc key={el.name}>
                <THDesc>
                  <BoxDesc color={categoryColorSwitcher(el.name)} />
                  {el.name}
                </THDesc>
                <th>{el.total}</th>
              </TRBodyDesc>
            );
          })}
          {/* <TRBodyDesc>
            <THDesc>
              <BoxDesc color={'red'} />
              Category
            </THDesc>
            <th>27000</th>
          </TRBodyDesc> */}
          {/*  */}
        </tbody>

        <tfoot>
          <TRFooterDesc>
            <th>Expenses:</th>
            <THRedDesc>{expenseSummary}</THRedDesc>
            {/* <THRedDesc>27 000</THRedDesc> */}
          </TRFooterDesc>
          <TRFooterDesc>
            <th>Income:</th>
            <THGreenDesc>{incomeSummary}</THGreenDesc>
            {/* <THGreenDesc>28 000</THGreenDesc> */}
          </TRFooterDesc>
        </tfoot>
      </table>
    </TableWrapperDesc>
  );
};
