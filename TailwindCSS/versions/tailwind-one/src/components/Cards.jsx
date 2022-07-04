import { useState } from "react";
import SetLeft from "../assets/images/set-left.svg";
import SetRight from "../assets/images/set-right.svg";

const Cards = () => {
  const [count, setCount] = useState(0);

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

  return (
    <div className="max-w-6xl mx-auto flex justify-center items-center">
      {setLeft < 0 ? (
        <button >
          <img
            src={SetLeft}
            alt="setLeft"
            className="w-20 h-14 cursor-pointer"
            onClick={setLeft}
            disabled
          />
        </button>
      ) : (
        <button>
          <img
            src={SetLeft}
            alt="setLeft"
            className="w-20 h-14 cursor-pointer"
            onClick={setLeft}
          />
        </button>
      )}
      {pizzas?.length > 0 ? (
        pizzas.map((item) => (
          <div className="w-72 h-5/6 bg-[#1da1f2] flex justify-center items-center flex-col m-2">
            <h1>{item.sabor}</h1>
            <h1>{item.tamanho}</h1>
            <h1>{item.valor}</h1>
          </div>
        ))
        ) : (
        <h1>Hoje estamos sem Pizzas!</h1>
        )}
      <img
        src={SetRight}
        alt="setRight"
        className="w-20 h-14 cursor-pointer"
        color={"#de0611"}
        onClick={setRight}
      />
    </div>
  );
};

export default Cards;
