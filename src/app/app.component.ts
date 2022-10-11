import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LEFT_BORDER, RIGHT_BORDER, Sliders} from "./models/Sliders";

const slidersCount:number = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title:string = 'Sliders';
  readonly left:number = LEFT_BORDER;
  readonly right:number = RIGHT_BORDER;
  sliders:Sliders = new Sliders(slidersCount);
  prev:Sliders = new Sliders(slidersCount);

  constructor() {
  }
  ngOnInit(): void {
  }

  resetBars(): void {
    this.sliders.resetNums();
    this.prev.resetNums();
  }

  doBalance(num:number): void {
    Sliders.balanceNums(num, this.prev, this.sliders);
  }

  getSum(): number {
    return Sliders.getSum(this.sliders);
  }
}
