export class Balance {
    id?: number;
    total!: number;
    currency!: string;
    created_at!: string;
    updated_at!: string;
    deleted_at!: string;
  
    constructor(data?: Balance) {
      if (data) {
        this.id = data.id;
        this.total = data.total;
        this.currency = data.currency;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.deleted_at = data.deleted_at;
      }
    }
  }
  