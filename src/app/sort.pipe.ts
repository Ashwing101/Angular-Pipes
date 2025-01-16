import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false // this is use to disabled the caching in angular
})
export class SortPipe implements PipeTransform {

  //In this the last 'asc' is a defult value
  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
 const sorted = [...value];
 sorted.sort((a, b) => {
  if (direction === 'asc') {
    return a > b ? 1 : -1;
  }else{
    return a > b ? -1 : 1;
  }
 });
 return sorted;
  }

}
