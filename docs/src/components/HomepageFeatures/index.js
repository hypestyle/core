import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
    {
        title: 'Easy to use',
        description: (
            <>
                Hypestyle CSS is a simple library, thats easy to learn &
                install.
            </>
        ),
    },
    {
        title: 'Open source',

        description: (
            <>
                Hypestyle CSS is open source and is available on{' '}
                <a
                    href="
                https://github.com/hypestyle/hypestyle-css"
                >
                    GitHub
                </a>
                .
            </>
        ),
    },
    {
        title: 'Build with ❤',

        description: <>Hypestyle is build on love!</>,
    },
]

function Feature({ title, description }) {
    return (
        <div className={clsx('col col--4')}>
            {/* <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div> */}
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
