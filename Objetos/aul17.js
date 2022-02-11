let pessoa = {
    nome: 'BOB',
    peso: 88,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p 
    }
}
pessoa.engordar(2)
console.log(`${pessoa.nome} está pesando ${pessoa.peso}Kg`)