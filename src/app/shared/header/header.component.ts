import { ObservablesService } from './../../services/observable.services';
import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title;
  @Input() cartCount;

  constructor(
    private data: DataService,
    private observableService: ObservablesService,
  ) { }

  ngOnInit() {
    this.observableService.cartItemObservable.subscribe((order) => {
      this.cartCount = order["count"];
      console.log('order', order);
    })
  }

  logout() {
    this.data.logoutSession();
  }

}
