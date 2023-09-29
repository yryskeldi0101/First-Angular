import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../modules/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Iproduct[],search: string): Iproduct[] {
    if (search.length ===0) return products
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }
}
