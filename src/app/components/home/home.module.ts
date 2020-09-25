import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule} from '../../material.module';
import {NavbarComponent} from '../common/navbar/navbar.component';
import { DetailComponent as CharacterDetailComponent } from './character/detail/detail.component';
import {CharacterComponent} from './character/character.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent,
    CharacterComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]

})
export class HomeModule { }
