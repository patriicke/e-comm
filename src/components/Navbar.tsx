/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const NavBar: NextPage = () => {
  const { balance } = useContext(AppContext);
  return (
    <div className="h-[20vh] w-full flex items-center justify-between bg-green-50 border mt-1 rounded-sm px-5 ">
      <h1 className="text-3xl font-bold">Create, Inc. Store</h1>
      <div className="flex items-center justify-center gap-3 cursor-pointer mr-4">
        <i className="fa fa-shopping-cart text-4xl"></i>
        <div className="flex gap-2">
          <span>Balance:</span>
          <span className="font-bold">${balance?.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
