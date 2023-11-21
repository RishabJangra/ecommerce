import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return ''; // Check if the input value is empty

    return value.charAt(0).toUpperCase() + value.slice(1); // Capitalize the first letter of the input string
  }

}
