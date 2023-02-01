export const categoryColorSwitcher = (category) => {
  switch (category) {
    case 'Main expenses':
      return "#527677";
    case 'Products':
      return "#ffd8d0";
    case 'Car':
      return "#fd9498";
    case 'Self care':
      return "#c5baff";
    case 'Child care':
      return "#a5b300";
    case 'Household products':
      return "#4a56e2";
    case 'Education':
      return "#81e1ff";
    case 'Leisure':
      return "#8d542a";
    case 'Other expenses':
      return "#ffb8b3";
    case 'Entertainment':
      return "#f0b774";
    case 'Income':
      return "#00b36e";
    default:
      return "#9E9E9E";
  }
};