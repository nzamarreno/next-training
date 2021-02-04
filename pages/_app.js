import { AppContext } from '../context/appContext'
import Head from 'next/head'
import App from 'next/app'
import { enableStaticRendering } from "mobx-react-lite";
import { stores } from '../stores';

enableStaticRendering(typeof window === "undefined");

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="utf-8" />
                </Head>
                <AppContext.Provider value={stores}>
                    <Component {...pageProps} />
                </AppContext.Provider>
            </>
        )
    }
}

export default MyApp;
