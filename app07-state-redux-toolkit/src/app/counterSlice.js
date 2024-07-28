import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state)=>{state.value += 1},
        decrement: (state)=>{state.value -= 1},
        incrementByAmount: (state, action) => { state.value += action.payload },
    },
});

export const { increment, decrement } = counterSlice.actions //ส่งออก actions หรือ methon

export const counterReducer = counterSlice.reducer //ส่งออก state