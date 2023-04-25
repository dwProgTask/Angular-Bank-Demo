import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardService} from "./card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-add',
  template: `
    <div>Add Card</div>
    <form [formGroup]="cardForm" (ngSubmit)="addCard()">

      <label id="accountNumber">Account Number</label>
      <input type="text" name="cardNumber" formControlName="cardNumber">
      <br>
      <label id="bankName"> Bank Name</label>
      <input type="text" name = "cardBank" formControlName="cardBank">
      <br>

      <label id="cardBalance"> Card Balance</label>
      <input type="number" name = "cardBalance" formControlName="cardBalance">
      <br>

      <button>Submit</button>
    </form>
  `
})
export class CardAddComponent implements OnInit{

  cardForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private cardService: CardService,
    private router:Router
  ) {
    this.cardForm = this.fb.group({
      cardNumber: ['', Validators.required],
      cardBank:['',Validators.required],
      cardBalance:['',Validators.required]
    })
  }
  ngOnInit() {
  }

  addCard(){
    this.cardService.addCard(this.cardForm.value);
    this.router.navigate(['cards']);

  }
}
