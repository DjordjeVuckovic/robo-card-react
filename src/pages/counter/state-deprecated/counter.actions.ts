export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const ADD_TO_COUNTER = 'ADD_TO_COUNTER';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const addToCounter = (amount: number) => ({ type: ADD_TO_COUNTER, payload: amount });