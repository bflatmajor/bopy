// @ts-nocheck

const b = typeof chrome !== 'undefined' ? chrome : browser;

const textarea = document.createElement('textarea');
document.body.append(textarea);

b.browserAction.onClicked.addListener((tab) => {
    textarea.value = `${tab.title}\n${tab.url}`;
    textarea.select();
    document.execCommand('copy');
});
