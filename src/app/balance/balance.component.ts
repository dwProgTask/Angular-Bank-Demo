import {Component, OnInit} from "@angular/core";
import {BalanceService} from "./balance.service";
import {Observable} from "rxjs";
import {Balance} from "./balance.model";
import {Router} from "@angular/router";


@Component({
  selector:'app-balance',
  template: `
    <h1> my Balance </h1>

    <table>
      <tr>
        <td>Account Number</td>
        <td></td>
        <td>Balance</td>
        <td></td>
        <td>id</td>
        <td></td>
        <td>Add $</td>
        <td>Send $</td>
      </tr>
      <ng-container *ngIf="balances$ | async as balances">
        <tr *ngFor="let balance of balances">
          <td>{{ balance.accountNumber}}</td>
          <td></td>
          <td>{{ balance.totalBalance}}</td>
          <td></td>
          <td>{{ balance.id}}</td>
          <td>
            <button type="button" [routerLink]="['/balance/edit', 'add', balance.id]">Add Money</button>

          </td>

          <td>
            <button type="button" [routerLink]="['/balance/edit', 'send', balance.id]">send Money</button>
          </td>
        </tr>
      </ng-container>


     </table>
`




})

export class BalanceComponent implements OnInit{

  balances$: Observable<Balance[]> | undefined;

  constructor(private balanceService: BalanceService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadBalance();
  }

  private loadBalance(){
    this.balances$ = this.balanceService.getBalance();
  }
}
