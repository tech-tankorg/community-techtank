import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}

const parseID = (node: string | string[]) => {
  const id = Array.isArray(node) ? node.join("") : node;

  return id
    .toLowerCase()
    .replace(/:([a-zA-Z0-9_#]+):/, "")
    .replace(/[^a-z0-9 ]/g, "")
    .trim()
    .replace(/[ ]/g, "-");
};

const HeaderII = ({ childNodes }: Props) => {
  const id = parseID(childNodes.children);
  return <h2 id={id} className={styles.headerII} {...childNodes} />;
};

export default HeaderII;
