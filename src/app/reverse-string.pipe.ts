import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverseString",
})
export class ReverseStringPipe implements PipeTransform {
  transform(value: any): any {
    return [...value].reverse().join("");
  }
}
