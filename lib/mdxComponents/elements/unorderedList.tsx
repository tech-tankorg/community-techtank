import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const unOrderedList = ({ childNodes }: Props) => {
  return <ul className={styles.unOrderedList} {...childNodes}></ul>;
};

export default unOrderedList;
