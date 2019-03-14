import { Pipe, PipeTransform } from '@angular/core';
import { Innings } from 'src/app/models/scorecard';

@Pipe({
  name: 'runsWicketsDeclared'
})
export class RunsWicketsDeclaredPipe implements PipeTransform {

  transform(innings: Innings): string {
    return `${innings.wicket}-${innings.run}${innings.isDeclared ? "d" : ""}`;
  }

}
