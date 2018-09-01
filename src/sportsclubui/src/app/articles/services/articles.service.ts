import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ArticleLight } from '@sc/a/article-light';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  getTopXArticlesForSquad(squadId: number, topX: number = 3): Observable<Array<ArticleLight>> {
    return of([
      { id: 1, title: 'New Sponsorship Deal', summary: 'Something of a summary',
        imageUrl: './assets/images/action/33086803654_2dca7633f4_z.jpg'},
      { id: 2, title: 'Colts v Winchester', summary: 'Match Report',
        imageUrl: './assets/images/action/33545059950_05c2f7d724_z.jpg'},
      { id: 3, title: 'Colts v New Milton', summary: 'Match Report',
        imageUrl: './assets/images/action/33545059950_05c2f7d724_z.jpg'},
    ]);
  }
}
