import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/">
      <PageHeader
        title={<div style={{ marginLeft: 10 }}>Heterochromic Loogies</div>}
        subTitle="Suspicious Loogies :-/"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
