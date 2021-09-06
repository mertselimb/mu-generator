import { Answer } from '../answers/answer';
import { Reaction } from '../form/reaction';

export interface Dialog {
  id: string;
  reactions: Reaction[];
  answers: Answer[];
}
