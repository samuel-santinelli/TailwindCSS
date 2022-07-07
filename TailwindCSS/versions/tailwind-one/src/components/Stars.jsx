/* eslint-disable jsx-a11y/img-redundant-alt */
import Star from "../assets/images/star.svg";
import StarOutline from "../assets/images/star-outline.svg";

const Stars = () => {
  return (
    <div className="flex flex-row">
      <img src={StarOutline} className="h-7 cursor-pointer" alt="image-pizza" />
      <img src={StarOutline} className="h-7 cursor-pointer" alt="image-pizza" />
      <img src={StarOutline} className="h-7 cursor-pointer" alt="image-pizza" />
      <img src={StarOutline} className="h-7 cursor-pointer" alt="image-pizza" />
      <img src={Star} className="h-7 cursor-pointer" alt="image-pizza" />
    </div>
  );
};

export default Stars;
