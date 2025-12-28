import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Add from "./Add";
import api from "../api/axios";

function Componentdetail() {
  const { id, type } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const res = await api.get(`/components/${type}/details/${id}`);
        setItem(res.data);
      } catch (err) {
        setError("Component not found");
      } finally {
        setLoading(false);
      }
    };

    fetchComponent();
  }, [type, id]);

  if (loading) {
    return <div className="bg-black min-h-screen text-white p-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen text-white p-10">
        <Link to={`/${type}`} className="text-green-300">← Back</Link>
        <p className="mt-6 text-red-400">{error}</p>
      </div>
    );
  }

  const specMaps = {
    processor: {
      cores: (v) => `${v} Cores`,
      threads: (v) => `${v} Threads`,
      baseClock: (v) => `${v} GHz`,
      boostClock: (v) => `${v} GHz`,
      tdp: (v) => `${v} W`,
      socket: (v) => v,
    },

    motherboard: {
      socket: (v) => v,
      ramsocket: (v) => v,
      formfactor: (v) => v,
      // common fallback fields if present
      memorySlots: (v) => `${v} Slots`,
      maxMemory: (v) => `${v} GB`,
    },

    graphics: {
      vram: (v) => `${v} GB`,
      coreClock: (v) => `${v} MHz`,
      boostClock: (v) => `${v} MHz`,
      tdp: (v) => `${v} W`,
      formfactor: (v) => v,
    },

    case: {
      formfactor: (v) => v,
      gpuSupport: (v) => v,
    },
    
    casefan: {
      blades: (v) => v,
      speed: (v) => v,
    },
   
    powersupply: {
      voltage: (v) => `${v} V`,
    }
  };

  const specMap = specMaps[type] || {};


  return (
    <div className="bg-black min-h-screen text-white">

     
      <Link
        to={`/${type}`}
        className="block p-6 text-green-300 hover:underline text-lg"
      >
        ← Back to Previous
      </Link>

      <div className="bg-gray-900 px-6 md:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-12">

          
          <div className="lg:flex-1 flex justify-center">
            <img
              src={`http://localhost:3001${item.src}`}
              alt={item.pname}
              className="max-h-[600px] w-full object-contain"
            />
          </div>

          
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{item.pname}</h1>

            {item.description && (
              <p className="text-gray-300 text-lg mb-6">
                {item.description}
              </p>
            )}

            {item.info && (
              <p className="text-gray-400 mb-6">
                {item.info}
              </p>
            )}

            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {Object.entries(specMap).map(([key, formatter]) => {
                if (item[key] === undefined || item[key] === null) return null;

                return (
                  <div
                    key={key}
                    className="bg-black/40 p-4 rounded-lg flex justify-between"
                  >
                    <span className="text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-semibold">
                      {formatter(item[key])}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 mb-6">
              {item.price !== undefined && item.price !== null && (
                <div className="text-2xl font-bold text-green-400">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </div>
              )}

              <Add component={item} type={type} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Componentdetail;
