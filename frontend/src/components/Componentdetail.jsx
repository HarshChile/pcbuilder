import React, { useEffect, useState } from "react";
import Add from "./Add";
import { useParams, Link } from "react-router-dom";
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
    return (
      <div className="bg-black min-h-screen text-white p-10">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen text-white p-10">
        <Link to={`/${type}`} className="text-green-300">
          ← Back
        </Link>
        <p className="mt-6 text-red-400">{error}</p>
      </div>
    );
  }

  // Fields we do NOT want to auto-render
  const ignoredFields = [
    "id",
    "pname",
    "src",
    "info",
    "price",
    "description",
    "createdAt",
    "updatedAt",
  ];

  // Convert key names to readable labels
  const formatLabel = (key) =>
    key
      .replace(/_/g, " ")
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Back */}
      <Link
        to={`/${type}`}
        className="block p-6 text-green-300 hover:underline text-lg"
      >
        ← Back to Previous
      </Link>

      {/* Main */}
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
            {item.price && (
              <p className="text-2xl font-semibold text-green-400 mb-4">
                ₹{Number(item.price).toLocaleString("en-IN")}
              </p>
            )}

            <p className="text-gray-300 text-lg mb-6">{item.description}</p>

            {item.info && <p className="text-gray-400 mb-6">{item.info}</p>}

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Specifications</h2>

              <div className="space-y-2">
                {Object.entries(item)
                  .filter(
                    ([key, value]) =>
                      value !== null &&
                      value !== "" &&
                      !ignoredFields.includes(key)
                  )
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between border-b border-gray-700 py-1"
                    >
                      <span className="text-gray-400">{formatLabel(key)}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
              </div>
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
