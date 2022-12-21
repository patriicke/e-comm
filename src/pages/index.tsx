/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/Navbar';
import Product from '../components/Product';
import { AppContext } from '../context/AppContext';
import { Item } from '../mock-backend/data';

const Index: NextPage = () => {
  const { products } = useContext(AppContext);
  return (
    <main className={'flex flex-col gap-5'}>
      <NavBar />
      <div className="flex flex-wrap gap-3">
        {products
          .sort((a: Item, b: Item) => b.inventory - a.inventory)
          .map(({ id, inventory, name, price }: Item) => (
            <Product
              key={id}
              id={id}
              inventory={inventory}
              name={name}
              price={price}
            />
          ))}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};

export default Index;
