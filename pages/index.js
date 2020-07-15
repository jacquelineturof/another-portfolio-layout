import React, { useState } from 'react'
import Head from 'next/head'

import dynamic from 'next/dynamic'

import Header from '../components/MainHeader'
import AboutMe from '../components/AboutMe'
import Footer from '../components/UI/Footer'

import Button from '../components/UI/Button'

const styles = {
    container: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    skillsContainer: {
        height: '100vh',
        width: '100%',
        position: 'relative'
    }
}

const Index = () => {
    // to trigger animation once a user clicks see skills
    const [ show, setShow ] = useState(false)

    const Skills = dynamic(() => import('../components/Skills'))
    const skillsButton = (
        <Button 
            type = "Skills"
            clicked = { () => setShow(true) }>
            View Skills
        </Button>
    )

    return (
        <section style = { styles.container }>
             <Head>
                <title>Jackie Turof</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <AboutMe />
            <div style = { styles.skillsContainer }>
                {
                    !show 
                        ? skillsButton
                        : <Skills />
                }
            </div>
             <Footer path = "profile" />
        </section>
    )
}

export default Index