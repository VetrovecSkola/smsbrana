const initialState = {
  sentSms: 0,
  failedSms: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SENT': return Object.assign({}, state, { sentSms: state.sentSms + 1 });
    case 'ADD_FAILED': return Object.assign({}, state, { failedSms: state.failedSms + 1 });
    default: return state;
  }
}

export default reducer;
