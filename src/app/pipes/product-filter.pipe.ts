import { PipeTransform, Pipe } from '@angular/core';

import { IProduit } from '../models/iproduit';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduit[], filterBy: string): IProduit[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: IProduit) =>
            product.nom.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
