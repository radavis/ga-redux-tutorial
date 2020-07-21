const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const TOGGLE_ITEM = "TOGGLE_ITEM";

const initialState = [
  { content: "Bread", done: false },
  { content: "Eggs", done: true },
  { content: "Almond Milk", done: false },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case DELETE_ITEM:
      return state.filter((item, index) => index !== action.index);
    case TOGGLE_ITEM:
      return state.map((item, index) => {
        if (index !== action.index) return item;
        return { ...item, done: !item.done };
      });
    default:
      return state;
  }
};

const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

const deleteItem = (index) => ({
  type: DELETE_ITEM,
  index,
});

const toggleItem = (index) => ({
  type: TOGGLE_ITEM,
  index,
});

export default reducer;

export { addItem, deleteItem, toggleItem };
