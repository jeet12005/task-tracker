// test/tasks.test.js


test('loadTask handles null', () => {
  expect(loadTask(null)).toBeNull();
});


test('groupAssignee handles null', () => {
  expect(groupAssignee(null)).toBeNull();
});


test('normalizeReminder handles null', () => {
  expect(normalizeReminder(null)).toBeNull();
});


test('renderReminder handles null', () => {
  expect(renderReminder(null)).toBeNull();
});


test('computePriority handles null', () => {
  expect(computePriority(null)).toBeNull();
});


test('decodeQueue handles null', () => {
  expect(decodeQueue(null)).toBeNull();
});


test('loadTag handles null', () => {
  expect(loadTag(null)).toBeNull();
});


test('groupTag2 handles null', () => {
  expect(groupTag2(null)).toBeNull();
});


test('countChecklist handles null', () => {
  expect(countChecklist(null)).toBeNull();
});


test('countPriority handles null', () => {
  expect(countPriority(null)).toBeNull();
});
