import React, { useEffect, useState } from 'react'

import classes from './Notification.module.css'

const ProgressBar = ({ percentage }) => (
    <div className = { classes.Bar }>
        <div 
            className = { classes.InnerBar }
            style = { { width: percentage } }>
        </div>
    </div>
)

const Notification = ({ message, close }) => {
    const [ seconds, setSeconds ] = useState(0);
    const LENGTH_OF_NOTIFICATION = 2

    useEffect(() => {
        let interval = null

        if (seconds <= LENGTH_OF_NOTIFICATION) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
        } else {
            close()
        }

        return () => clearInterval(interval)
    }, [ seconds ])

    return (
        <div className = { classes.Notification }>
            <p>{ message }</p>
            {/* <ProgressBar percentage = { seconds * 50 + '%' } /> */}

        </div>
    )
}

export default Notification