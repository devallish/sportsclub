import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from './main-navigation-item';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  @Input()
  navigationItems: Array<NavigationItem>;

  constructor() { }

  ngOnInit() {}

}
