import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './list/user/user.component';
import {UserRoutingModule} from './user-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    UserComponent
  ],
  imports: [
    UserRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
