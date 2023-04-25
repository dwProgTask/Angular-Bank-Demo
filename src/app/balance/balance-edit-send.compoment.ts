import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BalanceService} from "./balance.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-balance-edit-send',
  template: `
    <div> Send My Balance </div>

    <form [formGroup]="balanceFrom" (ngSubmit)="sendBalance()">
      <label>Send Money</label>
      <input type="text" name="sendMoneyBalance" formControlName="sendMoneyBalance">
      <button type="submit">Submit</button>
    </form>
  `
})
export class BalanceEditSendCompoment implements OnInit {

  balanceId= 0;
  balanceFrom: FormGroup;

  constructor(
    private fb: FormBuilder,
    private balanceService: BalanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.balanceFrom = this.fb.group({
      sendMoneyBalance: [ '', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.balanceId = +id;
    const balance = this.balanceService.getBalanceById(+this.balanceId);
    if (balance !== null) {
      this.balanceFrom.patchValue(balance);
    }
  }

  sendBalance(){
    const pps = +(<HTMLInputElement>document.getElementsByName('sendMoneyBalance')[0]).value;
    this.balanceService.sendMoney(this.balanceId, pps);
    this.router.navigate(['/balance']);
  }
}
