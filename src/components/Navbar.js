import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

export default function Navbar(props) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Apply or remove dark mode className on the document element
        if (isDarkMode) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
        document.documentElement.removeAttribute('data-bs-theme');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Options
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action 1</a></li>
                  <li><hr className="dropdown-divider"/></li> 
                  <li><a className="dropdown-item" href="/">Action 2</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Action 3</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ms-4">
                <li className="nav-item"> 
                  <div className="className">
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> 
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode==='light'?'🌙':'☀️'}</label>
                    </div>
                  </div>
                </li>
            </ul>
            {/* <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <button 
                      className="btn btn-outline-secondary"
                      onClick={toggleDarkMode}
                  >
                      {isDarkMode ? '☀️ Light' : '🌙 Dark'}
                  </button>
                  </li>
              </ul>
            </div> */}
          </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
 
Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About Text Here"
}

