import React from "react";
import { useParams, Link } from "react-router-dom";
import { processors } from "../data/processors";
import { graphics } from "../data/graphics";
import { ssd } from "../data/ssd";
import { ram } from "../data/ram";
import {usb} from "../data/usb";
import { casefan } from "../data/casefan";
import { harddrives } from "../data/harddrives";
import { cables } from "../data/cables";
import { keyboard } from "../data/keyboard";
import { powersupply} from "../data/powersupply";

function Componentdetail() {
  const { id, type } = useParams();

  let selectedList = [];

  if (type === "processor") {
    selectedList = processors;
  } else if (type === "graphics") {
    selectedList = graphics; 
  }
  else if (type === "ssd") {
    selectedList = ssd;
  }
  else if (type === "ram") {
    selectedList = ram;
  }
  else if (type === "usb") {
    selectedList = usb;
  }
  else if (type === "casefan") {
    selectedList = casefan;
  }
  else if (type === "harddrives") {
    selectedList = harddrives;
  }
  else if (type === "cables") {
    selectedList = cables;
  }
  else if (type === "keyboard") {
    selectedList = keyboard;
  }
  else if (type === "powersupply") {
    selectedList = powersupply;
  }
  

  const item = selectedList.find(c => c.id === Number(id));

  if (!item) {
    return <div className="text-white p-6">Component not found.</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white p-8">

      <Link to={`/${type}`} className="text-green-300 hover:underline text-lg">
        ← Back to Previous
      </Link>

      <div className="mt-10 max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">

        <img
          src={item.src}
          alt={item.pname}
          className="w-full h-96 object-contain mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">{item.pname}</h1>

        <p className="text-gray-300 text-lg">{item.info}</p>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-400">Add more specifications here later.</p>
        </div>

      </div>
    </div>
  );
}

export default Componentdetail;
