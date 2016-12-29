const INITIAL_STATE = {
  label: '',
  details: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'init_first_picker':
      return { ...state, label: action.payload }
    case 'picker_change':
      return { ...state, label: action.payload };
    case 'item_details_change':
      return { ...state, details: action.payload };
    case 'create_item_attempt':
      return { ...state, loading: true };
    case 'create_item_success':
      return INITIAL_STATE;
    default:
      return state;
  }
};
