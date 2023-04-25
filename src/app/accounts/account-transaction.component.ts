import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountTransaction } from './account-transaction.model';
import { AccountTransactionService } from './account-transaction.service';


@Component({
  selector: 'app-account-transaction',
  template:`
    <h1>View Transaction</h1>
    <h2>Account Number:</h2>
    <table>
      <thead>
      <tr>
        <th>Account Number</th>
        <th>Transaction</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let transaction of transactions">
        <td>{{ transaction.accountNumber }}</td>
        <td>{{ transaction.transaction }}</td>

      </tr>
      </tbody>
    </table>


  `
})

export class AccountTransactionComponent implements OnInit{

  accountNumber: string | null = null;
  transactions: AccountTransaction[] = [];

  constructor(
    private route: ActivatedRoute,
    private accountTransactionService: AccountTransactionService,
  ) {}



  ngOnInit(): void {
    this.loadTransactions();
  }

  private loadTransactions(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    if (accountNumber) {
      this.accountTransactionService.getAccountTransactionsByAccountNumber(accountNumber).subscribe(transactions => {
        this.transactions = transactions;
      });
    }
  }


}
