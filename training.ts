
export default class Cowgirl {
    name: string;
    value: number
    constructor(name:string, value:number) {
        this.name = name;
        this.value = value;
    }

    updateValue (value:number) {
        if (value >= 0) {
            this.value = value;
        } else {
            throw new Error('Value must be a non-negative number');
        }
    }
    
    get multiplyValue() {
        return 'This girl costs ' + this.value * 2;
    }

}

const girl1 = new Cowgirl('Sora',10000)
girl1.updateValue(3000)
console.log(girl1)

const girl2 = new Cowgirl('Aoi',3000)

girl2.updateValue(5000)
console.log(girl2)
console.log(girl2.multiplyValue)

