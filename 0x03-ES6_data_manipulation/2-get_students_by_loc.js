export default function getStudentsByLocation(array, city) {
  return array.filter((item) => item.location === city);
}
