import React, { useEffect, useState } from 'react';
import profile1 from '../../images/profile1.png';
import gallery1 from '../../images/gallery1.png';
import detail1 from '../../images/detail1.png';
import axios from 'axios';

const ProductDetail = () => {
    const [cardDetailList, setCardDetailList] = useState([] );
    // {
    //     id: 1,
    //     name: ' dsjfka ',
    //     price:'$1000',
    //     img: detail1,
    //     description: "skdjfksdk",
    //     prfileimg: profile1,
    // },
    // {
    //     id: 2,
    //     name: ' dsjfka ',
    //     price: "$1000",
    //     img: gallery1,
    //     description: "skdjfksdk",
    // }
    // }, {
    //     id: 3,
    //     name: ' dsjfka ',
    //     price: $1000,
    //     img: gallery1,
    //     description: "skdjfksdk",
    // }, {
    //     id: 4,
    //     name: ' dsjfka ',
    //     price: $1000,
    //     img: gallery1,
    //     description: "skdjfksdk",
    // },
    // {
    //     id: 5,
    //     name: ' dsjfka ',
    //     price: $1000,
    //     img: gallery1,
    //     description: "skdjfksdk",
    // },
    // {
    //     id: 6,
    //     name: ' dsjfka ',
    //     price: $1000,
    //     img: gallery1,
    //     description: "skdjfksdk",
    // },
    // {
    //     id: 7,
    //     name: ' dsjfka ',
    //     price: $1000,
    //     img: gallery1,
    //     description: "skdjfksdk",
    // },
    // {
    //     id: 8,
    //     name: ' dsjfka ',
    //     price: $1000,
    //     img: gallery1,
    //     description: "skdjfksdk",
    // },
    // {
    //     id: 9,
    //     name: ' dsjfka ',
    //     price: $1000,
    //     img: gallery1,
    //     description: "skdjfksdk",
    // },
    //]
    // const [productDetail, setProductDetail] = useState("");
    useEffect(() => {
        const categoryapiUrl = "http://localhost:8080/cards";
        axios.get(categoryapiUrl).then((response) => {
            setCardDetailList(response.data);
            console.log(response.data);
        })
            .catch((error) => {
                console.error("Error Fetching card details", error);
            });
    }, []);
    return (

        <>

            <div className="m-20 font-muli">
                <div className="m-auto w-[1300px]">
                    {cardDetailList.map((item) => (
                        <div className="flex flex-wrap mb-12" key={item.id}>
                            <div>
                                <img className="w-[600px]" src={item.image} alt="" />
                                <div className="flex items-center gap-4 mt-[20px]">
                                    <img className="w-10 h-10 rounded-full" src={item.profileImg} alt="" />
                                    <div className="w-full flex justify-between font-medium dark:text-white">
                                        <div className="flex flex-col p-2 font-semibold text-[20px]">
                                            <span className="mb-1">{item.imageTitle}</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">By {item.name}</span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="font-semibold pr-4 ">${item.price}</span>
                                            <button className="bg-[#898121] w-[140px] p-2 rounded-[30px] text-[20px]">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pl-8">
                                <div className="flex flex-wrap mb-4">
                                    <h3 className=''>Published:</h3>
                                    <p>12.2.2023</p>
                                </div>
                                <h3 className="mb-4 font-bold">Contact with artist</h3>
                                Add your contact icons here
                                <h3 className="text-[25px] mb-4 font-bold">IDEA OF MY ART</h3>
                                <p className="w-[500px] text-[20px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default ProductDetail;
