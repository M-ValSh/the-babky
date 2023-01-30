// import { bankApi } from 'index';
// import { useEffect, useState } from 'react';
// import { Box } from '@chakra-ui/react';
// import { useMedia } from 'components/Media/useMedia';
import taCats from './fakeTACategories.json';
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

export const CategoryTable = () => {
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
          {taCats.map(el => {
            return (
              <TRBodyDesc key={el.id}>
                <THDesc>
                  <BoxDesc color={categoryColorSwitcher(el.name)} />
                  {el.name}
                </THDesc>
                <th>8 700.00</th>
              </TRBodyDesc>
            );
          })}
          {/*  */}
        </tbody>
        <tfoot>
          <TRFooterDesc>
            <th>Expenses:</th>
            <THRedDesc>22 549.24</THRedDesc>
          </TRFooterDesc>
          <TRFooterDesc>
            <th>Income:</th>
            <THGreenDesc>27 350.00</THGreenDesc>
          </TRFooterDesc>
        </tfoot>
      </table>
    </TableWrapperDesc>
  );
};
