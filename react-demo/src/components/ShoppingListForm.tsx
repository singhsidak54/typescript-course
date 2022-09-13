import React, { useRef } from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();

        const product = productInputRef.current!.value;
        const quantity = parseInt(quantityInputRef.current!.value);
        onAddItem(product, quantity);

        productInputRef.current!.value = "";
        quantityInputRef.current!.value = "1";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Item Name" ref={productInputRef} />
            <input type="number" placeholder="quantity" min={0} ref={quantityInputRef}/>
            <button type="submit">Add Item</button>
        </form>
    )
}