import React from 'react'
import Head from 'next/head'

import NavBar from '../components/UI/NavBar'
import ProjectList from '../components/ProjectList'
import Header from '../components/Header'

const styles = {
    container: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column'
    }
}

const Projects = () => (
    <section style = { styles.comtainer }>
        <Head>
            <title>Jackie Turof</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <Header title = "projects" />
        <ProjectList />
    </section>
)

export default Projects