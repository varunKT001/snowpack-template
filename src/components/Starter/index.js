import React from 'react';
import Counter from '../Counter';
import logo from '../../assets/logo.png';
import styles from './styles.module.css';

const Starter = () => {
  return (
    <section className={styles['section-center']}>
      <div>
        <article className={styles['header']}>
          <img src={logo} alt='logo' />
          <div>
            <p>Snowpack + React</p>
            <p>This is a react template configured with snowpack and babel</p>
          </div>
        </article>
        <article>
          <h3>What is snowpack?</h3>
          <ul>
            <li>
              Snowpack is a lightning-fast frontend build tool, designed for the
              modern web.
            </li>
            <li>
              It is an alternative to heavier, more complex bundlers like
              webpack or Parcel in your development workflow.
            </li>
          </ul>
        </article>
        <article className={styles['info']}>
          <h3>Plugins and Presets used</h3>
          <div>
            <details>
              <summary>snowpack plugins</summary>
              <ol>
                <li>plugin-babel</li>
                <li>plugin-react-refresh</li>
              </ol>
            </details>
          </div>
          <div>
            <details>
              <summary>babel presets</summary>
              <ol>
                <li>preset-react</li>
                <li>preset-env</li>
              </ol>
            </details>
          </div>
        </article>
        <article>
          <h3>HMR + Fast Refresh Demo</h3>
          <p>
            Counter state will persist even after new changes are pushed to the
            browser:
          </p>
          <p>
            Counter: <Counter />
          </p>
        </article>
        <article>
          <h3>More info.</h3>
          <a href='https://www.snowpack.dev/'>snowpack.dev</a>
          <a href='https://babeljs.io/'>babeljs.io</a>
        </article>
      </div>
    </section>
  );
};

export default Starter;
