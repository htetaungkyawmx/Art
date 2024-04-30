import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import PaymentForm from "../form/PaymentForm";

const Card = (props) => {
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const { cardId, image, title, userName, price, onDetail } = props;
  const favouriteHandler = (e) => {
    e.preventDefault();
    setIsLike(!isLike);
    // console.log(isLike);
    axios
      .post(`http://localhost:8080/favourite?card_id=${cardId}`, {
        favourite: isLike,
      })
      .then((value) => console.log())
      .catch((error) => console.log(error));
    setIsLike(!isLike);
    console.log(isLike);
  };

  const buyNowHandler = (e) => {
    e.preventDefault();
    console.log(userId)
    if (userId === null) {     
      window.location.href="/login"
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="w-1/3 px-[20px] my-8">
        <div className="relative">
          <Link to={`/galleryDetail/${cardId}`}>
            <img
              src={`C:/FILE_STORAGE/+${image}`}
              alt="cardbg"
              className="w-full object-cover aspect-square rounded-t-[20px] h-[300px] bg-cover bg-no-repeat"
            />
          </Link>
          <a
            href="#"
            onClick={favouriteHandler}
            className={"" + (isLike ? "text-white" : "text-red-600")}
          >
            <FaHeart className="absolute border-2 border-black rounded-lg  size-6 top-6 right-4" />
          </a>
        </div>
        <h4 className="text-{20px} font-semibold mt-2 pl-2">{title}</h4>
        <span className="block mt-2 pl-2">
          by <span className="text-{20px} font-semibold">{userName}</span>
        </span>
        <span className="block text-{18px} font-blue mt-2 pl-2">${price}</span>
        <button
          className="bg-primary w-full text-[22px] text-white font-inter font-medium text-center py-2 mt-2"
          onClick={buyNowHandler}
        >
          Buy Now
        </button>
        <PaymentForm onClose={() => setShowModal(false)} visible={showModal}  />

      </div>

    </>
  );
};

export default Card;
