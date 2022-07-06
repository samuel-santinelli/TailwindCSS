import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { GiFullPizza } from "react-icons/gi";
import IconsLoading from "../assets/icons/IconsLoading";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    loading && (
      <div className="h-screen flex justify-center items-center flex-col bg-black">
        <IconsLoading />
      </div>
    )
  );
};

export default Loading;
