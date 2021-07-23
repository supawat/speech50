let tts_lang = 'en-GB';
let tts_name = 'init';
let tts_rate = 1;
let tts_pitch = 1;


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ tts_lang });
  chrome.storage.sync.set({ tts_name });
  chrome.storage.sync.set({ tts_rate });
  chrome.storage.sync.set({ tts_pitch });
});
