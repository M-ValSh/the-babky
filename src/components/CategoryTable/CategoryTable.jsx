import { useMedia } from 'components/Media/useMedia';
import {
  TableWrapperDesk,
  TRHeadDesk,
  TRBodyDesk,
  TRFooterDesk,
  THRed,
  THGreen,
  BoxDesk,
  THFooter,
  THDesk,
  TableWrapperTablet,
  TRHeadTablet,
  TRBodyTablet,
  TRFooterTablet,
  BoxTablet,
  THTablet,
  TableWrapperMobile,
  TRHeadMobile,
  TRBodyMobile,
  TRFooterMobile,
  BoxMobile,
  THMobile,
  BoxHeadTitle,
  BoxTitle,
  THTextMobile,
} from './CategoryTable.styled';
import { categoryColorSwitcher } from './categoryColorSwitcher';

export const CategoryTable = ({
  categoriesSummary,
  incomeSummary,
  expenseSummary,
}) => {
  const media = useMedia();

  return (
    <>
      {media.isDesktop && (
        <TableWrapperDesk>
          <table>
            <thead>
              <TRHeadDesk>
                <BoxHeadTitle>Category</BoxHeadTitle>
                <BoxHeadTitle>Sum</BoxHeadTitle>
              </TRHeadDesk>
            </thead>

            <tbody>
              {/* Dynamic render of the table list */}
              {categoriesSummary.map(el => {
                return (
                  <TRBodyDesk key={el.name}>
                    <THDesk>
                      <BoxDesk color={categoryColorSwitcher(el.name)} />
                      <BoxTitle>{el.name}</BoxTitle>
                    </THDesk>
                    <BoxTitle>{el.total}</BoxTitle>
                  </TRBodyDesk>
                );
              })}
            </tbody>

            <tfoot>
              <TRFooterDesk>
                <THFooter>Expenses:</THFooter>
                <THRed>{expenseSummary}</THRed>
              </TRFooterDesk>
              <TRFooterDesk>
                <THFooter>Income:</THFooter>
                <THGreen>{incomeSummary}</THGreen>
              </TRFooterDesk>
            </tfoot>
          </table>
        </TableWrapperDesk>
      )}
      {media.isTablet && (
        <TableWrapperTablet>
          <table>
            <thead>
              <TRHeadTablet>
                <BoxHeadTitle>Category</BoxHeadTitle>
                <BoxHeadTitle>Sum</BoxHeadTitle>
              </TRHeadTablet>
            </thead>

            <tbody>
              {/* Dynamic render of the table list */}
              {categoriesSummary.map(el => {
                return (
                  <TRBodyTablet key={el.name}>
                    <THTablet>
                      <BoxTablet color={categoryColorSwitcher(el.name)} />
                      <BoxTitle>{el.name}</BoxTitle>
                    </THTablet>
                    <THTablet>{el.total}</THTablet>
                  </TRBodyTablet>
                );
              })}
            </tbody>

            <tfoot>
              <TRFooterTablet>
                <THFooter>Expenses:</THFooter>
                <THRed>{expenseSummary}</THRed>
              </TRFooterTablet>
              <TRFooterTablet>
                <THFooter>Income:</THFooter>
                <THGreen>{incomeSummary}</THGreen>
              </TRFooterTablet>
            </tfoot>
          </table>
        </TableWrapperTablet>
      )}
      {media.isMobile && (
        <TableWrapperMobile>
          <table>
            <thead>
              <TRHeadMobile>
                <BoxHeadTitle>Category</BoxHeadTitle>
                <BoxHeadTitle>Sum</BoxHeadTitle>
              </TRHeadMobile>
            </thead>

            <tbody>
              {/* Dynamic render of the table list */}
              {categoriesSummary.map(el => {
                return (
                  <TRBodyMobile key={el.name}>
                    <THMobile>
                      <BoxMobile color={categoryColorSwitcher(el.name)} />
                      <THTextMobile>{el.name}</THTextMobile>
                    </THMobile>
                    <THMobile>{el.total}</THMobile>
                  </TRBodyMobile>
                );
              })}
            </tbody>

            <tfoot>
              <TRFooterMobile>
                <THFooter>Expenses:</THFooter>
                <THRed>{expenseSummary}</THRed>
              </TRFooterMobile>
              <TRFooterMobile>
                <THFooter>Income:</THFooter>
                <THGreen>{incomeSummary}</THGreen>
              </TRFooterMobile>
            </tfoot>
          </table>
        </TableWrapperMobile>
      )}
    </>
  );
};
