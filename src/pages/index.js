import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          className={styles.heroLogo}
          src="/img/adev-icon.png"
          alt={siteConfig.title}
        />
        <h1 className={clsx('hero__title ', styles.heroTitle)}>
          {siteConfig.title}
        </h1>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Comece a Aprender! - 1min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <head>
        <meta name="og:title" content="aDev Class" />
        <meta
          name="og:description"
          content="Aplicação destinada a mentoria e incentivo de iniciantes na programação."
        />
        <meta name="og:image" content="../../static/img/adev-icon.png" />
      </head>
      <Layout
        title={`${siteConfig.title} Home`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
      </Layout>
    </>
  );
}
