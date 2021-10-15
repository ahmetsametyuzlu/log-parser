import Log from "../Log";

test('Parse single log', () => {
  const log = new Log('2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}');
  expect(log.date).toStrictEqual(new Date('2021-08-09T02:12:51.253Z'));
  expect(log.type).toBe('info');
  expect(log.data.transactionId).toBe('9abc55b2-807b-4361-9dbe-aa88b1b2e978');
});
