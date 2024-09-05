import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const HeaderII = ({ childNodes }: Props) => {
  return (
    <h2
      id={childNodes.children
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/[ ]/g, "-")
        .trim()}
      className={styles.headerII}
      {...childNodes}
    ></h2>
  );
};

export default HeaderII;
