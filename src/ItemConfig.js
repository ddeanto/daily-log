export default (color) => {
  switch (color) {
    case '1':
      return 'red';
    case '2':
      return 'orange';
    case '3':
      return 'yellow';
    case '4':
      return 'green';
    case '5':
      return 'blue';
    case '6':
      return 'indigo';
    case '7':
      return 'violet';
    case '8':
      return 'black';
    case '9':
      return 'gray';
    case '10':
      return 'brown';
    default:
      return 'black';
  }
};
