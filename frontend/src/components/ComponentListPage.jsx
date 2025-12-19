import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Browse from "./Browse";
import api from "../api/axios";

function ComponentListPage() {
  const { type } = useParams();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await api.get(`/components/${type}`);
        setList(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, [type]);

  return (
    <div className="bg-black min-h-screen">
      <nav className="text-white px-6 py-8 text-xl">
        <Link to="/" className="inline-block hover:text-green-300">
          Back to Home
        </Link>
      </nav>

      <div className="px-8 py-8">
        <h1 className="text-4xl font-bold mb-6 text-green-300 capitalize">
          {type} Options
        </h1>

        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && (
          <div>
            {searchQuery && (
              <p className="text-gray-300 mb-4">
                Showing results for "{searchQuery}"
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {list
                .filter((component) => {
                  if (!searchQuery) return true;
                  const q = searchQuery.toLowerCase();
                  return (
                    (component.pname &&
                      component.pname.toLowerCase().includes(q)) ||
                    (component.info && component.info.toLowerCase().includes(q))
                  );
                })
                .map((component) => (
                  <Browse
                    key={component.id}
                    component={component}
                    type={type}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComponentListPage;
