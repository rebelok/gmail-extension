'use strict';

(function () {

    function ScriptLoader() {

        function load(name) {
            console.log('loading %s script..', name);
            var j = document.createElement('script');
            j.src = chrome.extension.getURL(name);
            (document.head || document.documentElement).appendChild(j);
            console.log('done');
        }

        return {load: load};
    }

    var scriptLoader = new ScriptLoader();
    scriptLoader.load("assets/main.js");

})();
