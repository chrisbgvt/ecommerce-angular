export interface IOrder {
    userId: number,
    date: string,
    products: [
        {
            productId: number,
            quantity: number
        }
    ]
}