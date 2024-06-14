class University {
  constructor(name, facultiesNames) { 
    this.name = name;
    this.facultiesNames = facultiesNames;
  }
  addDepartment(newFaculty) {
    this.facultiesNames.push(newFaculty)
  } 
  removeDepartment(removedFaculty) {
    this.facultiesNames = this.facultiesNames.filter(faculty => faculty != removedFaculty)
  } 
  showDepartments() {
    this.facultiesNames.forEach(faculty => {
      console.log(faculty)
    });
  }
}

let university = new University('BSUIR', ['FCP', 'CSIS', 'FRA']);
university.removeDepartment('CSIS');
university.addDepartment('FFF');
university.showDepartments();
