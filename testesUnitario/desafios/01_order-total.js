function orderTotal(order) {
   return order.items.reduce((prev, cur) => cur.price *(cur.quantity || 1) + prev,0)
}

console.log(orderTotal({ items: [
    { 'nome': 'teste1', price: 4, quantity: 6},
    { 'nome2': 'teste2', price: 4, quantity: 6}
]}))



module.exports = orderTotal;