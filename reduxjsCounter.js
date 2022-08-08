const redux = require("redux");
//Task to do
//1) Create a new store
//2) Create a Reducer function that will be communicate with the store.
//3) Create an action function which will take instructions from components and will forward to Reducer function
//4) need to create a comopnent like subscription

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

//subceription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
