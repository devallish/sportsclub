import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationItem } from '@sc/main-navigation-item';
import { NavigationService } from '@sc/navigation.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {

  navigationItems: Observable<Array<NavigationItem>>;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationItems = this.navigationService.getMainNavigationItems();
  }

}
