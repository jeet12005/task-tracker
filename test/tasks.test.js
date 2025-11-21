// test/tasks.test.js


test('loadTask handles null', () => {
  expect(loadTask(null)).toBeNull();
});


test('groupAssignee handles null', () => {
  expect(groupAssignee(null)).toBeNull();
});
