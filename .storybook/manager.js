import { addons } from "@storybook/manager-api";
import yourTheme from "./YourTheme";

addons.setConfig({
  theme: yourTheme,
});

const observer = new MutationObserver((mutations) => {
  const element = document.getElementById("save-from-controls");
  if (element) {
    element.style.display = "none";
  }

  // const searchBar = document.querySelector(".search-field");
  // if (searchBar) {
  //   searchBar.style.display = "none";
  // }

  const removeAddStory = document.querySelector(".css-17fv6jh");
  if (removeAddStory) {
    removeAddStory.style.display = "none";
  }

  const removeSetting = document.querySelector(".css-ahugkm");
  if (removeSetting) {
    removeSetting.style.display = "none";
  }

  const removeTopbar = document.querySelector(".css-em1vl4");
  if (removeTopbar) {
    removeTopbar.style.display = "none";
  }

  ;
});

observer.observe(document.body, { childList: true, subtree: true });
