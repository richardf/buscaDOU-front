import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterKeywordComponent } from './register-keyword/register-keyword.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { EmailConfirmedComponent } from './email-confirmed/email-confirmed.component';

const appRoutes: Routes = [
  { path: '', component: RegisterKeywordComponent },
  { path: 'email/confirm', component: ConfirmEmailComponent },
  { path: 'email/confirmed', component: EmailConfirmedComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterKeywordComponent,
    ConfirmEmailComponent,
    EmailConfirmedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
