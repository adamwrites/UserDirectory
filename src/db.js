class Employee {
    constructor (firstName, lastName, title, managerFirstName, managerLastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.managerFirstName = managerFirstName;
        this.managerLastName = managerLastName;
        this.department = department;
    }
}

const employees = [];

employees.push(new Employee ("Adam", "Tatar", "Software Engineer", "Mo", "Tatar", "Development"));
employees.push(new Employee ("Jess", "Grand", "Junior Software Engineer", "Mo", "Tatar", "Development"));
employees.push(new Employee ("Corbin", "Max", " Test Engineer", "Angie", "Alt", "Development"));
employees.push(new Employee ("JJ", "Jayjay", "Senior Accountant", "Angie", "Alt", "Finance"));
employees.push(new Employee ("Ryan", "Doobs", "Junior Accountant", "Angie", "Alt", "Finance"));

const db = {employees: employees};

export default db;