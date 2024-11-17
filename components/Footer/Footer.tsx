import React from "react";
import cx from "clsx";
import styles from "./Footer.module.css";

import Logo from "../svgs/logo";
import IconContext from "../../utils/context/IconContext";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.mainWrapper}>
      <section className={cx("mainContent", styles.footer)}>
        <Logo />
        <section className={styles.socialsWrapper}>
          <div className={styles.socials}>
            <a
              className={styles.socialsLink}
              href="https://ca.linkedin.com/company/techtank-to"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext className={styles.socialsIcon}>
                <FaLinkedin />
              </IconContext>
            </a>
            <a
              className={styles.socialsLink}
              href="https://www.instagram.com/techtankto/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext className={styles.socialsIcon}>
                <FaInstagram />
              </IconContext>
            </a>
            <a
              className={styles.socialsLink}
              href="https://ca.linkedin.com/company/techtank-to"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext className={styles.socialsIcon}>
                <FaGithub />
              </IconContext>
            </a>
          </div>
          <p className={styles.copyright}>
            Copyright {new Date().getFullYear()} TechTank. All rights reserved
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
