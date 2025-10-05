class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    

    describe() {
        return `${this.name} works in ${this.department} department.`;
    }   

}
//Step 2 done

class Manager extends Employee {
  constructor(name, department, teamSize) {
    
    super(name, department);
    this.teamSize = teamSize;
  }

    describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize} people.`;
  }
}
//step 3 done

const emp1 = new Employee("Alice", "Marketing");
const emp2 = new Employee("David", "IT");
const emp3 = new Employee("Sophia", "Human Resources");

const mgr1 = new Manager("Artem", "Finance", 4);
const mgr2 = new Manager("Elena", "Sales", 6);

//step 4 done

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("Company Employee List:");
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.addEmployee(mgr2);
company.listEmployees();
 
//step 6 done??

