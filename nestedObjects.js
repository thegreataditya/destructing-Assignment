const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    },
}

function nameAndStreet(obj){
    const {name: nm, address:{street: st}} = obj;
    const ans = {
        name: nm,
        street: st
    }
    return ans;
}

console.log(nameAndStreet(person));