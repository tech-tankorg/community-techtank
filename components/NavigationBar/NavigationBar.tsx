import styles from "./NavigationBar.module.css";

import Logo from "../../public/Assets/svgs/logo";

const NavigationBar = () => {
  return (
    <nav className={`mainContent ${styles.mainWrapper}`}>
      <Logo />
      <ul className={styles.navItems}>
        <li className={styles.navItems_item}>Home</li>
        <li className={styles.navItems_item}>Blog</li>
        <li className={styles.navItems_item}>Newsletter</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
