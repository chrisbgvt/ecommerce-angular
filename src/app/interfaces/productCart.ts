export interface IProductCart {
    userId: number,
    date: string,
    products: [
        {
            productId: number,
            quantity: number,
            title: string,
            price: number,
            image: string
        }
    ]
}