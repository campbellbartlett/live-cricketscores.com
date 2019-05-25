import { Match } from './match';
import {Subject } from 'rxjs';

export class MatchSubject {
    constructor(match: Match) {
        this.match = match;
        this.subject = new Subject();
    }

    match: Match;
    subject: Subject<Match>;

  public toString(): string {
    return this.match.id + '';
  }
}
