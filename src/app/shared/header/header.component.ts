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
    private data: DataService
  ) { }

  ngOnInit() {}

  logout() {
    this.data.logoutSession();
  }

}
