browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion);
});

browser.browserAction.setBadgeText({
  text: `123`,
});

console.log(`This is the Event Page for the Browser Action!`);
