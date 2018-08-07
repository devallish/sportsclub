import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  @Input() level: string;

  cssClasses: string;

  constructor() { }

  ngOnInit() {
    let cssLevelClassName = 'level_one';
    switch (this.level) {
      case 'one': {
        break;
      }
      case 'two': {
        cssLevelClassName = 'level_two';
        break;
      }
      case 'three':{
        cssLevelClassName = 'level_three';
        break;
      }
    }
    this.cssClasses = `section-outer-container ${cssLevelClassName}`;
  }

}
