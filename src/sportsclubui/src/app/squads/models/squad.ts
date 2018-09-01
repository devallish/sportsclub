import { SquadLight } from '@sc/s/squad-light';
import { SquadPerson } from '@sc/s/squad-person';

export interface Squad extends SquadLight {
  information: string[];
  persons: SquadPerson[];
}
