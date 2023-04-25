import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import { Card } from "./card.model";
import {Balance} from "../balance/balance.model";

@Injectable({
  providedIn:'root'
})
export class CardService{
  cards: Card[] =[
    {id: 1, cardNumber: '123', cardBank: 'Chase', cardBalance: 1000},
    {id: 2, cardNumber: '456', cardBank: 'Citi', cardBalance: 2000},
    {id: 3, cardNumber: '789', cardBank: 'Bofa', cardBalance: 3000}
  ]

  getCards(): Observable<Card[]>{
    return of(this.cards);
  }

  getBalanceById(id:number): Card | null{
    return this.cards.find(cal => cal.id === id) || null;
  }


  addCardMoney(cardId: number, amount: number) {
    const cardMoney = this.getBalanceById(cardId);
    if (cardMoney) {
      cardMoney.cardBalance += amount;
    }
  }

  sendCardMoney(cardId: number, amount: number){
    const cardMoney = this.getBalanceById(cardId);
    if (cardMoney) {
      cardMoney.cardBalance -= amount;
    }
  }

  addCard(card: Card){
    const newId = this.getNextId();
    const newCard = {
      ...card,
      id: newId
    }
    this.cards = [...this.cards, newCard];
  }
  private getNextId(): number {
    let maxId = 0;
    for (const card of this.cards) {
      if (card.id > maxId) {
        maxId = card.id;
      }
    }
    return maxId + 1;
  }
}

