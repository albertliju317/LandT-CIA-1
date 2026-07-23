let patients = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "David", age: 40 },
    { id: 4, name: "Emma", age: 35 }
];

patients.push({ id: 5, name: "Michael", age: 50 });

let oldestPatient = patients[0];

for (let i = 1; i < patients.length; i++) {
    if (patients[i].age > oldestPatient.age) {
        oldestPatient = patients[i];
    }
}

console.log("Patients:");
console.log(patients);

console.log("\nOldest Patient:");
console.log("ID:", oldestPatient.id);
console.log("Name:", oldestPatient.name);
console.log("Age:", oldestPatient.age);