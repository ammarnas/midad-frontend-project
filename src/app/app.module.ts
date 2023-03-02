import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { authComponent } from './auth/auth.component';
import { userComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserguardGuard } from './user/user-detail/userguard.guard';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserAuthGuard } from './user/guard/user-auth.guard';

@NgModule({
  declarations: [     // Add all component here
    AppComponent,
    authComponent,
    userComponent,
    UserDetailComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'users' ,
      component : userComponent,
      canActivate: [UserAuthGuard]
    },
      {
        path:'users/:id' ,
        component : UserDetailComponent ,
        canActivate: [UserAuthGuard]
      },
      { path:'login' , component : authComponent },
      { path:'create' , component : AddUserComponent },

      //  General Paths
      { path:'' , component : authComponent , pathMatch:'full' },
      { path:'**' , component : authComponent , pathMatch:'full' }  


    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]     // First component will be run
})
export class AppModule { }
