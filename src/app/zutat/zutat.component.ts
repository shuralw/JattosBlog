import { mergeNsAndName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-zutat',
  templateUrl: './zutat.component.html',
  styleUrls: ['./zutat.component.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class ZutatComponent implements OnInit {

  @Input() menge = "";
  @Input() bezeichnung = "";

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
