import { createStore, combineReducers } from 'redux';
import {counterReducerDeprecated} from "../pages/counter/state-deprecated/counter.reducer.ts";
const rootReducer = combineReducers({
    counter: counterReducerDeprecated,
});

export const storeDeprecated = createStore(rootReducer);

export type RootStateDeprecated = ReturnType<typeof storeDeprecated.getState>;

//deprecated way to create store and reducers