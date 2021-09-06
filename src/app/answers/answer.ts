import { Dialog } from '../dialog/dialog';
import { Outcome } from '../form/outcome';

export interface Answer {
  text: string;
  outcome: Outcome;
  nextDialog?: Dialog;
}
