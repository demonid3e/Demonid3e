"use strict";

function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
     // tabs
  const tabs = document.querySelectorAll(tabsSelector),
  tabsContent = document.querySelectorAll(tabsContentSelector),
  tabsParent = document.querySelector(tabsParentSelector);

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hidden");
    item.classList.remove("show");
  });
  tabs.forEach((item) => {
    item.classList.remove(activeClass);
  });
}

// if function was called without arguments the default will be 0
function showTabContent(i = 1) {
  tabsContent[i].classList.add("show");
  tabsContent[i].classList.remove("hidden");

  // dont add . because classList already knows its class
  tabs[i].classList.add(activeClass);
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;
// since we use classlist method we cant pass just selector with dot we need to remove dot
// give new tabsSelector but start from 1st symbol
  if (target && target.classList.contains(tabsSelector.slice(1))) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
}

export default  tabs;