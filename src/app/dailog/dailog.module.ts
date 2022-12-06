import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserDailogComponent } from './adduser-dailog/adduser-dailog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AdduserDailogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class DailogModule { }
