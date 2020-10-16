import { Component, Input } from "@angular/core";

@Component({
  selector: "stepper-input",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"]
})
export class StepperInputComponent {
  title = "Stepper input";
  @Input() initialValue;
  @Input() step: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 0;
  @Input() symbol: string;
  @Input() ariaLabelLess: string;
  @Input() ariaLabelMore: string;
  renderedValue: string;
  value: number = 0;

  ngOnInit() {
    this.value = this.initialValue;
    this.renderedValue = this.value.toString();
  }

  toggleMore = () => {
    
    if (this.step + this.value <= this.max) {
      this.value = this.value + this.step;
      this.renderedValue = this.value.toString();
    }
  };

  toggleLess = () => {
    if (this.value - this.step >= this.min) {
      this.value = this.value - this.step;
      this.renderedValue = this.value.toString();
    }
  };

  trackValue() {
      
  }
}
