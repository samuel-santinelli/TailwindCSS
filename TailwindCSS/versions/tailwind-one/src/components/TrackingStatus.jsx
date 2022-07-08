import "../style/StyleTrackingStatus.css";
import CreditCard from "../assets/images/credit-card.svg";
import { BsBoxSeam } from "react-icons/bs";
import Truck from "../assets/images/truck.svg";
import ClipBoard from "../assets/images/clipboard.svg";

const TrackingStatus = () => {
  const DateCurrent = new Date();
  const date = `${DateCurrent.getDate()}/${
    DateCurrent.getMonth() + 1
  }/${DateCurrent.getFullYear()}`;

  const timeAtual = `${DateCurrent.getHours()}:${DateCurrent.getMinutes()}`;

  return (
    <>
      <div className=" h-36 flex justify-center items-center bg-black">
        <h1 className="text-white font-bold text-6xl">Sua pizza em poucos minutos!</h1>
      </div>
      <div className="container">
        <div className="item">
          <div className="circle">
            <img
              className="bi bi-card-text w-10"
              src={ClipBoard}
              alt="pedido-feito"
            ></img>
          </div>
          <div className="description">
            <h2>Pedido Realizado</h2>
            <h4>{date}</h4>
          </div>
        </div>
        {/* <-----------------------------> */}
        <div className="item">
          <div className="circle">
            <img
              src={CreditCard}
              alt="credit-card"
              className="bi bi-credit-card w-10"
            />
          </div>
          <div className="description">
            <h2>Pedido Pago</h2>
            <h4>
              {date} ás {timeAtual}
            </h4>
          </div>
        </div>
        {/* <-----------------------------> */}
        <div className="item">
          <div className="circle">
            <img src={Truck} alt="truck-icon" className="bi bi-truck w-10" />
          </div>
          <div className="description">
            <h2>Enviado</h2>
            <h4>
              {date} ás {timeAtual}
            </h4>
          </div>
        </div>
        {/* <-----------------------------> */}
        <div className="item">
          <div className="circle">
            <BsBoxSeam
              alt="box-icon"
              className="bi bi-box-seam w-10"
              color={"#35f039"}
              size={29}
            />
          </div>
          <div className="description">
            <h2>Entregue</h2>
            <h4>
              {date} ás {timeAtual}
            </h4>
          </div>
        </div>
        {/* <-----------------------------> */}
      </div>
    </>
  );
};

export default TrackingStatus;
