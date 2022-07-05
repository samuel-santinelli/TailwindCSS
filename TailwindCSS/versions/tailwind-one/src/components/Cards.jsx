import { useState } from "react";
import SetLeft from "../assets/images/set-left.svg";
import SetRight from "../assets/images/set-right.svg";
import HeartSolid from "../assets/images/heart-solid.svg";
import HeartOutline from "../assets/images/heart-outline.svg";
import ButtonLike from "./ButtonLike";

const Cards = (props) => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  function setLeft() {
    setCount(count - 1);
    console.log(count);
  }

  function setRight() {
    setCount(count + 1);
    console.log(count);
  }

  const pizzas = [
    {
      sabor: "camarão",
      tamanho: "médio",
      valor: 44.54,
    },
    {
      sabor: "catuppiry",
      tamanho: "grande",
      valor: 64.24,
    },
    {
      sabor: "calabresa",
      tamanho: "grande",
      valor: 74.99,
    },
    {
      sabor: "maguerita",
      tamanho: "grande",
      valor: 45.24,
    },
  ];
  const randomPizzas = pizzas[Math.floor(Math.random() * pizzas.length)];

  console.log(randomPizzas);

  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center">
      {pizzas[0]?.length < 0 ? (
        <button>
          <img
            onClick={setLeft}
            src={SetLeft}
            alt="setLeft"
            className="w-20 h-14 cursor-pointer"
          />
        </button>
      ) : (
        <div></div>
      )}
      {pizzas[0]?.length > 0 ? (
        pizzas.map((item, key) => (
          <div
            className="w-72 h-5/6 bg-[#1da1f2] flex justify-center items-center flex-col m-2"
            key={key}
          >
            <h1 className="font-bold font-sans capitalize">{item.sabor}</h1>
            <h1>{item.tamanho}</h1>
            <h1>{item.valor}</h1>
            <ButtonLike
              checked={liked}
              onChange={setLiked}
              // eslint-disable-next-line jsx-a11y/alt-text
              liked={<img src={HeartSolid} />}
              // eslint-disable-next-line jsx-a11y/alt-text
              disliked={<img src={HeartOutline} />}
            />
          </div>
        ))
      ) : (
        <h1>No momento estamos sem Pizzas!</h1>
      )}
      {pizzas[0]?.length < 0 ? (
        <button>
          <img
            src={SetRight}
            alt="setRight"
            className="w-20 h-14 cursor-pointer"
            onClick={setRight}
          />
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cards;
