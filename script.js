'use strict';

(() => {
const content = document.querySelector('.content');
if (!content) {
  return;
}

const blocks = content.querySelectorAll('.block');
let activeBlock = null;

const replaceElements = (oldElement, newElement) => {
  const index = [...content.children].findIndex((child) => child === newElement);
  content.replaceChild(newElement, oldElement);
  if (index === content.children.length) {
      content.appendChild(oldElement)
  } else {
    content.insertBefore(oldElement, content.children[index]);
  }
}

blocks.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('block--actv')) {
      activeBlock.classList.remove('block--actv');
      activeBlock = null;
    } else if (!activeBlock) {
      activeBlock = item;
      activeBlock.classList.add('block--actv');
    } else {
      replaceElements(item, activeBlock);
      activeBlock.classList.remove('block--actv');
      activeBlock = null;
    }
  });
});

})();
