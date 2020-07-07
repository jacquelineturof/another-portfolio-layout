import React from 'react'

import Header from '../components/MainHeader'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Footer from '../components/UI/Footer'

const styles = {
    container: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    }
}

const Index = () => (
    <section style = { styles.container }>
        <Header />
        <AboutMe />
        <Skills />
        <Footer path = "profile" />
    </section>
)

export default Index