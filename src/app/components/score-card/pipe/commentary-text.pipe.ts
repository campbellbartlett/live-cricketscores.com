import { Comment } from './../../../models/commentary';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentaryText'
})
export class CommentaryTextPipe implements PipeTransform {

  transform(commentary: Comment, args?: any): string {
    var text = commentary.text;
    text = text.replace('SIX!', '<span class="font-weight-bold text-colour-secondary">SIX!</span>');
    text = text.replace('FOUR!', '<span class="font-weight-bold text-colour-secondary">FOUR!</span>');
    text = text.replace('OUT!', '<span class="font-weight-bold text-colour-secondary">OUT!</span>');
    text = text.split('. ').join(".<br/>");
    return text;
  }

}
