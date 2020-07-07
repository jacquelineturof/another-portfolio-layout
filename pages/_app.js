import App from "next/app"

import '../App.css'
import '../icon.config.js'

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render () {
        const {Component, pageProps } = this.props;

        return <Component {...pageProps} />
    }
}

export default MyApp

