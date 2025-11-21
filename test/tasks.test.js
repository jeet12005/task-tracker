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
