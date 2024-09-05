import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const orderedList = ({ childNodes }: Props) => {
  return <ol className={styles.orderedList} {...childNodes}></ol>;
};

export default orderedList;
