import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BalanceService} from "./balance.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-balance-edit',
  template: `
    <div>Edit My Balance</div>

    <form [formGroup]="balanceForm" (ngSubmit)="editBalance()">
      <div *ngIf="action === 'send'; else addMoney">
        <label>Send Money</label>
        <input type="text" name="sendMoneyBalance" formControlName="sendMoneyBalance">
      </div>

      <ng-template #addMoney>
        <div *ngIf="action === 'add'">
          <label>Add Money</label>
          <input type="text" name="addMoneyBalance" formControlName="addMoneyBalance">
        </div>
      </ng-template>

      <button type="submit">Submit</button>
    </form>
  `
})

export class BalanceEditComponents implements OnInit {
  action: string = '';
  balanceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private balanceService: BalanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.balanceForm = this.fb.group({
      totalBalance: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.action = this.route.snapshot.paramMap.get('action') || '';
  }

  editBalance() {
    // your code to edit the balance goes here
  }
}
