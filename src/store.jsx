import redux ,{ createStore } from 'redux';

export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function countReducer(count = 0, action) {
    switch(action) {
        case "INCREMENT":
            return count + 1;
        case "DECREMENT":
            return count - 1;
        default:
            return count;
    }
}

const store = createStore(countReducer);
store.subscribe = (() => console.log(store.getState()));
export default store;