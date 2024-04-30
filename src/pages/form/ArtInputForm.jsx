import React, { useEffect, useState } from "react";
// import CategoryRequest from "../../fetchData/CategoryRequest";
import axios from "axios";
import { useNavigate } from "react-router";
import { createCard } from "../../utils/ApiFunction";

const ArtInputForm = ({ visible, onClose }) => {
  const userId = sessionStorage.getItem("userId");
  const [artImage, setArtImage] = useState();
  const [inputArt, setInputArt] = useState({
    imageTitle: "",
    price: "",
    category_id: "",
    description: "",
  });

  const artImageChange = (e) => {
    const file = e.target.files[0];
    setArtImage(file);
  };
  console.log(inputArt);

  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState([]);

  const apiUrlcategory = "http://localhost:8080/categories";

  useEffect(() => {
    axios.get(apiUrlcategory).then((response) => {
      setCategoryData(response.data);
      // console.log(response.data)
    });
  }, []);

  const submithandler = async (e) => {
    e.preventDefault();

    if (
      !inputArt.imageTitle ||
      !inputArt.price ||
      !inputArt.category_id ||
      !inputArt.description
    ) {
      console.log("Please fill out all required fields");
      return;
    } else {
      try {
        const success = await createCard(userId, artImage, inputArt);
        if (success != undefined) {
          window.location.href = "/gallery";
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  //

  const titleChange = (e) => {
    const setWriteTitle = e.target.value;
    setInputArt({ ...inputArt, imageTitle: setWriteTitle });
  };

  const priceChange = (e) => {
    const setWritePrice = e.target.value;
    setInputArt({ ...inputArt, price: setWritePrice });
  };

  const categoryChange = (e) => {
    const setWriteCategoryId = e.target.value;
    setInputArt({ ...inputArt, category_id: setWriteCategoryId });
  };

  const descriptionChange = (e) => {
    const setWriteDescription = e.target.value;
    setInputArt({ ...inputArt, description: setWriteDescription });
  };

  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <form
        onSubmit={submithandler}
        className="flex flex-col  w-1/4 bg-white p-6 rounded"
      >
        <h2 className="text-[40px] text-center mb-4">Creation Form</h2>
        <input
          type="file"
          placeholder="Put Your Art Image"
          className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
          onChange={artImageChange}
        />

        <input
          type="text"
          placeholder="Put Your Art Title"
          className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
          onChange={titleChange}
        />

        <input
          type="text"
          placeholder="Price"
          className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
          onChange={priceChange}
        />

        <label>CATEGORY</label>
        <select
          type="text"
          className="border hover:border-2 hover:border-[#898121] border-gray-700 p-2 rounded mb-5"
          onChange={categoryChange}
        >
          {categoryData.map((item) => {
            return (
              <option  key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>

        {/* <select className="hidden" value={userId} onChange={userChange}>{userId}</select> */}
        <textarea
          type="text"
          placeholder="Description"
          className="border border-gray-700 hover:border-2 hover:border-[#898121] p-2 rounded mb-5"
          onChange={descriptionChange}
        />

        <button className="bg-[#898121] border border-gray-700 p-2 rounded mb-5">
          Enter
        </button>
      </form>
    </div>
  );
};

export default ArtInputForm;
