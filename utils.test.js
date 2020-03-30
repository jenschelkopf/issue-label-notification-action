const correctRecipients = require('./utils');

test('changes nothing when configuration is correct', () => {
  const complexInput = `@docs-team @docs-team
  @docs-team @docs-team
  @docs-team @docs-team
  @docs-team @docs-team
  @docs-team  @docs-team
  @docs-team		@docs-team`;

  expect(correctRecipients(complexInput)).toBe(complexInput);
  expect(correctRecipients('@docs-team')).toBe('@docs-team');
  expect(correctRecipients('@1234')).toBe('@1234');
});

test('adds missing ambersands', () => {
  const input = `@docs-team docs-team
  docs-team @docs-team
  docs-team docs-team
  @docs-team @docs-team
  @docs-team  docs-team
  @docs-team		docs-team
  1234 @1234`

  const output = `@docs-team @docs-team
  @docs-team @docs-team
  @docs-team @docs-team
  @docs-team @docs-team
  @docs-team  @docs-team
  @docs-team		@docs-team
  @1234 @1234`;

  expect(correctRecipients(input)).toBe(output);
});
