import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const TestNew = () => {
  const dispatch = useDispatch();

  const handleClickHardcoded = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const url = 'api/brands/allBrands';
    console.log('Request URL:', url);

    await axios.get("http://localhost:3300/api/product/allProducts", { withCredentials: true });
    // await axios.get(url, { withCredentials: true });
  };

  const handleClickProxy = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const url = 'api/product/allProducts';
    console.log('Request URL:', url);

    // await axios.get("http://localhost:3300/api/brands/allBrands", { withCredentials: true });
    await fetch("/api/product/allProducts",{method: 'GET'});
  };

  return (
    <div>
      <button onClick={handleClickHardcoded}>Click to trigger Hardcoded url</button>
      <button onClick={handleClickProxy}>Click to trigger proxy</button>
    </div>
  );
};

export default TestNew;
