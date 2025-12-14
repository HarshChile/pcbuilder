import React from "react";
import { useParams, Link } from "react-router-dom";
import { processors } from "../data/processors";
import { graphics } from "../data/graphics";
import { ssd } from "../data/ssd";
import { ram } from "../data/ram";
import { casefan } from "../data/casefan";
import { harddrives } from "../data/harddrives";
import { cables } from "../data/cables";
import Browse from "./Browse";
import { usb } from "../data/usb";   
import { keyboard } from "../data/keyboard";
import { powersupply } from "../data/powersupply"; 



function ComponentListPage() {
  const { type } = useParams();

  let list = [];

  if (type === "processor") list = processors;
  if (type === "graphics") list = graphics;
  if (type === "ssd") list = ssd;
  if (type === "ram") list = ram;
  if (type === "casefan") list = casefan;
  if (type === "harddrives") list = harddrives;
  if (type === "cables") list = cables;
  if (type === "usb") list = usb;
  if (type === "keyboard") list = keyboard;
  if (type === "powersupply") list = powersupply;


  return (
    <div className="bg-black min-h-screen page-enter">
      <nav className="text-white px-6 py-3 text-xl pt-8">
        <Link to="/" className="hover:text-green-300">Back to Home</Link>
      </nav>

      <div className="px-8 py-8">
        <h1 className="text-4xl font-bold mb-6 text-green-300 p-3 capitalize">
          {type} Options
        </h1>

        {list.length === 0 ? (
          <p className="text-white text-lg">No components found for {type}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {list.map(component => (
              <Browse 
                key={component.id} 
                component={component} 
                type={type}  
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentListPage;
