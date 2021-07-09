import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  isClicked : boolean = false;
  newFeature:string = '';
  newFeature1:string;
  numberOfFeature = [];
  hasHovered = false;
  
  clickedAdd() {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
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
