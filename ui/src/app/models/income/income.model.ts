export class Income {
    id?: number;
    amount!: null;
    description!: string;
    balance!: number;

  
    constructor(data?: Income) {
      if (data) {
        this.id = data.id;
        this.amount = data.amount;
        this.description = data.description;
        this.balance = data.balance;
      }
    }
  }
  