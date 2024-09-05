import Image from "next/image";
import styles from "../styles/MDX.module.css";

interface Props {
  childNodes: any;
}
const Images = ({ childNodes }: Props) => {
  const { src, alt } = childNodes;
  return (
    <Image
      src={""}
      alt={alt}
      width={500}
      height={400}
      className={styles.ImageTag}
    />
  );
};

export default Images;
