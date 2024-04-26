import { Dialog } from './dialog';
import { Outcome } from './outcome';

export interface Answer {
  text: string;
  outcome: Outcome;
  end?: boolean;
  endMessage?: string;
  nextDialogs?: Dialog[];
}
