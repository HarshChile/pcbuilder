import React from "react";
import Add from "./Add";
import { useParams, Link } from "react-router-dom";
import { processors } from "../data/processors";
import { graphics } from "../data/graphics";
import { ssd } from "../data/ssd";
import { ram } from "../data/ram";
import { usb } from "../data/usb";
import { casefan } from "../data/casefan";
import { harddrives } from "../data/harddrives";
import { cables } from "../data/cables";
import { keyboard } from "../data/keyboard";
import { powersupply } from "../data/powersupply";

function Componentdetail() {
  const { id, type } = useParams();

  let selectedList = [];

  if (type === "processor") selectedList = processors;
  else if (type === "graphics") selectedList = graphics;
  else if (type === "ssd") selectedList = ssd;
  else if (type === "ram") selectedList = ram;
  else if (type === "usb") selectedList = usb;
  else if (type === "casefan") selectedList = casefan;
  else if (type === "harddrives") selectedList = harddrives;
  else if (type === "cables") selectedList = cables;
  else if (type === "keyboard") selectedList = keyboard;
  else if (type === "powersupply") selectedList = powersupply;

  const item = selectedList.find(c => c.id === Number(id));

  if (!item) {
    return <div className="text-white p-6">Component not found.</div>;
  }

  return (
    <div className="bg-black min-h-screen w-full text-white">

      {/* Back */}
      <Link
        to={`/${type}`}
        className="block p-6 text-green-300 hover:underline text-lg"
      >
        ← Back to Previous
      </Link>

      {/* Main Content */}
      <div className="w-full bg-gray-900 px-6 md:px-16 py-10">

        {/* Top Section: Image + Info */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center items-start">
            <img
              src={item.src}
              alt={item.pname}
              className="max-h-[420px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{item.pname}</h1>

            <p className="text-gray-300 text-lg mb-6">
              {item.description ? item.description : "Detailed description is not available for this component."}
            </p>

            {/* Placeholder for Amazon-like actions */}
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
              <p className="text-green-400 font-semibold mb-2">
                In Stock
              </p>
              <Add component={item} type={type} />
            </div>
          </div>

        </div>

        {/* Bottom Section: Details */}
        <div className="mt-12 border-t border-gray-700 pt-8 max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4">
            Product Details
          </h2>

          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-gray-400">
              
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Componentdetail;
