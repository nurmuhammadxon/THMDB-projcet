import { configureStore } from '@reduxjs/toolkit';
import CounterMovieReducer from './CounterMovie';

export default configureStore({
    reducer: {
        counter: CounterMovieReducer,
    },
});
