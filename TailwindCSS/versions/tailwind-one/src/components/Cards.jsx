/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import SetLeft from "../assets/images/set-left.svg";
import SetRight from "../assets/images/set-right.svg";
import { TbPizzaOff } from "react-icons/tb";
import HeartSolid from "../assets/images/heart-solid.svg";
import HeartOutline from "../assets/images/heart-outline.svg";
import PizzaQueijo from "../assets/images/pizzas/queijo.png";
import Star from "../assets/images/star.svg";
import StarOutline from "../assets/images/star-outline.svg";

const Cards = () => {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  function setLeft() {
    setCount(count - 1);
    console.log(count);
  }

  const dectectLike = () => {
    setLiked(!liked);
  };

  function setRight() {
    setCount(count + 1);
    console.log(count);
  }

  const pizzas = [
    {
      picture:
        "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "camarão",
      tamanho: "médio",
      valor: 44.54,
    },
    {
      picture:
        "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "catuppiry",
      tamanho: "grande",
      valor: 64.24,
    },
    {
      picture:
        "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "calabresa",
      tamanho: "Fatias",
      valor: 74.99,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "maguerita",
      tamanho: "Muito Grande",
      valor: 45.24,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "maguerita",
      tamanho: "Muito Grande",
      valor: 45.24,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "framboesa",
      tamanho: "Pequena",
      valor: 20.54,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "gallieto",
      tamanho: "Normal",
      valor: 32.32,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "Amora",
      tamanho: "Grande",
      valor: 95.24,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "A moda da Casa",
      tamanho: "Grande",
      valor: 31.64,
    },
    
  ];

  const [itens, setItens] = useState(pizzas);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  const randomPizzas = pizzas[Math.floor(Math.random() * pizzas.length)];

  return (
    <>
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        {pizzas?.length > 0 ? (
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

        {currentItens?.length > 0 ? (
          currentItens.map((item, key) => (
            <div
              className="w-96 h-96 bg-[#000]  shadow cursor-pointer flex justify-center items-center flex-col m-2"
              key={key}
            >
              {!liked ? (
                <img
                  src={HeartSolid}
                  onClick={dectectLike}
                  checked={liked}
                  alt="heart-solid"
                  className="h-12 -m-40 ml-20 cursor-pointer absolute"
                />
              ) : (
                <img
                  src={HeartOutline}
                  onClick={dectectLike}
                  checked={liked}
                  alt="heart-outline"
                  className="h-12 -m-40 ml-20 cursor-pointer absolute"
                />
              )}
              <img src={PizzaQueijo} alt="picture-pizzas" className="w-56" />
              <div className="flex flex-row">
                <img
                  src={StarOutline}
                  className="h-7 cursor-pointer"
                  alt="image-pizza"
                />
                <img
                  src={StarOutline}
                  className="h-7 cursor-pointer"
                  alt="image-pizza"
                />
                <img
                  src={StarOutline}
                  className="h-7 cursor-pointer"
                  alt="image-pizza"
                />
                <img
                  src={StarOutline}
                  className="h-7 cursor-pointer"
                  alt="image-pizza"
                />
                <img
                  src={Star}
                  className="h-7 cursor-pointer"
                  alt="image-pizza"
                />
              </div>
              <h1 className="text-3xl text-white font-bold font-sans capitalize">
                {item.sabor}
              </h1>
              <h1 className="text-xl text-white font-semibold font-sans capitalize">
                {item.tamanho}
              </h1>
              <h1 className="text-1xl text-white font-medium font-sans capitalize">
                {item.valor}
              </h1>
            </div>
          ))
        ) : (
          <div className="h-auto w-auto flex justify-center flex-col items-center">
            <h1 className="text-orange-500 font-bold text-3xl">
              No momento estamos sem Pizzas!
            </h1>
            <TbPizzaOff color={"#FFB11B"} size={"70"} />
          </div>
        )}
        {pizzas?.length > 0 ? (
          <button>
            <img
              src={SetRight}
              alt="setRight"
              className="w-20 h-14 cursor-pointer"
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            />
          </button>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              value={index}
              className="text-black bg-white"
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
