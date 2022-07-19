
const tabLinks = document.querySelectorAll('.nav__link');

tabLinks.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("href");
        let currentTab = document.querySelector(tabId);

        tabLinks.forEach(function (item) {
            item.classList.remove('active')
        });
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
}

document.querySelector(".nav__link").click();


