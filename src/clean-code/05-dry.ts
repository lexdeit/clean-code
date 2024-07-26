type Size = '' | 'S' | 'M' | 'XL';

class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) { }


    isProductReady(): boolean {

        for (const key in this) {

            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) {
                        throw new Error(`${key} is empty`);
                    }
                case 'number':
                    if ((<number>this[key]) <= 0) {
                        throw new Error(`${key} is zero`)
                    }
                    break;
                default: throw new Error(`${typeof this[key]} is not valid`)
            }


        }

        return true;
    }


    toString() {


        //NO DRY
        // if (this.name.length <= 0) {
        //     throw new Error('Name is empty');
        // }

        // if (this.price <= 0) {
        //     throw new Error('Price is empty or zero')
        // }

        // if (this.size.length <= 0) {
        //     throw new Error('Size is zero')
        // }

        // return `${this.name} (${this.price}), ${this.size}`;
        //NO DRY


        //APLICANDO DRY

        //Esto deberia aplicarse en otro lugar(NO DEBERIA EXISTIR DENTRO DE ESTE METODO)

        if (!this.isProductReady) return;


        return `${this.name} (${this.price}), ${this.size}`;
        //APLICANDO DRY
    }


}

(() => {

    const bluePants = new Product('Blue Large Pants')



})();