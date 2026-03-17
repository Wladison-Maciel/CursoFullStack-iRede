import { CartItem } from "../interfaces/CartItem"
import { Product } from "../interfaces/Product"

export class Cart {

  private items: CartItem[] = []

  addItem(product: Product, quantity: number): void {

    const existingItem = this.items.find(
      item => item.product.id === product.id
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.items.push({
        product,
        quantity
      })
    }
  }

  getTotalItems(): number {
    return this.items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  getFinalPrice(): number {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity
    }, 0)
  }

  getItems(): CartItem[] {
    return this.items
  }
}