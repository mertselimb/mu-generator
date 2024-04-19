import { Dialog } from './dialog';
import { Stats } from './stats';

export interface Answer {
  text: string;
  outcome?: Stats;
  end?: boolean;
  endMessage?: string;
  nextDialogs?: Dialog[];
}
