import { Answer } from './answer';
import { Filter } from './filter';
import { Reaction } from './reaction';

export interface Dialog {
  id: string;
  reactions: Reaction[];
  answers: Answer[];
  filters: Filter[];
  restriction?: string;
  priority?: number;
  oldReactions?: Reaction[];
}
