import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textOverflow',
})
export class TextOverflowPipe implements PipeTransform {
  transform(text: string, size: number): any {
    if (size) {
      if (size >= text.length) {
        return text;
      } else {
        return text.substring(0, size).concat('...');
      }
    } else {
      return text;
    }
  }
}
