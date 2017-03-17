define([
    "js/init/init"
], function () {
    $AGS.pluginsLoaded(function () {

        $AGS.$tmp = $('<div id="automizy-grid-system-tmp"></div>');

        $AGS.layoutReady();
        $AGS.ready();
    });
});