import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
  name : "default"
})
export class DefaultPipe implements PipeTransform{
  transform(value: string, fallback: string){
    console.log("change detected");
    let image = value;
    if(value == ''){
      image = fallback;
    }
    return image;
  }
}
