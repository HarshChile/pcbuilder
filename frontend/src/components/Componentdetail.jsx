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

  const specMap = {
    vram: val => `${val} GB`,
    coreClock: val => `${val} MHz`,
    boostClock: val => `${val} MHz`,
    tdp: val => `${val} W`,
    price: val => `₹${val.toLocaleString()}`,
    formfactor: val => val,
    socket: val => val
  };

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Back */}
      <Link
        to={`/${type}`}
        className="block p-6 text-green-300 hover:underline text-lg"
      >
        ← Back to Previous
      </Link>

      <div className="bg-gray-900 px-6 md:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Image */}
          <div className="lg:flex-1 flex justify-center">
            <img
              src={`http://localhost:3001${item.src}`}
              alt={item.pname}
              className="max-h-[600px] w-full object-contain"
            />
          </div>

          {/* Info */}
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

            {/* ---------- SPECS GRID ---------- */}
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

            {/* Add to cart */}
            <Add component={item} type={type} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Componentdetail;
