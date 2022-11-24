import { useState, createContext, useContext } from 'react';
import { getProductsRequest } from '../api/ProductApi';
import { useEffect } from 'react';

export const productContext = createContext(); //Crear estado para compartirlo con el resto de componentes

export const useProducts = () => {
  const context = useContext(productContext);
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //Get products
  const getProducts = async () => {
    const res = await getProductsRequest();
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
