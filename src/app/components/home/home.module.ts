import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule} from '../../material.module';
import {NavbarComponent} from '../common/navbar/navbar.component';
import { DetailComponent as CharacterDetailComponent } from './character/detail/detail.component';
import { DetailComponent as LocationDetailComponent } from './location/detail/detail.component';
import { DetailComponent as EpisodeDetailComponent } from './episode/detail/detail.component';
import {CharacterComponent} from './character/character.component';
import {LocationComponent} from './location/location.component';
import {EpisodeComponent} from './episode/episode.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent,
    CharacterComponent, CharacterDetailComponent,
    LocationComponent, EpisodeComponent, EpisodeDetailComponent, LocationDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]

})
export class HomeModule { }
