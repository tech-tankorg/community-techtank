import React, { ReactNode } from "react";
import styles from "./styles.module.css";

import { FiAlertTriangle, FiAlertCircle } from "react-icons/fi";
import { HiInformationCircle } from "react-icons/hi";

enum asideMetaTag {
  Note = "Note",
  Alert = "Alert",
  FYI = "FYI",
}

interface Props {
  title: string;
  children: ReactNode;
  tag: asideMetaTag;
}
const Aside = ({ title, children, tag }: Props) => {
  const tagIcon = {
    Note: <FiAlertTriangle className={styles.aside__Icon} />,
    Alert: <FiAlertCircle className={styles.aside__Icon} />,
    FYI: <HiInformationCircle className={styles.aside__Icon} />,
  };
  return (
    <section className={styles.aside} data-tag={tag}>
      <div className={styles.aside_Header}>
        <p className={styles.aside__Title}>{title}</p>
        {tagIcon[tag]}
      </div>
      {children}
    </section>
  );
};

export default Aside;
