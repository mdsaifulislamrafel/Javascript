let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

for (let key in myObject) {
    const value = myObject[key];
    const type = typeof value;
    console.log(`key: ${key} | type: ${type}`)
}