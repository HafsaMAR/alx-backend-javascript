export default function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to extract ids from each student object
  return students.map((student) => student.id);
}
