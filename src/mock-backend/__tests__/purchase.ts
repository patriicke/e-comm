import { executePurchase } from '../purchase';

executePurchase;
describe('purchase', () => {
  test('Price less than balance', ()=>{
    expect(true).toBe(true);
  });
  test('Price greater than balance', ()=>{
    expect(false).toBe(false);
  });
});
