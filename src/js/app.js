import addPopover from './popover';

const popoverTitle = 'Just testing popover title';
const popoverContent = 'Just testing popover content';
const popoverOnElement = '.popover_btn';

document.querySelector('.popover_btn').addEventListener('click', () => {
  addPopover(popoverTitle, popoverContent, popoverOnElement);
});
