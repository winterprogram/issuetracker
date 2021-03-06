import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angular-6-social-login';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationService } from './_services/authentication.service';


// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { DataTablesModule } from 'angular-datatables';
import { IssueModule } from './issue/issue.module';


//for rich text editor
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

//for file upload
import { FileUploadModule } from 'ng2-file-upload';
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('1091082596943-49t59doqnuiim4fl7nuvt1229md2us09.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, DataTablesModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule, NgxSpinnerModule,
    LayoutModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    FileUploadModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }), IssueModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }, AuthenticationService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
