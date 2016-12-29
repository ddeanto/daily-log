const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'items_config_fetch_success':
      return action.payload;
    default:
      return state;
  }
};
