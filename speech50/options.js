var synth = window.speechSynthesis;
var inputTxt = document.querySelector('#txt_speech');
var voiceSelect = document.querySelector('#voiceList');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('#pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('#rate-value');

var btnSpeak = document.querySelector('#btnSpeak');
var btnSetDefault = document.querySelector('#btnSetDefault');

var voices = [];

function populateVoiceList() {
    voices = synth.getVoices();

    for (var i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        // if (voices[i].default) {
        //     option.textContent += ' -- DEFAULT';
        // }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

btnSpeak.onclick = function(event) {
    //event.preventDefault();

    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (var i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
        }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);

}

pitch.onchange = function() {
    pitchValue.textContent = pitch.value;

}

rate.onchange = function() {
    rateValue.textContent = rate.value;

}

inputTxt.focus();

setTimeout(function () {

    chrome.storage.sync.get("tts_lang", (data_l) => {
        let currentLang = data_l.tts_lang;
        let currentLangName = '';
        let currentLangRate = 1;
        let currentLangPitch = 1;

        chrome.storage.sync.get("tts_name", (data_n) => {

            // console.log(data_n.tts_name);

            if(data_n.tts_name == 'init'){
                if($('#voiceList option[data-lang="'+currentLang+'"]').length > 0){
                    let lang_name = '';
                    $.each($('#voiceList option[data-lang="'+currentLang+'"]'), function( index, value ) {

                        if(index == 0){
                            lang_name = value.attributes['data-name'].nodeValue;
                        }

                    });

                    if($("#voiceList option[data-name='"+lang_name+"']").length == 1){
                        $("#voiceList option[data-name='"+lang_name+"']").prop("selected", true);
                    }
                }

            }else{

                currentLangName = data_n.tts_name;

                chrome.storage.sync.get("tts_rate", (data_r) => {

                    currentLangRate = data_r.tts_rate;

                    chrome.storage.sync.get("tts_pitch", (data_p) => {

                        currentLangPitch = data_p.tts_pitch;

                        $("#voiceList option[data-name='"+currentLangName+"']").prop("selected", true);

                        $("#rate").val(currentLangRate);
                        $("#rate-value").text(currentLangRate);

                        $("#pitch").val(currentLangPitch);
                        $("#pitch-value").text(currentLangPitch);

                    });
                });

            }

        });

    });

}, 500);





btnSetDefault.onclick = function(event) {

    objVoiceList = $("#voiceList");

    let tts_lang = objVoiceList.find(':selected').attr('data-lang');
    let tts_name = objVoiceList.find(':selected').attr('data-name');
    let tts_rate = $("#rate").val();
    let tts_pitch = $("#pitch").val();

    chrome.storage.sync.set({ tts_lang });
    chrome.storage.sync.set({ tts_name });
    chrome.storage.sync.set({ tts_rate });
    chrome.storage.sync.set({ tts_pitch });


}