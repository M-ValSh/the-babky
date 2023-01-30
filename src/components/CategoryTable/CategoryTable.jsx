// import { useEffect, useState } from 'react';
// import { useMedia } from 'components/Media/useMedia';
// import taCats from '../DiagramTab/fakeTACategories';
// import { useEffect, useState } from 'react';
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

export const CategoryTable = ({ responce }) => {
  // // console.log('responce', responce);
  // const [catsArrs, setCatsArr] = useState([]);

  // useEffect(() => {
  //   console.log('responce', responce);
  //   let respArr = responce.categoriesSummary;
  //   // console.log('respArr', respArr);
  //   setCatsArr(respArr);
  // }, [responce]);

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
          {/* {responce && console.log('catsArrs', catsArrs)} */}
          {responce.categoriesSummary.map(el => {
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
          {/*  */}
        </tbody>

        <tfoot>
          <TRFooterDesc>
            <th>Expenses:</th>
            <THRedDesc>{responce.expenseSummary}</THRedDesc>
          </TRFooterDesc>
          <TRFooterDesc>
            <th>Income:</th>
            <THGreenDesc>{responce.incomeSummary}</THGreenDesc>
          </TRFooterDesc>
        </tfoot>
      </table>
    </TableWrapperDesc>
  );
};
