export type OrderItemPreview = {
    productId: number;
    quantity: number;
}

export type OrderBasketItemPreview = {
    id: number;
    productId: number;
    quantity: number;
}

export type OrderBasketPreview = {
    items: OrderBasketItemPreview[]
}

export type OrderInfo = {
    id: number;
    basket: OrderBasketPreview
    customerId: number;
    userId: number;
    status: string;
}
