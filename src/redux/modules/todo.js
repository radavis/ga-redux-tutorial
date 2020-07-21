const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case DELETE_ITEM:
      return state;
    default:
      return state;
  }
};

const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export default reducer;
