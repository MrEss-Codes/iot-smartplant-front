import { Provider } from 'react-redux'
import { useStore } from '../state/store'
import React from "react";

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
