import React from 'react'

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
        <NavBar />
        <Header title = "projects" />
        <ProjectList />
    </section>
)

export default Projects