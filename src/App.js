import "./App.css"
import { css, cx } from "@emotion/css"

import hero from "./assets/hero.jpg"
import headerLogo from "./assets/header-logo.png"

import { ImFacebook2, ImYoutube } from "react-icons/im";

function App() {
  return (
    <>
      <main role="main">
        <Hero>
          <Header />
          <Main />
        </Hero>
        <Info />
      </main>
      <Footer />
    </>
  )
}

const HERO_STYLES = css`
  background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(var(--blue-rgb), 0.5)),
                    url(${hero});
  background-color: var(--blue);
  background-size: cover;
  height: 28rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 32rem) {
    height: 38rem;
  }
`
function Hero(props) {
  return (
    <div
      className={HERO_STYLES}
      {...props}
    />
  )
}

const HEADER_STYLES = css`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 1rem;

  img { height: 3rem }
`
function Header() {
  return (
    <header role="banner" className={HEADER_STYLES}>
      <a href="/" aria-label="Timberline Baptist Church logo">
        <img src={headerLogo} alt="" />
      </a>
    </header>
  )
}

const MAIN_STYLES = css`
  color: var(--white);
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .welcome {
    text-align: left;

    span {
      font-size: 1.25rem;
      font-size: clamp(1.25rem, 4vw, 1.5rem);
    }

    h1 {
      font-size: 2rem;
      font-size: clamp(2rem, 6vw, 3rem);
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 1rem;
    margin-bottom: 0;
    display: flex;
    gap: 1rem;
  }
`
function Main() {
  return (
    <section className={MAIN_STYLES}>
      <div className="welcome">
        <span>Welcome to </span>
        <h1>Timberline Baptist Church</h1>
      </div>
      <ul>
        <li>
          <ExternalLink
            href="https://www.youtube.com/channel/UCTBsNlLBxYcSYq8AXB0mPVw/live"
            className="link"
          >Watch live</ExternalLink>
        </li>
        <li>
          <ExternalLink
            href="https://timberlinebaptist.churchcenteronline.com/giving?open-in-church-center-modal=true"
            className="link"
          >Give</ExternalLink>
        </li>
      </ul>
    </section>
  )
}

const INFO_STYLES = css`
  --link-color-rgb: var(--blue-rgb);
  --link-color: rgba(var(--link-color-rgb), 1);

  color: var(--gray);
  background-color: var(--white);
  text-align: center;
  border-top: 1.5rem solid var(--blue);
  padding-top: 3rem;
  padding-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    color: var(--blue);
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .times {
    text-align: left;
    max-width: 16rem;
    margin-left: auto;
    margin-right: auto;
  }

  .address {
    color: rgba(var(--gray-rgb), 0.7);
  }
`
function Info() {
  return (
    <section className={cx("section", INFO_STYLES)}>
      <h2>Services</h2>
      <p className="times">
        Sundays at 10:30am and 5pm<br />
        Thursdays at 7pm
      </p>
      <p className="address">
        24645 SW Old Hwy 99W,
        Sherwood, <abbr title="Oregon">OR</abbr> 97140
      </p>
      <ExternalLink
        href="https://www.google.com/maps/dir//Timberline+Baptist+Church+24645+SW+Old+Highway+99West,+Sherwood,+OR+97140"
        className="link d-if"
      >Get directions</ExternalLink>
    </section>
  )
}

const FOOTER_STYLES = css`
  color: var(--white);
  background-color: var(--gray);
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    color: var(--white);

    &:hover {
      text-decoration: none;
    }
  }

  .social {
    font-size: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`
function Footer() {
  return (
    <footer role="contentinfo" className={cx(FOOTER_STYLES, "section")}>
      <div>
        <p><b>Timberline Baptist Church</b><br />
        24645 SW Old Hwy 99W<br />
        Sherwood, OR 97140<br />
        <a href="tel:5036259956">(503) 625-9956</a></p>
      </div>
      <div>
        <ul className="social">
          <li>
            <ExternalLink
              href="https://www.facebook.com/TimberlineBaptistChurch"
              aria-label="Facebook"
              target="_blank"
              rel="noopener"
            >
              <ImFacebook2 />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.youtube.com/channel/UCTBsNlLBxYcSYq8AXB0mPVw"
              aria-label="YouTube"
            >
              <ImYoutube />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </footer>
  )
}

function ExternalLink(props) {
  return (
    <a // eslint-disable-line jsx-a11y/anchor-has-content
      target="_blank"
      rel="noopener"
      {...props}
    />
  )
}

export default App
