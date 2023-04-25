import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {CardService} from "./card.service";
import {Card} from "./card.model";
import {Router} from "@angular/router";

@Component({
  selector:'app-card',
  template:`
    <h1> my Cards </h1>
    <a routerLink="/cards/add-card">Add A Card</a>
  <table>
    <tr>
      <td>Bank</td>
      <td></td>
      <td>Card Number</td>
      <td></td>
      <td>Balance</td>
      <td></td>
      <td>Add $</td>
      <td>Send $</td>
    </tr>
    <ng-container *ngIf="cards$ | async as cards">
      <tr *ngFor="let card of cards">
        <td>{{card.cardBank}}
        <td></td>
        <td>{{ card.cardNumber}}
        <td></td>
        <td>{{card.cardBalance}}
        <td></td>
        <td>
          <button type="button" [routerLink]="['/cards/addMoney', card.id]">Add Money</button>

        </td>

        <td>
          <button type="button" [routerLink]="['/cards/sendMoney', card.id]">send Money</button>
        </td>
      </tr>
    </ng-container>
  </table>`,

})

export  class CardComponent implements OnInit{

  cards$: Observable<Card[]> | undefined;

  constructor(private  cardServce: CardService,
              private  router: Router) {
  }

  ngOnInit() {
    this.cards$ = this.cardServce.getCards();
  }
}
