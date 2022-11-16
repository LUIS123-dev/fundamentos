class No {
    constructor(valor) {
        this.valor = valor
        this.proximo = null;
    }
}
class Lista {
    constructor() {
        this.cabeca = null;
    }
    //método de add um valor na lista
    adicionar(valor) {
        const novoNo = new No(valor);
        if (this.cabeca === null) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo
            }
            atual.proximo = novoNo;
        }
    }
    //método de retornar um valor na lista
    get(posicao) {
        if (posicao > -1) {
            let atual = this.cabeca;
            let i = 0;
            while (atual !== null && i < posicao) {
                atual = atual.proximo;
                i++
            }
            return atual !== null ? atual.valor : undefined;
        } else {
            return undefined
        }
    }
    //método de deletar um valor na lista
    deletar(posicao) {
        if (this.cabeca === null || posicao < 0) {
            throw new RangeError(`Sem item na posição ${posicao}`)
        }
        if (posicao === 0) {
            this.cabeca = this.cabeca.proximo
            return true;
        }
        let atual = this.cabeca
        let anterior = null;
        let i = 0;
        while (atual != null && i < posicao) {
            anterior = atual;
            atual = atual.proximo;
            i++;
        }
        if (atual !== null) {
            anterior.proximo = atual.proximo;
            return true;
        }
        throw new RangeError(`Sem item na posição ${posicao}`);
    }
    valores() {
        let atual = this.cabeca;
        let valores = [];
        while (atual !== null) {
            valores.push(atual.valor);
            console.log(atual.valor)
            atual = atual.proximo;
        }
        return valores;
    }
}
const lista = new Lista();
lista.adicionar(1);
lista.adicionar(2);
lista.adicionar(3);
console.log(lista.valores());
console.log(lista.get(1))
console.log(lista.deletar(1))
lista.deletar(1);
lista.adicionar(4);
console.log(lista.valores());
console.log(lista.get(2));





