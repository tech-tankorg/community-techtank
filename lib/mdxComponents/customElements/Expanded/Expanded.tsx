"use client";
import { ReactNode } from "react";
import styles from "./expanded.module.css";

import useToggle from "@utils/hooks/use-toggle";

interface Props {
  children: ReactNode;
}
const Expanded = ({ children }: Props) => {
  const [showExpanded, setShowExpanded] = useToggle(false);

  return (
    <section className={styles.expandedMenu}>
      {showExpanded ? (
        <>{children}</>
      ) : (
        <p className={styles.showMoreBtn} onClick={setShowExpanded}>
          Show more
        </p>
      )}
    </section>
  );
};

export default Expanded;
