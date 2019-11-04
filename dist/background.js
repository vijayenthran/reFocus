// chrome.browserAction.onClicked.addListener(function (activeTab) {
//     // chrome.tabs.onCreated
//     chrome.tabs.create({ 'url': "chrome://newtab" });
// });
// chrome.tabs.onCreated.addListener(function(){
//     console.log(`There are ${a++} tabs opened`);
// });
'use strict';

const blockUrls = ["*://www.youtube.com/*", "*://www.facebook.com/*"];
chrome.webRequest.onBeforeRequest.addListener(function (details) { 
    console.log(details);
    return { redirectUrl: chrome.runtime.getURL("./index.html") }
    },{ urls:  blockUrls},["blocking"]
);