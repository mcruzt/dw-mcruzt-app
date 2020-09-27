import {Component, OnInit} from '@angular/core';
import {CharacterModel} from '../../../models/character.model';
import {CharacterService} from '../../../services/character.service';
import {MatDialog} from '@angular/material/dialog';
import {DetailComponent} from './detail/detail.component';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  list: CharacterModel[] = [];
  length = 0;
  pageSize = 20;
  pageEvent: PageEvent;
  numRows = 3;

  constructor(private characterService: CharacterService, public dialog: MatDialog) {
  }

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

  loadData(e): any  {
    this.characterService.getAll(e.pageIndex + 1).subscribe(
      resp => {
        this.list = resp.results;
        this.length = resp.info.count;
      },
      err => {
        console.log(err);
      }
    );
  }

  openDetail(id: number) {
    this.characterService.getById(id).subscribe(
      resp => {
        this.dialog.open(DetailComponent, {
          data: resp,
          height: '610px',
          width: '400px',
        });
      },
      err => {
        console.log(err);
      }
    );
  }

}
