import React from "react";
import { BarLoader } from "react-spinners";
import { GiFullPizza } from "react-icons/gi";

const Icons = () => {
  return (
    <>
      <GiFullPizza className="w-56 h-56" color={"#F47A39"} />
      <BarLoader color={"#F47A39"} className="mt-10" />
    </>
  );
};

export default Icons;
