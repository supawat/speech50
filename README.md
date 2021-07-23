# speech50
Chrome extension text to speech by web API

#### Video Demo:  <URL HERE>

#### Description:

This proeject is a Chrome extension using JavaScript. 

Main feature of this extension is read text to speech by usage web api https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

Project version 1.0

File of project

    manifest.json
       This file is configuration chrome extension Manifest V3 is available beginning with Chrome 88, 
       and the Chrome Web Store begins accepting MV3 extensions in January 2021. 
       https://developer.chrome.com/docs/extensions/mv3/intro/

    background.js
        This file initial variable text to speech value to chrome storage when install this chrome extension.

    popup.html
        This file is main layout of chrome extension.

    popup.js
        This file will call text to speech web api.

    options.html
        This file is option layout of chrome extension.
     
    options.js
        This file it use for set default text to speech value.

    style.css
        This file use set style sheet to layout file like popup.html and options.html

Installation

    Prerequisite
        Google chrome web browser version 88 or later
 
    1. Open google chrome web browser
    2. Goto chrome://extensions
    3. Click "Load unpacked" button and browse for select folder speech50 

How to set default language of text to speech

    1. Open google chrome web browser
    2. Goto chrome://extensions
    3. Find Chrome extension Speech50 and click "Details" .
    4. Goto Extension option and click link to option page.
    5. Select option language that you want sat default. 
    6. Select Rate and Pitch that you want sat default. 
    7. Click Sat Default button.
    