import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const Code = ({ childNodes }: Props) => {
  return <code {...childNodes} className={styles.code_Inline}></code>;
};

export default Code;
