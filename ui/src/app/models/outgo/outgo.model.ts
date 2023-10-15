export class Outgo {
    id?: number;
    amount!: null;
    items!: string;
    description!: string;
    balance!:number;
  
    constructor(data?: Outgo) {
      if (data) {
        this.id = data.id;
        this.amount = data.amount;
        this.items = data.items;
        this.description = data.description;
        this.balance = data.balance;
      }
    }
  }
  