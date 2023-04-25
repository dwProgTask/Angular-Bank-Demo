import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "./card.service";

@Component({
  selector: 'app-car-edit-sendMoney',
  template: `
    <div>Add Money to My Card </div>

    <form [formGroup]="cardAddMoneyForm" (ngSubmit)="addCardMoney()">
      <label>Add Money To Card</label>
      <input type="number" name="addCardMoney" formControlName="addCardMoney">
      <button type="submit">Submit</button>
    </form>
  `
})
export class CardEditAddComponent implements OnInit{

  cardId = 0;
  cardAddMoneyForm: FormGroup;

  constructor(
    private  fb: FormBuilder,
    private  router: Router,
    private  route: ActivatedRoute,
    private  cardService: CardService,
  ) {
    this.cardAddMoneyForm = this.fb.group({
      addCardMoney: ['',Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.cardId = +id;
    const balance = this.cardService.getBalanceById(+this.cardId);
    if (balance !== null) {
      this.cardAddMoneyForm.patchValue(balance);
    }
  }

  addCardMoney(){
    const addAmount = +(<HTMLInputElement>document.getElementsByName('addCardMoney')[0]).value;
    this.cardService.addCardMoney(this.cardId, addAmount);
    this.router.navigate(['/cards']);
  }
}
