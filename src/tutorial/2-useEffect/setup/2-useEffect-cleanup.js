import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  let [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []); //In this case we can have either dependency array or the above commented cleanup function
  console.log("render");

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
