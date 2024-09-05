import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const HeaderIII = ({ childNodes }: Props) => {
  return (
    <h3
      id={childNodes.children
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/[ ]/g, "-")
        .trim()}
      className={styles.headerIII}
      {...childNodes}
    ></h3>
  );
};

export default HeaderIII;
