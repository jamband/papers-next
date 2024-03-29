"use client";

import { Button } from "@/_components/button";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <Button type="submit" disabled={props.disabled} className={styles.container}>
    {props.children}
  </Button>
);
