import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LEFT_BORDER, RIGHT_BORDER, Sliders} from "./models/Sliders";

const slidersCount:number = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title: string = 'Sliders';
  sliders: Sliders = new Sliders(slidersCount);
  prev: Sliders = new Sliders(slidersCount);

  constructor() {
  }

  get leftBorder():number {
    return LEFT_BORDER;
  }

  get rightBorder():number {
    return RIGHT_BORDER;
  }

  get firstSliderValue(): number {
    return this.sliders.nums[0];
  }
  get secondSliderValue(): number {
    return this.sliders.nums[1];
  }
  get thirdSliderValue(): number {
    return this.sliders.nums[2];
  }

  get sum(): number {
    return Sliders.getSum(this.sliders);
  }

  resetBars(): void {
    this.sliders.resetNums();
    this.prev.resetNums();
  }

  doBalance(num:number): void {
    Sliders.balanceNums(num, this.prev, this.sliders);
  }
}
