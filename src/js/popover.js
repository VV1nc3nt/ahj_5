export default function addPopover(popoverName, popoverContent, popoverOnElement) {
  const popover = document.querySelector('.popover');

  if (!document.contains(popover)) {
    const popoverBtn = document.querySelector(popoverOnElement);

    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    document.body.appendChild(popoverElement);

    const popoverTitle = document.createElement('p');
    popoverTitle.classList.add('popover_title');
    popoverTitle.textContent = popoverName;
    popoverElement.appendChild(popoverTitle);

    const popoverText = document.createElement('p');
    popoverText.classList.add('popover_content');
    popoverText.textContent = popoverContent;
    popoverElement.appendChild(popoverText);

    const { left, top } = popoverBtn.getBoundingClientRect();

    popoverElement.style.left = `${left + popoverBtn.offsetWidth / 2 - popoverElement.offsetWidth / 2}px`;
    popoverElement.style.top = `${top - popoverElement.offsetHeight - 10}px`;

    return;
  }

  popover.remove();
}
