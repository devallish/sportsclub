import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NavigationItem } from '@sc/main-navigation-item';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  getMainNavigationItems(): Observable<Array<NavigationItem>> {
    return of([
      { displayName: 'Home', routerLink: '/', iconKey: 'home' },
      { displayName: 'Squads', routerLink: '/squads', iconKey: 'football-ball' },
      { displayName: 'News', routerLink: '/news', iconKey: 'newspaper' },
      { displayName: 'Contact Us', routerLink: '/contact-us', iconKey: 'bullhorn' },
    ]);
  }
}
