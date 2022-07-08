import ShoppingCart from "../../assets/images/shopping-cart.svg";
import Button from "@mui/material/Button";
import Checkmark from "../../assets/images/checkmark.svg";
import { useState } from "react";

const ButtonBuy = () => {
  const [iconBuy, setIconBuy] = useState(false);
  const [iconCart, setIconCart] = useState(false);

  function AlterIconBuy() {
    setIconBuy(!iconBuy);
  }

  function AlterIconCart() {
    setIconCart(!iconCart);
  }

  return (
    <div className="mt-6 flex flex-row">
      <div>
        {!iconBuy ? (
          <Button
            variant="contained"
            className="w-50 h-14"
            color="secondary"
            onClick={AlterIconBuy}
            endIcon={
              !iconBuy ? (
                <img src={ShoppingCart} alt="shopping-cart" className="h-8" />
              ) : (
                <img src={Checkmark} alt="send-buy" className="h-8" />
              )
            }
          >
            <p className="text-2xl capitalize font-bold">Comprar Agora</p>
          </Button>
        ) : (
          <Button
            variant="contained"
            className="w-50 h-14 opacity-80"
            color="success"
            endIcon={
              <img src={Checkmark} alt="shopping-cart" className="w-10" />
            }
          >
            <p className="text-2xl capitalize font-bold">Pedido Realizado</p>
          </Button>
        )}
      </div>
      <div className="ml-4">
        <Button
          variant="contained"
          className="w-3 h-14"
          color="success"
          onClick={AlterIconCart}
          endIcon={
            !iconCart ? (
              <img
                src={ShoppingCart}
                alt="shopping-cart"
                className="h-14 -m-1"
              />
            ) : (
              <img
                src={ShoppingCart}
                alt="send-cart"
                className="h-14 -m-1 opacity-70 hover: w-8 transition-all "
              />
            )
          }
        ></Button>
      </div>
    </div>
  );
};

export default ButtonBuy;
