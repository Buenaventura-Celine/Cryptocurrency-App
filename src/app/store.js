import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../components/services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
})