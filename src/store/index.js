import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { count: 0 , isShow : true}, action) => {
    if (action.type === "increase") {
        return {
            count: state.count + 1,
            isShow : state.isShow
        }
    }
    if (action.type === "decrease") {
        return {
            count: state.count - 1,
            isShow : state.isShow
        };
    }
    if (action.type === "increaseBy5") {
        return {
            count: state.count + action.amount,
            isShow : state.isShow
       } 
    }
    if (action.type === "hideandshow") {
      return {
          count: state.count,
          isShow: !state.isShow
      };
    }
    return state;
}
const store = createStore(counterReducer);
export default store;
