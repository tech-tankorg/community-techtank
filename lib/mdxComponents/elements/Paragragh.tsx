import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const Paragraph = ({ childNodes }: Props) => {
  return <p className={styles.paragraph} {...childNodes}></p>;
};

export default Paragraph;
