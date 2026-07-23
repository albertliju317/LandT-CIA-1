let patients = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "David", age: 40 },
    { id: 4, name: "Emma", age: 35 }
];

patients.pop();

patients.sort((a, b) => a.age - b.age);

console.log("Patients after removing and sorting:");
console.log(patients);