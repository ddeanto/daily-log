export default (itemType) => {
  switch (itemType) {
    case '1':
      return 'red';
    case '2':
      return 'blue';
    case '3':
      return 'green';
    default:
      return 'black';
  }
};
