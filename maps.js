
const stateCapitals = new Map([
    ['VA', 'Richmond'],
    ['NC', 'Raleigh'],
    ['SC', 'Columbia'],
    ['GA', 'Atlanta']
]);

stateCapitals.set('FL', 'Tallahassee');

stateCapitals.forEach( (capital, state) => {
    console.log(`The capital of ${state} is ${capital}`)
})

console.log('----------------------');
const ncCapital = stateCapitals.get('NC');
console.log(`The capital of NC is ${ncCapital}`)

console.log('----------------------');
console.log(stateCapitals.has('MD'));
console.log(stateCapitals.has('NC'));

console.log('----------------------');
console.log(`The size is ${stateCapitals.size}`)

const keys = stateCapitals.keys();
console.log(keys)

const values = stateCapitals.values();
console.log(values)

const entries = stateCapitals.entries();
console.log(entries)


console.log('----------------------');
console.log('values for of loop');
for (const value of values) {
    console.log(value)
}
console.log('----------------------');
console.log('keys for of loop');
for (const key of keys) {
    console.log(key)
}
console.log('----------------------');
console.log('entries for of loop');
for (const entry of entries) {
    console.log(entry)
}

console.log('----------------------');
stateCapitals.clear();
console.log(`The size after clear is ${stateCapitals.size}`)

