export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const gradeObj = newGrades.find((grade) => grade.student.Id === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });
}
