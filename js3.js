// OOP - Class

class Device{

    rechargable;
    #power;

    constructor(type,model){
        this.type = type;
        this.model = model;
    }
    func(){
        console.log('method of parent class');
    }

    // static fields and methods

    static powerSource = 'Battery';     
    static functionality(type,model){
        return `${model} ${type} is used to make the life easy`;
    }

}

const d1 = new Device('Mobile','Apple');
const d2 = new Device('Laptop','Dell');
console.log(Device.powerSource);
d1.func();

class Mobile extends Device{
    constructor(type,model,ram,rom){
        super(type,model);
        this.ram = ram;     //must use super before this keyword , in order to assign parent data fields
        this.rom = rom;
        // or
        // super('mobile','google');    or      constructor(type,model,ram,rom) then super(type,model) , this.ram , this.rom
        // this.ram = ram;    
        // this.rom = rom;
    }
    func(){
        super.func();
    }
    get details(){
        return `this is a ${this.model} ${this.type} of ${this.ram} gb ram  ${this.rom} gb rom `
    }
}

const m1 = new Mobile('smartphone','google',8,64);
console.log(m1);
m1.func();
console.log(m1.details);

