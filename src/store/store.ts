import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../pages/counter/slice/counter-slice.ts";
import postReducer from "../pages/posts/slice/posts-slice.ts"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer
    },
    devTools: true
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch