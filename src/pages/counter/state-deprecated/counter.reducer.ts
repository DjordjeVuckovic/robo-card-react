import { INCREMENT, DECREMENT, RESET, ADD_TO_COUNTER } from './counter.actions.ts';
import {ActionType} from "../../../store/action-type.ts";

const initialState = {
    count: 0,
};

export const counterReducerDeprecated = (state = initialState, action: ActionType<number>) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        case ADD_TO_COUNTER:
            return { count: state.count + action.payload };
        default:
            return state;
    }
};