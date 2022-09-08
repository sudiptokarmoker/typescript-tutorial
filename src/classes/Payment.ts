import { HasFormatter } from "../interfaces/HasFormatter"
export class Payment implements HasFormatter {
    constructor(
        readonly recipent: string,
        private details: string,
        public amount: number
    ){}
    format(){
        return `${this.recipent} owed $${this.amount} for ${this.details}`
    }
}