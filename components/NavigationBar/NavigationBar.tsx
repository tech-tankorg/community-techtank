import React from "react";
import styles from "./NavigationBar.module.css";
import cx from "clsx";

import Logo from "../../public/Assets/svgs/logo";
import Link from "next/link";

import { client } from "@sanity/lib/client";
import { IS_PROD } from "@utils/constants";
import groq from "groq";

import { NavigationLink_Schema } from "@utils/types/zod-schema-types";

export const getLinks = async () => {
  try {
    const query = groq`*[_type == "navigation_link"]{
  name,
   links[]->{
     "linkName":link_name,
     endpoint,
     "externalUrl":external_url
   } 
}`;

    const links = await client.fetch(
      query,
      {},
      {
        next: { revalidate: IS_PROD ? 86400 : 0 },
      }
    );

    return NavigationLink_Schema.parse(links[0]);
  } catch {
    return null;
  }
};

const NavigationBar = async () => {
  const links = await getLinks();

  return (
    <nav className={cx("mainContent", styles.mainWrapper)}>
      <Link href="/">
        <Logo />
      </Link>
      <ul className={styles.navItems}>
        {links?.links.map((link) => (
          <li key={link.linkName} className={styles.navItems_item}>
            {link.endpoint && <Link href={link.endpoint}>{link.linkName}</Link>}
            {link.externalUrl && (
              <Link href={link.externalUrl}>{link.linkName}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
