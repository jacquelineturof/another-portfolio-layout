import React from 'react'

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
        <NavBar />
        <ContactForm />
    </section>
)

export default Contact