#!/usr/bin/node
/* eslint-disable no-restricted-syntax */
export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < report.length) {
        const department = report[currentDepartmentIndex];
        const { employees } = department;

        if (currentEmployeeIndex < employees.length) {
          const employee = employees[currentEmployeeIndex];
          // eslint-disable-next-line no-plusplus
          currentEmployeeIndex++;
          return { value: employee, done: false };
        }
        // eslint-disable-next-line no-plusplus
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }
      return { done: true };
    },
  };
}
