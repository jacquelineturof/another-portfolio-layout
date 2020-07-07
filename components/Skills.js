import React from 'react'
import { Transition, animated } from 'react-spring/renderprops.cjs'

import Header from './Header'

import classes from './Skills.module.css'

// for animation
const defaultStyles = {
    height: '10px',
    width: '90%',
    marginBottom: '1rem',
    backgroundColor: '#ddd',
    display: 'flex'
}

const Skill = ({ name, percent }) => (
    <>
        <label className = { classes.Label }>
            { name }
        </label>
        <div className = { classes.ProgressContainer }>
            <div style = { { width: percent } }
                className = { classes.Progress }>
                
            </div>
        </div>
        <p className = { classes.Percent }>{ percent }</p>
    </>
)

const Skills = () => {
    const backendSkills = [
        <Skill key = "s1" name = "Node" percent = "80%" />,
        <Skill key = "s6" name = "Docker" percent = "70%" />,
        <Skill key = "s4" name = "SQL/NoSQL" percent = "60%" />,
        <Skill key = "s7" name = "Microservices" percent = "60%" />,
        <Skill key = "s2" name = "Java/Spring" percent = "50%" />,
        <Skill key = "s3" name = "Python" percent = "50%" />,
        <Skill key = "s5" name = "Kubernetes" percent = "50%" />,
    ]

    const frontendSkills = [
        <Skill key = "f5" name = "Javascript" percent = "90%" />,
        <Skill key = "f6" name = "HTML5" percent = "90%" />,
        <Skill key = "f7" name = "CSS3" percent = "90%" />,
        <Skill key = "f1" name = "React" percent = "90%" />,
        <Skill key = "f8" name = "Sass" percent = "90%" />,
        <Skill key = "f9" name = "jQuery" percent = "70%" />,
        <Skill key = "f2" name = "React Native" percent = "70%" />,
        <Skill key = "f3" name = "SSR - Next" percent = "70%" />,
        <Skill key = "f4" name = "Angular" percent = "60%" />,
    ]

        const backendSkillsTransition = (
            <Transition
                items = { backendSkills }
                keys={item => item.key}
                from = { { overflow: 'hidden', height: 0, opacity: 0 } }
                enter={{  height: 30, opacity: 1 }}
                leave={{ height: 0, opacity: 0  }}
                trail = { 200 }>
                    {item => styles => (
                        <animated.div style={{ ...defaultStyles,  ...styles }}>
                            { item }
                        </animated.div>
                    )}
            </Transition>
        )
    
        const frontEndSkillsTransition = (
            <Transition
                items = { frontendSkills }
                keys={item => item.key}
                from = { { overflow: 'hidden', height: 0, opacity: 0 } }
                enter={{  height: 30, opacity: 1}}
                leave={{ height: 0, opacity: 0  }}
                trail = { 200 }>
                    {item => styles => (
                    <animated.div style={{ ...defaultStyles,  ...styles }}>
                        { item }
                    </animated.div>
                )}
            </Transition>
        )
    return (
        <>
            <Header title = "Skills" />
            <div className = { classes.SkillsContainer }>
                <div className = { classes.Category}>
                    <h5 className = { classes.Heading }>
                        Backend
                    </h5>
                    { backendSkillsTransition }
                    </div>
                    <div className = { classes.Category }>
                        <h5 className = { classes.Heading }>
                            Frontend
                        </h5>
                        { frontEndSkillsTransition }
                    </div>
            </div>
        </>
    )
}

export default Skills