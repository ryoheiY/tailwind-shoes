import { CartItem } from "./CartItem";

export function Cart({cartItems, onClickTrash}) {
    return (
        <div>
            <h2 className=" dark:text-white mb-5 text-4xl font-bold">Cart</h2>
            <ul className=" space-y-5">
                {cartItems.map(cartItem => {
                    return <li key={cartItem.product.id}>
                        <CartItem
                        onClickTrash={onClickTrash} 
                        size={cartItem.size}
                        qty={cartItem.qty}
                        item={cartItem.product} />
                    </li>
                })}
            </ul>
            
            </div>

    );
}