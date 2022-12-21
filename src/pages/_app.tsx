/* eslint-disable react/react-in-jsx-scope */
import { AppProps } from 'next/app';
import { useState } from 'react';
import '../App.css';
import '../App.scss';
import { AppContext } from '../context/AppContext';
import { useCheckout } from '../mock-backend';
import { initialBalance, Item } from '../mock-backend/data';

const App = ({ Component, pageProps }: AppProps) => {
  const { items } = useCheckout();
  const [products, setProducts] = useState<Item[]>(items);
  const [balance, setBalance] = useState<number>(initialBalance);
  return (
    <AppContext.Provider value={{ products, setProducts, balance, setBalance }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default App;
