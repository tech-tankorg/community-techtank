import styles from "../styles/MDX.module.css";

interface Props {
  src: string;
  type: "video/mp4" | "video/webm" | "video/ogg";
  width: number;
  aspect_ratio: { width: number; height: number };
}
const Video = ({ src, type, width, aspect_ratio }: Props) => {
  const height = ((
    width: number,
    aspect_ratio: { width: number; height: number }
  ) => {
    if (aspect_ratio.width > aspect_ratio.height) {
      return (width * aspect_ratio.width) / aspect_ratio.height;
    }

    return (width * aspect_ratio.height) / aspect_ratio.width;
  })(width, aspect_ratio);
  return (
    <video controls className={styles.video} width={width} height={height}>
      <source src={src} type={type} />
    </video>
  );
};

export default Video;
