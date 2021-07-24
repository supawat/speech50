# Speech50

#### Video Demo:  https://youtu.be/D76RUh_OsAM

#### Description:

Chrome extension text to speech by web API

Source code  : https://github.com/supawat/speech50

or cs50 IDE in my project folder

This proeject is a Chrome extension using JavaScript.

Main feature of this extension is read text to speech

by usage web api https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

Project version 1.0

File of project

    manifest.json
       This file is configuration chrome extension Manifest V3
       is available beginning with Chrome 88,
       and the Chrome Web Store begins accepting MV3 extensions in January 2021.
       https://developer.chrome.com/docs/extensions/mv3/intro/

    background.js
        This file initial variable text to speech
        value to chrome storage when install this chrome extension.

        initial variable is

        tts_lang = 'en-GB';

        tts_name = 'init';

        tts_rate = 1;

        tts_pitch = 1;

        this chrome extension initial language english Great Britain

        initial rate is 1

        initial pitch is 1

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


File library of project

    jQuery

    jQuery is a fast, small, and feature-rich JavaScript library.
    It makes things like HTML document traversal and manipulation,
    event handling, animation, and Ajax much simpler with an easy-to-use API
    that works across a multitude of browsers. With a combination of versatility
    and extensibility, jQuery has changed the way that millions of people write JavaScript.

    jquery-3.6.0.min.js

    Bootstrap

    Quickly design and customize responsive mobile-first sites with Bootstrap,
    the world’s most popular front-end open source toolkit, featuring Sass variables
    and mixins, responsive grid system, extensive prebuilt components,
    and powerful JavaScript plugins.

    bootstrap.min.css
    bootstrap.bundle.min.js

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
    5. Select option language that you want to set default.
    6. Select Rate and Pitch that you want to set default.
    7. Click Set Default button.

