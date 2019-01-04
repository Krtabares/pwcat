import { Component, OnInit } from '@angular/core';

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnInit() {
    this.generateSrc();
  }
  public generateSrc(): void {
    this.src = this.image.api + this.image.message + 
      '?size=' + this.image.fontsize +
      '&ts=' + Date.now();
  }
}
