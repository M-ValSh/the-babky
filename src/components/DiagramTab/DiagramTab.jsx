import { CategoryTable } from 'components/CategoryTable/CategoryTable';
import { ChartComp } from 'components/Chart/ChartComp';
import { DiagramTabWrapper } from './DiagramTab.styled';

export const DiagramTab = () => {
  return (
    <DiagramTabWrapper>
      <ChartComp />
      <CategoryTable />
    </DiagramTabWrapper>
  );
};
