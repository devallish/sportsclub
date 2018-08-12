import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { SquadGroup } from '@sc/s/squad-group';

@Injectable({
  providedIn: 'root'
})
export class SquadsService {

  getSquadsGrouped(): Observable<Array<SquadGroup>> {
    return of([
      { name: 'Seniors',
        squads: [
          { id: 1, name: '1st XV', summary: '1st XV Summary', imageUrl: './assets/images/action/33086803654_2dca7633f4_z.jpg' },
          { id: 2, name: '2nd XV', summary: '2nd XV Summary', imageUrl: './assets/images/action/33545059950_05c2f7d724_z.jpg' },
          { id: 3, name: '3rd XV', summary: '3rd XV Summary', imageUrl: './assets/images/action/33545059970_4282bd2c21_z.jpg' },
          { id: 4, name: 'Vets', summary: 'Vets Summary', imageUrl: './assets/images/action/33800188181_6362a29bef_z.jpg' },
          { id: 5, name: 'Ladies', summary: 'Ladies Summary', imageUrl: './assets/images/action/33545059970_4282bd2c21_z.jpg' }
        ]
      },
      { name: 'Juniors',
        squads: [
          { id: 6, name: 'Colts', summary: 'Colts Summary', imageUrl: './assets/images/action/33086803654_2dca7633f4_z.jpg' },
          { id: 7, name: 'U16', summary: 'U16 Summary', imageUrl: './assets/images/action/33545059950_05c2f7d724_z.jpg' },
          { id: 8, name: 'U15', summary: 'U15 Summary', imageUrl: './assets/images/action/33086803654_2dca7633f4_z.jpg' },
          { id: 9, name: 'U14', summary: 'U14 Summary', imageUrl: './assets/images/action/33545059950_05c2f7d724_z.jpg' },
          { id: 10, name: 'U13', summary: 'U13 Summary', imageUrl: './assets/images/action/33545059970_4282bd2c21_z.jpg' }
        ]
      },
      { name: 'Minis',
        squads: [
          { id: 11, name: 'U12', summary: 'U12 Summary', imageUrl: './assets/images/action/33086803654_2dca7633f4_z.jpg' },
          { id: 12, name: 'U11', summary: 'U11 Summary', imageUrl: './assets/images/action/33545059970_4282bd2c21_z.jpg' },
          { id: 13, name: 'U10', summary: 'U10 Summary', imageUrl: './assets/images/action/33086803654_2dca7633f4_z.jpg' },
          { id: 14, name: 'U9', summary: 'U9 Summary', imageUrl: './assets/images/action/33545059950_05c2f7d724_z.jpg' },
          { id: 15, name: 'U8', summary: 'U8 Summary', imageUrl: './assets/images/action/33800188181_6362a29bef_z.jpg' },
          { id: 16, name: 'U7', summary: 'U7 Summary', imageUrl: './assets/images/action/33545059950_05c2f7d724_z.jpg' },
          { id: 17, name: 'U6', summary: 'U6 Summary', imageUrl: './assets/images/action/33545059970_4282bd2c21_z.jpg' },
        ]
      },
    ]);
  }
}
