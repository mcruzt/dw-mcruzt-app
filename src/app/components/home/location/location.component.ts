import { Component, OnInit } from '@angular/core';
import {LocationModel} from '../../../models/location.model';
import {LocationService} from '../../../services/location.service';
import {DetailComponent} from './detail/detail.component';
import {MatDialog} from '@angular/material/dialog';
import {CharacterService} from '../../../services/character.service';
import {CharacterModel} from '../../../models/character.model';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  list: LocationModel[] = [];
  length = 0;
  pageSize = 20;
  pageEvent: PageEvent;
  numRows = 3;
  constructor( private locationService: LocationService, private characterService: CharacterService, public dialog: MatDialog) { }

  ngOnInit(): void {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    toMatch.some((toMatchItem) => {
      if (navigator.userAgent.match(toMatchItem)){
        this.numRows = 1;
      }
    });
    this.loadData({pageIndex: 0});
  }
  loadData(e): any {
    this.locationService.getAll(e.pageIndex + 1).subscribe(
      resp => {
        this.list = resp.results;
        this.length = resp.info.count;
      },
      err => {
        console.log(err);
      }
    );
  }
  openDetail(residents: string[]) {
    const idsCharacters = [];
    const urlRemove = 'https://rickandmortyapi.com/api/character/';
    residents.forEach( (value) => {
        idsCharacters.push(value.replace(urlRemove, ''));

    });
    if (idsCharacters.length === 1) {
      this.characterService.getById(idsCharacters[0] * 1).subscribe(
        resp => {
          const list: Array<CharacterModel> = [];
          list.push(resp);
          this.showDialog(list);
        },
        err => {
          console.log(err);
        }
      );
    }else{
      this.characterService.getByIds(idsCharacters.toString()).subscribe(
        resp => {
          this.showDialog(resp);
        },
        err => {
          console.log(err);
        }
      );
    }

  }
  showDialog(list): void{
    this.dialog.open(DetailComponent, {
      data: list,
      width: '600px',
    });
  }

}
