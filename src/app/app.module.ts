import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {AccountListComponent} from "./accounts/account-list.component";
import {AccountAddComponent} from "./accounts/account-add.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AccountEditComponent} from "./accounts/account-edit.component";
import {BalanceComponent} from "./balance/balance.component";
import {BalanceEditComponents} from "./balance/balance-edit.components";
import {BalanceEditSendCompoment} from "./balance/balance-edit-send.compoment";
import {BalanceEditAddComponent} from "./balance/balance-edit-add.component";
import {CardComponent} from "./cards/card.component";
import {CardEditAddComponent} from "./cards/card-edit-add.component";
import {CardEditSendComponent} from "./cards/card-edit-send-component";
import {CardAddComponent} from "./cards/card-add-component";
import {LoanComponent} from "./loan/loan.component";
import {AccountTransactionComponent} from "./accounts/account-transaction.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountListComponent,
    AccountAddComponent,
    AccountEditComponent,
    BalanceComponent,
    BalanceEditComponents,
    BalanceEditSendCompoment,
    BalanceEditAddComponent,
    CardComponent,
    CardEditAddComponent,
    CardEditSendComponent,
    CardAddComponent,
    LoanComponent,
    AccountTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
