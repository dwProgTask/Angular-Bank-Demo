import {Component, OnInit} from "@angular/core";
import {AccountService} from "./account.service";
import {Observable} from "rxjs";
import {Account} from "./account.model";

@Component({
  selector: 'app-account-list',
  template: `
    <a routerLink="/add-account">Add</a>
    <table>
      <tr>
        <td>Account Number</td>
        <td>Actions</td>
      </tr>
      <ng-container *ngIf="accounts$ | async as accounts">
        <tr *ngFor="let account of accounts">
          <td>{{ account.accountNumber }}
          <td>
          <td>
            <button [routerLink]="[account.id]">Edit</button>
            <button (click)="deleteAccount(account.id)">Delete</button>
            <button [routerLink]="['/accounts/transaction',account.accountNumber]"> View Transaction </button>
          </td>
        </tr>
      </ng-container>
    </table>
  `
})
export class AccountListComponent implements OnInit {

  accounts$: Observable<Account[]> | undefined;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.loadAccounts();
  }

  deleteAccount(accountId: number) {
    this.accountService.deleteAccount(accountId);
    this.loadAccounts();
  }

  private loadAccounts() {
    this.accounts$ = this.accountService.getAccounts();
  }
}
