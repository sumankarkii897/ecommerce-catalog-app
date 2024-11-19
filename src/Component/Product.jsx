import React, { useEffect, useState } from 'react';
import bracelet from "../assets/bracelet.jpg";
import axios from 'axios';

export default function Product({catName}) {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const getProduct = () => {
        const url = catName
      ? `https://dummyjson.com/products/category/${catName}`
      : 'https://dummyjson.com/products';
        axios.get(url)
            .then((res) => res.data)
            .then((finalRes) => {
                setProducts(finalRes.products); // Assuming the API response has `products` as an array
                console.log(finalRes.products);
            })
            .catch((error) => {
                console.error(`Error occurred: ${error}`);
                setError('Failed to fetch products');
            })
            .finally(() => {
                console.log("Fetched data successfully");
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getProduct();
    }, [catName]);

    const finalProduct = products.map((product, index) => {
        return (
            <div key={index} className='shadow-lg text-center pb-4'>
                <img className='w-[100%] h-[220px]' src={product.
thumbnail
 || bracelet} alt={product.title || "Product"} />
                <h4>{product.title || "Unknown Product"}</h4>
                <b>Rs {product.price || "N/A"}</b>
                <p>{product.tags[0]}</p>
            </div>
        );
    });

    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                {isLoading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    products.length===0 ? ( <div> `No products available for this category`</div>):( 
                        finalProduct
                    )
                )}
            </div>
        </>
    );
}
