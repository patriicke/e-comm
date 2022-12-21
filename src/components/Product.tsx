/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useCheckout } from '../mock-backend';
import { Item } from '../mock-backend/data';
const Product = ({ inventory, id, name, price }: Item) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { buy } = useCheckout();
  return (
    <div className="w-full max-w-[23em] py-4 px-3 bg-white rounded-lg border shadow-xl dark:bg-gray-800 dark:border-gray-700 flex justify-between flex-col">
      <div className="px-5 pb-5 flex flex-col gap-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-gray-500">{inventory} left in stock</span>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500"
            onClick={() => buy(id, setLoading)}
            disabled={loading || inventory == 0}
          >
            {loading ? 'Wait...' : 'Buy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
