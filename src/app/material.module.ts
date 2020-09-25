import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
imports: [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule
],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule
  ]})
export class MaterialModule { }
