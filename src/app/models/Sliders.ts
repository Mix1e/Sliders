export const RIGHT_BORDER:number = 100;
export const LEFT_BORDER:number = -100;
export const MAX_BORDER_VALUE:number = 100;


export class Sliders {

  nums: number[];
  probability: number;

  constructor(length: number) {
    this.nums = new Array(length);
    this.nums.fill(0);
    this.probability = 1/(length-1);
  }

  resetNums(): void {
    this.nums.fill(0);
  }

  private static getBank(prev: number, current: number): number {
    let delta = prev - current;
    return Math.abs(delta);
  }

  private static isAllAbleToPay(price: number, elem: number, nums: number[], rise: boolean): boolean {
    for (let i = 0; i < nums.length; i++) {
      if(elem != i && Math.abs(nums[i] + this.getPay(rise, price)) > MAX_BORDER_VALUE) {
        return false;
      }
    }
    return true;
  }

  private static getPay(rise: boolean, price: number): number {
    return rise ? -price : price;
  }

  private static countProbability(probability:number): boolean {
    return Math.random() >= probability;
  }


  static balanceNums(changedElem: number, prev: Sliders, cur: Sliders): void {
    let bank = Sliders.getBank(prev.nums[changedElem], cur.nums[changedElem]);
    let isBigger = cur.nums[changedElem]>prev.nums[changedElem];

    let flag = Sliders.countProbability(cur.probability);
    let price = bank / (cur.nums.length - 1);
    price = flag ? Math.ceil(price) : Math.floor(price);

    if (!Sliders.isAllAbleToPay(flag? price : price+1, changedElem, cur.nums, isBigger))
      price = bank;

    for (let i = 0; i < cur.nums.length; i++) {
      if (changedElem != i) {
        let pay = Sliders.getPay(isBigger, price);
        let value = cur.nums[i] + pay;

        if (Math.abs(value) > MAX_BORDER_VALUE) {
          let border = value > 0 ? RIGHT_BORDER : LEFT_BORDER;

          pay = Math.abs(border) - Math.abs(cur.nums[i]);
          cur.nums[i] = border;
        } else {
          cur.nums[i] = value;
        }
        price = bank - Math.abs(pay);
      }
    }
    prev.nums = cur.nums.slice(0);
  }

  static getSum(sliders: Sliders): number {
    return sliders.nums.reduce((a, b) => {
      return a + b;
    })
  }
}
