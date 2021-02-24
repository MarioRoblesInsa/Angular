import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-component',
  templateUrl: './fecha-component.component.html',
  styleUrls: ['./fecha-component.component.css']
})
export class FechaComponentComponent implements OnInit {
  fecha = new Date();
  constructor() { }

  ngOnInit(): void {
    this.fecha
  }

}
