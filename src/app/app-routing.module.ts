import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountListComponent} from "./accounts/account-list.component";
import {AccountAddComponent} from "./accounts/account-add.component";
import {AccountEditComponent} from "./accounts/account-edit.component";
import * as path from "path";
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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'accounts', component: AccountListComponent},
  {path: 'add-account', component: AccountAddComponent},
  {path: 'accounts/:id', component: AccountEditComponent},
  {path: 'balance', component:BalanceComponent},
  {path: 'balance/edit', component:BalanceEditComponents},
  {path: 'balance/edit/send/:id', component:BalanceEditSendCompoment},
  {path: 'balance/edit/add/:id', component: BalanceEditAddComponent},
  {path: 'cards', component:CardComponent},
  {path: 'cards/addMoney/:id', component: CardEditAddComponent},
  {path: 'cards/sendMoney/:id', component: CardEditSendComponent},
  {path: 'cards/add-card', component: CardAddComponent},
  {path: 'loans', component: LoanComponent},
  {path: 'accounts/transaction/:accountNumber', component: AccountTransactionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
