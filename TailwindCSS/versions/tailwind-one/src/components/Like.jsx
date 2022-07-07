import { useState } from "react";
import HeartSolid from "../assets/images/heart-solid.svg";
import HeartOutline from "../assets/images/heart-outline.svg";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const dectectLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      {liked ? (
        <img
          src={HeartSolid}
          onClick={dectectLike}
          checked={liked}
          alt="heart-solid"
          className="h-12 -m-40 ml-20 cursor-pointer absolute hover: scale-75 transition-transform"
        />
      ) : (
        <img
          src={HeartOutline}
          onClick={dectectLike}
          checked={liked}
          alt="heart-outline"
          className="h-12 -m-40 ml-20 cursor-pointer absolute hover: w-96 transition-transform"
        />
      )}
    </>
  );
};

export default Like;
