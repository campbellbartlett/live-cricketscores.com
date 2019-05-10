import { Comment } from './../../models/commentary';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentaryHeader'
})
export class CommentaryHeaderPipe implements PipeTransform {

  transform(comment: Comment, args?: any): string {
    if (comment.batsmanName != "" && comment.bowlerName != "") {
      return `${comment.bowlerName} to ${comment.batsmanName}`;
    }
    return "";
  }

}
