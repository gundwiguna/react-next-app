import React from 'react'
import './scss/main.scss'
import { Navbar, NavItem, Nav, NavLink } from 'reactstrap'
import Head from 'next/head'
import Link from 'next/link'

const Layout = props => {
  return (
    <div className="layout">
      <Head>
        {/* bootstrap cdn for css backup */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <title>News and Weather</title>
      </Head>
      <Navbar color="light" light expand="md">
        <Nav navbar>
          <NavItem className="mx-2">
            <Link href="/">
              <a>Home</a>
            </Link>
          </NavItem>
          <NavItem className="mx-2">
            <Link href="/weather">
              <a>Weather</a>
            </Link>
          </NavItem>
          <NavItem className="mx-2">
            <Link href="/news">
              <a>News</a>
            </Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="mx-2 text-sm ml-auto">
            <a
              className="text-sm"
              target="_blank"
              rel="noreferer noopener"
              href="https://gundwiguna.github.io"
            >
              @gundwiguna
            </a>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="container">
        <div className="pt-3">{props.children}</div>
      </div>
    </div>
  )
}

export default Layout
