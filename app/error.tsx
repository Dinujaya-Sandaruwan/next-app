"use client";

import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <button onClick={() => reset()}>Retry</button>
      <div>ErrorPage</div>
    </>
  );
};

export default ErrorPage;
