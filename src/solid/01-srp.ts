// // (() => {

// //     interface Product { 
// //         id:   number;
// //         name: string;
// //     }
    
// //     // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
// //     // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
// //     class ProductBloc {
    
// //         loadProduct( id: number ) {
// //             // Realiza un proceso para obtener el producto y retornarlo
// //             console.log('Producto: ',{ id, name: 'OLED Tv' });
// //         }
    
// //         saveProduct( product: Product ) {
// //             // Realiza una petición para salvar en base de datos 
// //             console.log('Guardando en base de datos', product );
// //         }
    
// //         notifyClients() {
// //             console.log('Enviando correo a los clientes');
// //         }
    
// //         onAddToCart( productId: number ) {
// //             // Agregar al carrito de compras
// //             console.log('Agregando al carrito ', productId );
// //         }
    
// //     }
    


// //     const productBloc = new ProductBloc();

// //     productBloc.loadProduct(10);
// //     productBloc.saveProduct({ id: 10, name: 'OLED TV' });
// //     productBloc.notifyClients();
// //     productBloc.onAddToCart(10);








// // })();


// //DESPUES

// (() => {

//     interface Product { 
//         id:   number;
//         name: string;
//     }

//     class ProductService {
//         loadProduct(id: number) {
//             console.log('Producto: ', { id, name: 'OLED Tv' });
//         }

//         saveProduct(product: Product) {
//             console.log('Guardando en base de datos', product);
//         }
//     }

//     class NotificationService {
//         notifyClients() {
//             console.log('Enviando correo a los clientes');
//         }
//     }

//     class CartService {
//         onAddToCart(productId: number) {
//             console.log('Agregando al carrito ', productId);
//         }
//     }

//     const productService = new ProductService();
//     const notificationService = new NotificationService();
//     const cartService = new CartService();

//     productService.loadProduct(10);
//     productService.saveProduct({ id: 10, name: 'OLED TV' });
//     notificationService.notifyClients();
//     cartService.onAddToCart(10);

// })();


//DESPUES
import { HttpClient } from './02-open-close-c';


export class TodoService { 

    constructor( private http: HttpClient ){}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor( private http: HttpClient ){}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor( private http: HttpClient ){}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}