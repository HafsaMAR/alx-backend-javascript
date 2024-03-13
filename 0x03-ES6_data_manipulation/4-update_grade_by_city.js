#!/usr/bin/node

export default function updateStudentGradeByCity(Students, city, newGrades) {
  // filter the Students array using filter
  const filteredStudents = Students.filter((Student) => Student.location === city);
  // map the filter array to add the attribute grade to the students array
  const updateStudents = filteredStudents.map((Student) => {
    // check if the student has a new grade to be updated
    const gradeInfo = newGrades.find((grade) => grade.studentId === Student.id);
    // implement a the new attribute to the array of students objects
    const Grade = gradeInfo ? gradeInfo.grade : 'N/A';

    return {
      ...Student,
      grade: Grade,
    };
  });

  return updateStudents;
}
