import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  newFeature:string = '';
  newFeature1:string;
  numberOfFeature = [];
  hasHovered = false;

  constructor() { }

  ngOnInit(): void {
  }

  addFeature() {
    if (this.newFeature === '') {
      this.hasHovered = false;
    } else {
      this.newFeature1 = this.newFeature;
      this.newFeature = ""; 
      this.numberOfFeature.push(this.newFeature1);
      this.hasHovered = true;
    }
  }
}
