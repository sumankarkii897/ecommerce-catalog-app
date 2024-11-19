import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Category({setCatname}) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCategories = () => {
    axios
      .get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes); // Inspect the structure of the API response
        setCategory(finalRes); // Set categories
      })
      .catch((error) => {
        console.error(`Error occurred: ${error}`);
        setError('Failed to load categories');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const categories = category.map((el, ind) => (
    <li
      key={ind}
      onClick={()=>setCatname(el.name || el)}
      className="bg-[#aea9a9] p-[7px] cursor-pointer text-[20px] font-serif font-[500] text-center mb-2"
    >
      
      {typeof el === 'object' ? el.name : el} {/* Adjust rendering based on type */}
    </li>
  ));

  return (
    <>
      {loading ? (
        <p className="text-center text-gray-500">Loading categories...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <h3 className="text-[25px] font-bold p-[10px]">Category</h3>
          <ul>{categories}</ul>
        </>
      )}
    </>
  );
}
