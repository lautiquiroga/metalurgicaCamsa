import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className={vertical ? "homeContainerMobile" : "homeContainerPC"}></div>
  );
}
