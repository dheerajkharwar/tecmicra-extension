chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: "https://admin.tecmicra.com" });
});
