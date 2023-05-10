// Define initial state
const initialState = {
  value: 0,
  status: "Normal",
};

// Define actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Define action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

// Create store
const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};

// Create store instance
const store = createStore(reducer, initialState);

export { store, increment, decrement };