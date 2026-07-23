let patients = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 15 },
    { id: 3, name: "David", age: 45 },
    { id: 4, name: "Emma", age: 60 }
];

for (let i = 0; i < patients.length; i++) {
    if (patients[i].age < 18) {
        break;
    }

    console.log("Name:", patients[i].name);
    console.log("Age:", patients[i].age);
}