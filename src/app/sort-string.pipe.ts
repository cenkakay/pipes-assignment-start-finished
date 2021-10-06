import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortString",
  pure: false,
})
export class SortStringPipe implements PipeTransform {
  transform(value: any): any {
    value.sort((a, b) => (a.name > b.name ? 1 : -1));
    return value;
  }
}
