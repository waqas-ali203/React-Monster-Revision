const initialState = {count : 0};

function counterReducer(state,action){

    switch (action.type) {
        case "increment":
            return {count: state.count+1};
        case "decremnent":
            return {count: state.count-1};
        case "incrementByAmout":
            return {count: state.count + action.payload };
        case "decrementByAmout":
            return {count: state.count - action.payload }; 
        default:
            return state;
    }
}

export {initialState , counterReducer}