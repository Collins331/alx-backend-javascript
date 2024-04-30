export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, item) => accumulator + item.id, 0);
}
