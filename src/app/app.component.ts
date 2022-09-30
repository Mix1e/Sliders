import {Component, OnInit} from '@angular/core';
import {LEFT_BORDER, RIGHT_BORDER, Sliders} from "./models/Sliders";

const slidersCount:number = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Sliders';
  readonly left = LEFT_BORDER;
  readonly right = RIGHT_BORDER;
  sliders = new Sliders(slidersCount);
  prev = new Sliders(slidersCount);
  sum = Sliders.getSum(this.sliders);

  constructor() {
  }
  ngOnInit(): void {
  }

  resetBars():void {
    this.sliders.resetNums();
    this.prev.resetNums();
  }

  doBalance(num:number):void {
    Sliders.balanceNums(num, this.prev, this.sliders);
  }

}
