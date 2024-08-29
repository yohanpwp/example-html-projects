
class Motherfucker {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    updateValue (value) {
        if (typeof value === 'number' && value >= 0) {
            this.value = value;
        } else {
            throw new Error('Value must be a non-negative number');
        }
    }
    
    get multiplyValue() {
        return this.value * 2;
    }

}

let girl3 = new Motherfucker('Sora',10000)
girl3.updateValue(3000)
console.log(girl3)

const girl4 = new Motherfucker('Aoi',3000)

girl4.updateValue(5000)
console.log(girl4)
console.log(girl4.multiplyValue)