import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const Anchor = ({ childNodes }: Props) => {
  return <a className={styles.anchor} {...childNodes} target="_blank"></a>;
};

export default Anchor;
