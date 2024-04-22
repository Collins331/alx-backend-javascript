export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task1 = true;
    var task3 = false;
  }

  return [task, task2];
}
