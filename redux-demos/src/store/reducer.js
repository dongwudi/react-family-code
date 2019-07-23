export default (state = {name: 'zhangsan'}, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return Object.assign({}, state, {
        name: action.name
      });
      break;
    default:
      return state
  }
}