var moshare = {
    prefs: null,
    currentVersion: '1.0.3',
    buttonInstalled: false,

    popup_settings: {
        "title": "MoShare",
        "specs": "location=1,status=0,scrollbars=0,resizable=no,width=380,height=502,menubar=no,toolbar=no"
    },

    init: function() {
        this.prefs = Components.classes["@mozilla.org/preferences-service;1"]  
         .getService(Components.interfaces.nsIPrefService)  
         .getBranch("extensions.moshare.");
         
        if (!this.prefs.getBoolPref("buttonInstalled") || this.currentVersion !== this.prefs.getCharPref("versionInstalled")) {
            this.installButton();
            this.prefs.setBoolPref("buttonInstalled", true);
            this.prefs.setCharPref("versionInstalled", this.currentVersion);
        }
    },

    installButton: function() {
        try {
            var navBar               = document.getElementById("nav-bar");
            var moshareToolbarButton = "moshareToolbarButton";
            var curSet               = navBar.getAttribute("currentset");
            if (!curSet) {
                curSet = navBar.currentSet;
            }

            if (curSet.indexOf(moshareToolbarButton) == -1) {
                var set;
                // Place the button at the end
                set = curSet + "," + moshareToolbarButton;
                navBar.setAttribute("currentset", set);
                navBar.currentSet = set;
                document.persist(navBar, "currentset");
                // If you don't do the following call, funny things happen
                 try {
                     BrowserToolboxCustomizeDone(true);
                 }
                 catch (e) { alert(e.message); }
             }
        }
        catch(e) { alert(e.message); }
    },

    gen_url: function(media_type, title, _location, message, content_url) {
        var url = "http://www.mogreet.com/moshare/it/";
        url += "?share=" + encodeURIComponent(_location);
        url += "&title=" + encodeURIComponent(title);
        url += "&media_type=" + encodeURIComponent(media_type);
        url += "&channel=firefox_plugin";


        if (content_url) {
            url += "&content_url=" + encodeURIComponent(content_url);
        }
        if (media_type == "image") {
            url += "&thumbnail=" + encodeURIComponent(content_url);
        }
        if (message) {
            url += "&message=" + encodeURIComponent(message);
        }
        return url;
    },

    updateMenu: function(e) {
        var menu_image = document.getElementById("moshare_image");
        var menu_text  = document.getElementById("moshare_text");
        var menu_page  = document.getElementById("moshare_page");
        var menu_link  = document.getElementById("moshare_link");
        var menu_video = document.getElementById("moshare_video");
        var menu_audio = document.getElementById("moshare_audio");

        menu_image.hidden = !(e.target.localName == "img");
        var text = e.target.ownerDocument.getSelection();
        menu_text.hidden = (text == "");
        if (!menu_text.hidden) {
            menu_text.label = "MoShare '" + text + "'";
        }

        menu_video.hidden = !(e.target.localName == "video");
        menu_audio.hidden = !(e.target.localName == "audio");
        menu_link.hidden = !(e.target.localName == "a");
        menu_page.hidden = !(menu_text.hidden && menu_image.hidden && menu_link.hidden && menu_audio.hidden && menu_video.hidden);
    },

    image: function(e) {
        var title = gContextMenu.target.ownerDocument.title;
        var _location;
        if (gContextMenu.target.parentNode.localName == "a") {
            _location = gContextMenu.target.parentNode.href;
        } else {
            _location = gContextMenu.target.ownerDocument.location.href;
        }

        var url = this.gen_url("image", title, _location, "", gContextMenu.target.src);
        window.open(url,this.popup_settings.title, this.popup_settings.specs);

    },

    video: function(e) {
        var title = gContextMenu.target.ownerDocument.title;
        var _location = gContextMenu.target.ownerDocument.location.href;
        var sources = gContextMenu.target.getElementsByTagName('source');
        var src = "";
        if (sources.length > 0) {
            src = sources[0].src;
        }
        var url = this.gen_url("video", title, _location, "", src);
        window.open(url, this.popup_settings.title, this.popup_settings.specs);        
    },

    audio: function(e) {
        var title = gContextMenu.target.ownerDocument.title;
        var _location = gContextMenu.target.ownerDocument.location.href;
        var sources = gContextMenu.target.getElementsByTagName('source');
        var src = "";
        if (sources.length > 0) {
            src = sources[0].src;
        }
        var url = this.gen_url("audio", title, _location, "", src);
        window.open(url, this.popup_settings.title, this.popup_settings.specs);
    },

    link: function(e) {
        var title = gContextMenu.target.ownerDocument.title;
        var _location = gContextMenu.target.ownerDocument.location.href;
        var url = this.gen_url("link", title, gContextMenu.linkURL);
        window.open(url, this.popup_settings.title, this.popup_settings.specs);
    },

    text: function(e) {
        var title = gContextMenu.target.ownerDocument.title;
        var _location = gContextMenu.target.ownerDocument.location.href;
        var url = this.gen_url("snippet", title, _location, gContextMenu.target.ownerDocument.getSelection());
        window.open(url, this.popup_settings.title, this.popup_settings.specs);
    },

    page: function(e) {
        var title = gContextMenu.target.ownerDocument.title;
        var _location = gContextMenu.target.ownerDocument.location.href;
        var url = this.gen_url("page", title, _location);
        window.open(url, this.popup_settings.title, this.popup_settings.specs);
    },

    toolbarPage: function(e) {
        var title = window.content.document.title;
        var _location = window.content.location.href;
        var url = this.gen_url("page", title, _location);
        window.open(url, this.popup_settings.title, this.popup_settings.specs);
    }

};

window.addEventListener("load", function() { moshare.init(); }, false);  
window.addEventListener("unload", function(e) { moshare.shutdown(); }, false);
window.addEventListener("contextmenu", function(e) { moshare.updateMenu(e); }, true);

