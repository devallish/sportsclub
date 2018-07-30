import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { NavigationItem } from '../main-navigation/main-navigation-item';

@Injectable()
export class NavigationService {
  getMainNavigationItems(): Observable<Array<NavigationItem>> {
    return Observable.of([
      { displayName: 'Squads', routerLink: '/squads', iconKey: 'swimming'}
    ]);
  }
}
