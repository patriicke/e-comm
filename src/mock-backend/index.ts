/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import { initialItems, Item } from './data';
import { executePurchase } from './purchase';

type UseCheckout = {
  items: Item[];

  /**
   * Charges the current account with the `price` in USD and decrements an item's inventory
   *
   * @throws if the current account does not have enough or if no inventory
   *
   */
  buy: (itemId: Item['id'], setLoading: any) => Promise<void>;
};

export const useCheckout = (): UseCheckout => {
  // @TODO: Not implemented
  const {products, setProducts,balance, setBalance} = useContext(AppContext);
  return {
    buy: async (itemId: Item['id'],setLoading:any) => {
      try {
      setLoading(true);
      const response = await executePurchase(itemId, {items:products, balance:balance, error: false});
      if(response.error) throw new Error('Low balance');
      setBalance(response.balance);
      setProducts(response.items);
      toast.success('Product purchaced successfully!');
    } catch (error) {
        console.log(error);
        toast.error('Insuffient balance. Please top up your account!');
    }finally{
      setLoading(false);
    }
    },
    items: initialItems, // @TODO: Not implemented
  };
};
