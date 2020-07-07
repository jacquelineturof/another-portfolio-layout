import React from 'react'
import Head from 'next/head'

import NavBar from '../components/UI/NavBar'
import ContactForm from '../components/ContactForm'

const styles = {
    container: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    }
}

const Contact = () => (
    <section style = { styles.container }>
        <Head>
            <title>Jackie Turof</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <ContactForm />
    </section>
)

export default Contact