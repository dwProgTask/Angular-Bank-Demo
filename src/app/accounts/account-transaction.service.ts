import {Injectable} from "@angular/core";
import { Observable, of} from "rxjs";
import {AccountTransaction} from "./account-transaction.model";

@Injectable({
  providedIn:'root'
  }
)
export class AccountTransactionService{
  accountTransactions: AccountTransaction[] = [
    { id: 1, accountNumber: '123', transaction: 100 },
    { id: 2, accountNumber: '123', transaction: -50 },
    { id: 3, accountNumber: '456', transaction: 500 },
    { id: 4, accountNumber: '789', transaction: -200 },
    { id: 5, accountNumber: '123', transaction: 50 }
  ];

  constructor() {
  }

  getAccountTransactionsByAccountNumber(accountNumber: string): Observable<AccountTransaction[]> {
    const transactions = this.accountTransactions.filter(transaction => transaction.accountNumber === accountNumber);
    return of(transactions);
  }
}
