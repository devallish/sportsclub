import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SquadsService } from '@sc/s/squads.service';
import { SquadGroup } from '@sc/s/squad-group';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {

  squadGroups: Observable<Array<SquadGroup>>;

  constructor(private squadsService: SquadsService) { }

  ngOnInit() {
    this.squadGroups = this.squadsService.getSquadsGrouped();
  }

}
