import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardService} from "./card.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector:'app-card-edit-send',
  template: `
    <div>Send Money Using Card </div>

    <form [formGroup]="cardSendMoneyForm" (ngSubmit)="sendCardMoney()">
      <label>Send Money Using Card</label>
      <input type="number" name="sendCardMoney" formControlName="sendCardMoney">
      <button type="submit">Submit</button>
    </form>
    `
})
export class CardEditSendComponent implements OnInit{

  cardId=0;
  cardSendMoneyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cardSendMoneyForm = this.fb.group({
      sendCardMoney: ['',Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.cardId = +id;
    const balance = this.cardService.getBalanceById(+this.cardId);
    if (balance !== null) {
      this.cardSendMoneyForm.patchValue(balance);
    }
  }

  sendCardMoney(){
    const sendAmount = +(<HTMLInputElement>document.getElementsByName('sendCardMoney')[0]).value;
    this.cardService.sendCardMoney(this.cardId, sendAmount);
    this.router.navigate(['/cards']);
  }

}
