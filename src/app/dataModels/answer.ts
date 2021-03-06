import { Dialog } from './dialog';
import { Stats } from './outcome';

export interface Answer {
  text: string;
  outcome: Stats;
  end?: Boolean;
  endMessage?: string;
  nextDialogs?: Dialog[];
}
