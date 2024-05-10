function getSupplier(code) {
    return code.substring(0, code.indexOf(':'));
}

function getProductNumber(code) {
    let start = code.indexOf(':') + 1;
    let end = code.indexOf('-');
    return code.substring(start, end);
}

function getSize(code) {
    return code.substring(code.indexOf('-') + 1);
}

let code1 = "ACME:123-L";
let code2 = "DI:12345-M";
let code3 = "ACE:1-12";

console.log(`Supplier 1: ${getSupplier(code1)}`);
console.log(`Product Number 1: ${getProductNumber(code1)}`);
console.log(`Size 1: ${getSize(code1)}`);

console.log(`Supplier 2: ${getSupplier(code2)}`);
console.log(`Product Number 2: ${getProductNumber(code2)}`);
console.log(`Size 2: ${getSize(code2)}`);

console.log(`Supplier 3: ${getSupplier(code3)}`);
console.log(`Product Number 3: ${getProductNumber(code3)}`);
console.log(`Size 3: ${getSize(code3)}`);
