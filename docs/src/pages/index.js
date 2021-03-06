import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import 'hypestyle/dist/css/hypestyle.min.css'
import '../css/hypestyle.config.css'
import styles from './index.module.css'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        Get Started - in 5 min ⏱
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
            </Head>

            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
