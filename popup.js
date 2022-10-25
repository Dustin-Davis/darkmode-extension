import { getCurrentTab } from "./utils.js";

if (document.querySelector(".popup")) {
  const button = document.querySelector(".button");
  let buttonOn = false;


  function invert() {
    alert("hi")
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
      mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })
  }

  button.addEventListener("click", async () => {
    if (!buttonOn) {
      buttonOn = true;
      button.innerHTML = "On"
      let tab = await getCurrentTab();

      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        files: ['appOn.js']
      })
    }
    else {
      buttonOn = false;
      button.innerHTML = "Off"
      let tab = await getCurrentTab();
      chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        files: ['appOff.js']
      })
    }
  })

}
