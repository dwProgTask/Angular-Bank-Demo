import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "./account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-add',
  template: `
    <div>Add Account</div>
    <form [formGroup]="accountForm" (ngSubmit)="addAccount()">
      <label id="accountNumber">Account Number</label>
      <input type="text" name="accountNumber" formControlName="accountNumber">

      <button>Submit</button>
    </form>
  `
})
export class AccountAddComponent {
  accountForm: FormGroup = this.formBuilder.group({
    accountNumber: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private router: Router) {
  }

  addAccount() {
    this.accountService.addAccount(this.accountForm.value);
    this.router.navigate(['accounts']);
  }
}
