import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Account} from "./account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

    accounts: Account[] = [
      {id: 1, accountNumber: '123'},
      {id: 2, accountNumber: '456'},
      {id: 3, accountNumber: '789'}
    ];

    getAccounts():  Observable<Account[]> {
    return of(this.accounts);
  }

  addAccount2(account: Account) {
    account.id = this.accounts.length + 1;
    this.accounts = [...this.accounts, account];
  }

  addAccount(account: Account) {
    const newId = this.getNextId();
    const newAccount = {
      ...account,
      id: newId
    };
    this.accounts = [...this.accounts, newAccount];
  }

  private getNextId(): number {
    let maxId = 0;
    for (const account of this.accounts) {
      if (account.id > maxId) {
        maxId = account.id;
      }
    }
    return maxId + 1;
  }



  getAccountById(id: number): Account {
    return this.accounts.find(acc => acc.id === id) || {id: 0, accountNumber: ''};
  }

  updateAccount2(accountId: number, account: Account) {
    const existingAccount = this.accounts.filter(acc => acc.id !== accountId);
    this.accounts = [...existingAccount, account];
  }

  updateAccount(accountId: number, account: Account) {
    this.accounts = this.accounts.map(acc => {
      if (acc.id === accountId) {
        return {
          ...account,
          id: acc.id
        };
      } else {
        return acc;
      }
    });
  }

  deleteAccount(accountId: number) {
    const acc = this.accounts.filter(acc => acc.id !== accountId);
    this.accounts = [...acc];
  }


}
