
export default function getStudentIdsSum(students) {
    return students.reduce((total, { id }) => total + id, 0);
}