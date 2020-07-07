import React from 'react'

import classes from './Header.module.css'

const Header = ({ title }) => (
    <header className = { classes.Header }>
        <h1 className = { classes.Heading }>{ title }</h1>
    </header>
)

export default Header