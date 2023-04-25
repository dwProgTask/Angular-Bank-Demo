import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Balance} from "./balance.model";

@Injectable({
  providedIn: 'root'
})

export class BalanceService{

    balances: Balance[] = [
      {id: 1, accountNumber: '123', totalBalance: 1000},
      {id: 2, accountNumber: '456', totalBalance: 2000},
      {id: 3, accountNumber: '789', totalBalance: 3000}
    ];

    getBalance(): Observable<Balance[]>{
      return of(this.balances);
    }



    getBalanceById(id:number): Balance | null{
      return this.balances.find(bal => bal.id === id) || null;
    }


    addMoney(balanceId: number, amount: number) {
      const balance = this.getBalanceById(balanceId);
      if (balance) {
        balance.totalBalance += amount;
      }
    }

    sendMoney(balanceId: number, amount: number){
      const balance = this.getBalanceById(balanceId);
      if (balance) {
        balance.totalBalance -= amount;
      }
    }


}
