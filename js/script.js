const body = document.querySelector("body");
const userSettingEl = document.querySelector(".user__dropdown");
const userMsgEl = document.querySelector(".user__msg-dropdown");
const searchInputEl = document.querySelector(".header__search-input");
const searchDropdownEl = document.querySelector(".search-dropdown");
const searchDropdownList = document.querySelector(".search-dropdown-list");

function showUserDropDownList(e) {
  if (
    e.target.classList.contains("header__user-info-box") ||
    e.target.classList.contains("header__user-info-img") ||
    e.target.classList.contains("header__user-info-name")
  )
    userSettingEl.classList.toggle("hide");
}
function showUserMsg(e) {
  if (
    e.target.classList.contains("header__user-chat-box") ||
    e.target.classList.contains("header__user-chat-icon") ||
    e.target.classList.contains("header__user-chat-notification") ||
    e.target.classList.contains("header__user-chat-svg")
  )
    e.target
      .closest(".header__user-chat-box")
      .querySelector(".user__msg-dropdown")
      .classList.toggle("hide");
}

function showSearchSuggestion() {
  if (this.value !== this.defaultValue)
    searchDropdownEl.classList.remove("hide");
  const arr = [
    "super hotel",
    "hotelTransluvania",
    "hoteldelona",
    "rich hotel",
    "findthe way hotel",
    "doggy hotel",
    "arailhotel",
    "boilinghotel",
    "sazahotel",
    "spacehotel",
    "zalahotel",
    "gokuhotel",
    "hokuhotel",
    "mokuhotel",
    "sokuhotel",
    "lokuhotel",
    "Hotel Guvas",
    "Hotel Mike",
    "Love Hotel",
    "Landy Hotel",
  ];

  const refineArr = arr.map((mov) => mov.toLowerCase());
  const matchArr = refineArr.filter((mov) =>
    mov.includes(this.value.toLowerCase())
  );

  const html = matchArr
    .map((mov) => `<li class="search-dropdown-item">${mov}</li>`)
    .join(" ");

  searchDropdownList.innerHTML = "";
  searchDropdownList.insertAdjacentHTML("afterbegin", html);

  searchDropdownEl.value = "";
}

function hideSearchSuggestion() {
  setTimeout(() => {
    searchDropdownEl.classList.add("hide");
    searchDropdownEl.value = "";
  }, 400);
}

function hideClickedEl() {
  searchDropdownEl.classList.add("hide");
  userSettingEl.classList.add("hide");
  userMsgEl.classList.add("hide");
}

function init(e) {
  // if (e.target.classList.contains("sidebar__item")) {
  //   console.log(e.target);
  //   e.target.classList.toggle("sidebar__item--active");
  // }

  setTimeout(showUserDropDownList.bind(this, e), 50);
  setTimeout(showUserMsg.bind(this, e), 50);

  hideClickedEl();
}

function start() {
  document.addEventListener("click", init);
  searchInputEl.addEventListener("keypress", showSearchSuggestion);
  // searchInputEl.addEventListener("mouseleave", hideSearchSuggestion);
}

window.addEventListener("load", start);
