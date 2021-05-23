import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: any[], searchTerm:string): any[] 
  {
    if(!product || !searchTerm)
    {
      return product;
    }
    else
    {
      return product.filter(productObj=>productObj.productTitle.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}
