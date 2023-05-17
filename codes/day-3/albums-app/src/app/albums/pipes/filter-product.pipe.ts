import { Pipe, PipeTransform } from "@angular/core";
import { Album } from "src/app/models/album";

@Pipe({
    name: 'productfilter'
})
export class FilterProductPipe implements PipeTransform {
    transform(value: Album[], ...args: string[]): Album[] {
        return value.length > 0 && args[0] && args[0] !== '' ?
            value.filter(
                (a: Album) => a.title.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1
            ) : value;
    }
}