import addPopover from '../popover';

test('testing popover shown', () => {
  document.body.innerHTML = '<button class="popover_btn">Click to toggle popover</button>';

  const popoverTitle = 'Just testing popover title';
  const popoverContent = 'Just testing popover content';
  const popoverOnElement = '.popover_btn';

  document.querySelector('.popover_btn').addEventListener('click', () => {
    addPopover(popoverTitle, popoverContent, popoverOnElement);
  });

  document.querySelector('.popover_btn').click();

  const popoverElement = document.querySelector('.popover');
  const result = document.contains(popoverElement);

  expect(result).toBe(true);
});

test('testing popover hidden', () => {
  document.body.innerHTML = '<button class="popover_btn">Click to toggle popover</button>';

  const popoverTitle = 'Just testing popover title';
  const popoverContent = 'Just testing popover content';
  const popoverOnElement = '.popover_btn';

  document.querySelector('.popover_btn').addEventListener('click', () => {
    addPopover(popoverTitle, popoverContent, popoverOnElement);
  });

  document.querySelector('.popover_btn').click();
  document.querySelector('.popover_btn').click();

  const popoverElement = document.querySelector('.popover');
  const result = document.contains(popoverElement);

  expect(result).toBe(false);
});
