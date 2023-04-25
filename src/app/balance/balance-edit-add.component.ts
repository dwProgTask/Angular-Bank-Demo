import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BalanceService} from "./balance.service";

@Component({
  selector: 'app-balance-edit-edd',
  template: `
    <div>Add My Balance</div>

    <form [formGroup]="balanceForm" (ngSubmit)="addBalance()">
      <label>Add Money</label>
      <input type="number" name="addMoneyBalance" formControlName="addMoneyBalance">
      <button type="submit">Submit</button>
    </form>
  `
})

export class BalanceEditAddComponent implements OnInit{

  balanceId= 0;
  balanceForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private balanceService:BalanceService
  ) {
    this.balanceForm = this.fb.group({
      addMoneyBalance: ['', Validators.required]
    });
  }




  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.balanceId = +id;
    const balance = this.balanceService.getBalanceById(+this.balanceId);
    if (balance !== null) {
      this.balanceForm.patchValue(balance);
    }
  }



  addBalance() {
    const pps = +(<HTMLInputElement>document.getElementsByName('addMoneyBalance')[0]).value;
    this.balanceService.addMoney(this.balanceId, pps);
    this.router.navigate(['/balance']);
  }

}
