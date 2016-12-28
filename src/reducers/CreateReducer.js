const INITIAL_STATE = {
  itemType: '1',
  itemDetails: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'picker_change':
      return { ...state, itemType: action.payload };
    case 'item_details_change':
      return { ...state, itemDetails: action.payload };
    case 'create_item_attempt':
      return { ...state, loading: true };
    case 'create_item_success':
      return INITIAL_STATE;
    case 'items_fetch_success':
      return action.payload
    default:
      return state;
  }
};
