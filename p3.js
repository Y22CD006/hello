class pay{
    constructor(balance){
        this._balance=balance
    }
    get balance(){
        return this._balance
    }
    set balance(amount){
        return this._balance=amount
    }
}
let p=new pay(5000)
console.log(p.balance)
p.balance=1000
console.log(p.balance)