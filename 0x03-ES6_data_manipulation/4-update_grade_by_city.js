export default function updateStudentGradeByCity(array, city, newGrades) {
  const students = array.filter((item) => item.location === city);
  const updatedStudents = students.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    return { ...student, grade: studentGrade ? studentGrade.grade : 'N/A' };
  });
  return updatedStudents;
}
