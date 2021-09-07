import { Dialog } from './dialog';
import { Stats } from './outcome';

export interface Answer {
  text: string;
  outcome: Stats;
  nextDialog?: Dialog[];
}
