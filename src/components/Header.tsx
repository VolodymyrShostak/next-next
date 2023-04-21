"use client";

import Link from "next/link";
import React, { FC } from "react";
import styles from "@/styles/Header.styles.module.css";
import { Flex } from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <Flex className={styles.logo}>

      <Link href="/">LOGO</Link>
      </Flex>

      <ul className={styles.navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/countries">Countries</Link>
        </li>
      </ul>
    </Flex>
  );
};

export default Header;
