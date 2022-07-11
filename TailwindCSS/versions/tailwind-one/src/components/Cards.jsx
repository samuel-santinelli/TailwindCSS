/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import SetLeft from "../assets/images/set-left.svg";
import SetRight from "../assets/images/set-right.svg";
import { TbPizzaOff } from "react-icons/tb";
import PizzaQueijo from "../assets/images/pizzas/queijo.png";
import Stars from "./Stars";
import Like from "./Like";
import Close from "../assets/images/close.svg";
import PaginationComponent from "./PaginationComponent";
import ButtonBuy from "./buy/Button";

const Cards = () => {
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [modal, setModal] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

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
      sabor: "Milanesa",
      tamanho: "Grande",
      valor: 71.64,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "Nutella",
      tamanho: "Pequeno",
      valor: 65.64,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "M&M",
      tamanho: "Grande",
      valor: 81.64,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "Atum",
      tamanho: "Médio",
      valor: 92.64,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "Vegana",
      tamanho: "Grande",
      valor: 20.64,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "Bahiana",
      tamanho: "Muito Grande",
      valor: 95.99,
    },
    {
      picture:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sabor: "Portuguesa",
      tamanho: "Médio",
      valor: 85.24,
    },
  ];

  const [itens, setItens] = useState(pizzas);

  const openModal = () => {
    setModal(!modal);
  };

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  // const randomPizzas = pizzas[Math.floor(Math.random() * pizzas.length)];

  console.log("the pages is", currentItens);

  return (
    <>
      <div className="max-w-7xl h-5/6 flex justify-center items-center flex-col">
        <div className="h-96 flex justify-center">
          {modal && (
            <div className="bg-red-800 h-5/6 w-4/6 flex justify-center items-center absolute z-50 shadow-2xl">
              <button onClick={() => setModal(!modal)}>
                <img
                  src={Close}
                  alt="icon-close"
                  className="h-20 -mt-80 -ml-32 absolute"
                />
              </button>
              <div className="flex justify-center items-center text-center">
                <div className="w-20 h-52 -mt-24 -ml-48 absolute flex shadow-md shadow-black bg-red-900 rounded-tr-lg justify-center items-center text-cyan-50 capitalize flex-col">
                  <label className="text-base">calorias</label>
                  <label className="font-bold text-lg">150</label>
                  <label>---------</label>
                  <label>tamanho</label>
                  <label className="font-bold text-lg">médio</label>
                </div>
                <img src={PizzaQueijo} alt="picture-pizzas" className="w-96" />
                <div className="m-14 flex justify-center flex-col items-center">
                  <h1 className="text-5xl text-white font-bold font-sans capitalize">
                    Pizza de Queijo
                  </h1>
                  <h1 className="text-2xl text-white font-semibold font-sans capitalize mt-2">
                    Médio
                  </h1>
                  <div className="flex flex-row">
                    <h1 className="text-2xl text-white font-bold font-sans capitalize mt-2 mr-3 opacity-60 line-through ">
                      R$ 245,54
                    </h1>
                    <h1 className="text-3xl text-white font-bold font-sans capitalize mt-2">
                      R$ 245,54
                    </h1>
                  </div>
                  <ButtonBuy />
                </div>
              </div>
            </div>
          )}
          {currentItens?.length < 1 ? (
            <div></div>
          ) : (
            <button>
              <img
                onClick={() =>
                  setCurrentPage(
                    pages < 1 ? currentPage === 1 : currentPage - 1
                  )
                }
                src={SetLeft}
                alt="setLeft"
                className="w-20 h-16 cursor-pointer "
              />
            </button>
          )}
          {currentItens?.length > 0 ? (
            currentItens.map((item, key) => (
              <div
                className="w-auto h-96 bg-[#000]  shadow cursor-pointer flex justify-center items-center flex-col m-2"
                key={key}
              >
                <Like />
                <button onClick={openModal}>
                  <img
                    src={PizzaQueijo}
                    alt="picture-pizzas"
                    className="w-56"
                  />
                </button>
                <Stars />

                <h1 className="text-3xl text-white font-bold font-sans capitalize">
                  {item.sabor}
                </h1>
                <h1 className="text-xl text-white font-semibold font-sans capitalize">
                  {item.tamanho}
                </h1>
                <h1 className="text-1xl text-white font-medium font-sans capitalize">
                  R$ {item.valor}
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

          {currentItens?.length > 0 ? (
            <button>
              <img
                src={SetRight}
                alt="setRight"
                className="w-20 h-16 cursor-pointer"
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </button>
          ) : (
            <div></div>
          )}
        </div>
        {currentItens?.length < 1 ? (
          <div></div>
        ) : (
          <PaginationComponent pages={pages} setCurrentPage={setCurrentPage} />
        )}
      </div>
    </>
  );
};

export default Cards;
