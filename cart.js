let cart=[];
export function additem(item){
    cart.push(item);
}

export function removeItem(item){
    cart.filter(cartitem => cartItem != item);
}

export function getTotal(){
    return cart.length;
}