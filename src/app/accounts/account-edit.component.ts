import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "./account.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-account-edit',
  template: `
    <div>Edit Account</div>

    <form [formGroup]="accountForm" (ngSubmit)="editAccount()">
      <label id="accountNumber">Account Number</label>
      <input type="text" name="accountNumber" formControlName="accountNumber">

      <button type="submit">Submit</button>
    </form>
  `
})
export class AccountEditComponent implements OnInit {

  accountId = 0;
  accountForm: FormGroup = this.fb.group({
    accountNumber: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.accountId = +id;
    const account = this.accountService.getAccountById(+this.accountId);
    this.accountForm.patchValue(account);
  }

  editAccount() {
    this.accountService.updateAccount(this.accountId, this.accountForm.value);
    console.log(this.accountForm.value);
    this.router.navigate(['/accounts']);
  }
}
