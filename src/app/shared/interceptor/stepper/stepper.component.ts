import { ObservablesService } from './../../../services/observable.services';
import { Component, Input, Output, EventEmitter } from "@angular/core";


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
  @Input() count: number;
  renderedValue: number;
  value: number = 0;

  @Output() countUpdated = new EventEmitter();

  @Input() product;


  constructor(
    private observableService: ObservablesService
  ) {

  }

  ngOnInit() {
    this.value = this.initialValue;
    
    this.renderedValue = this.value;


  }

  toggleMore = () => {
    
    


    if (this.step + this.value <= this.max) {
      this.value = this.value + this.step;
      this.renderedValue = this.value;

      console.log('rendered the value', this.renderedValue);
      
      this.countUpdated.emit(this.renderedValue);

    }
  };

  toggleLess = () => {
    if (this.value - this.step >= this.min) {
      this.value = this.value - this.step;
      this.renderedValue = this.value;

      console.log('rendered the value', this.renderedValue);
      
      this.countUpdated.emit(this.renderedValue);
    }
  };

  trackValue() {

  }
}
