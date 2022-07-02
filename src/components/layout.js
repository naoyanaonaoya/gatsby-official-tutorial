import * as React from "react";
import { Link } from "gatsby";
import useSiteMetadata from "../hooks/use-site-metadata";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./Layout.module.css";

const Layout = (props) => {
  // https://dezanari.com/react-component-props-object/
  const { pageTitle, children } = props;
  const { title, siteUrl, name, content } = useSiteMetadata();

  return (
    <>
      <div className={container}>
        <title>
          {pageTitle} / {title}
        </title>
        <header className={siteTitle}>{title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contentful" className={navLinkText}>
                Contentful
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
