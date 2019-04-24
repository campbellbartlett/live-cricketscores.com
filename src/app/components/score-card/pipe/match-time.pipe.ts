import { Pipe, PipeTransform } from '@angular/core';
var moment = require('moment');


@Pipe({
  name: 'matchTime'
})
export class MatchTimePipe implements PipeTransform {

  transform(value: string): string {
    return moment(value).format("hh:mmA DD/MM/YY");
  }

}
