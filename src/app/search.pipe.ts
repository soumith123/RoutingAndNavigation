import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //search pipe
  transform(product: any[], searchTerm:string): any[] 
  {

    // if we not entered any product..it means search bar is empty, it returns the all producst
    if(!product || !searchTerm)
    {
      return product;
    }

    //if search bar is not empty, it gives the matched item for entered element
    else
    {
      return product.filter(productObj=>productObj.productTitle.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}
