import { Item } from './data';
import { sleep } from './utils';

type UserAndItemState = {
  balance: number;
  items: Item[];
  error:boolean;
};

/**
 * Modifies `state`, given an `itemId` to purchase
 * @returns {UserAndItemState} the updated state if a purchase should succeed
 */
export const executePurchase = async (
  itemId: Item['id'],
  state: UserAndItemState
): Promise<UserAndItemState> => {
  await sleep(1000);
  let {balance} = state;
  try {
  const updated = state.items?.map((item:Item)=>{
    if(item.id == itemId){
      if(item.price > balance) throw new Error('Low balance');
      balance -= Number((item.price).toFixed(2)); 
      return {...item, inventory: item.inventory -1};
    }
    return item;
  });
  return {balance, items:updated,error:false};
} catch (error) {
  return {error: true,balance: 0, items: []};
}
  // @TODO: Not implemented
};
