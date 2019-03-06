import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  miniMenu: boolean;
  bodySmall: boolean;
  title = 'mean-contactlist-angular2';

  ngOnInit(): void {
    this.bodySmall = window.innerWidth < 769;
  }
  onResize(event) {
    this.bodySmall = event.target.innerWidth < 769;
  }
}
