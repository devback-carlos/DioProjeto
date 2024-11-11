class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
    
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let heroiEscolhido = new heroi ("Yummi", 2, "mago", "magia")

heroiEscolhido.atacar()