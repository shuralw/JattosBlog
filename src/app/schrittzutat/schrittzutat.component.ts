import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-schrittzutat',
  templateUrl: './schrittzutat.component.html',
  styleUrls: ['./schrittzutat.component.scss']
})

@Injectable({
  providedIn: 'root'
})

export class SchrittzutatComponent implements OnInit {

@Input() schrittzutatenbild = "";
@Input() schrittuntertitelmenge = "";
@Input() schrittuntertitel = "";

  constructor() { }

  ngOnInit(): void {
  }

}
