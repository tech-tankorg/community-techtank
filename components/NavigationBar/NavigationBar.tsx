import React from "react";
import styles from "./NavigationBar.module.css";
import cx from "clsx";

import Logo from "../../public/Assets/svgs/logo";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className={cx("mainContent", styles.mainWrapper)}>
      <Link href="/">
        <Logo />
      </Link>
      <ul className={styles.navItems}>
        <li className={styles.navItems_item}>Home</li>
        <li className={styles.navItems_item}>Blog</li>
        <li className={styles.navItems_item}>Newsletter</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
