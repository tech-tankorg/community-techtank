import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const Blockquote = ({ childNodes }: Props) => {
  return (
    <blockquote className={styles.blockQuote} {...childNodes}></blockquote>
  );
};

export default Blockquote;
