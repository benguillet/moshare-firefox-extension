(function(window, undefined) {
    var motweet = function($, window, _, undefined) {
        
        var css = '.moshare-icon { margin-left: 4px;}';
        $('head').append('<style type="text/css">' + css + '</style>');

        var moshareBase64Png16 = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ' +
                                'bWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp' +
                                'bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6' +
                                'eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEz' +
                                'NDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo' +
                                'dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw' +
                                'dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu' +
                                'MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz' +
                                'b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N' +
                                'Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjgwMTE3NDA3MjA2ODExOEE2REY5NDk5NEU0' +
                                'OUY3RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGODNFRjlBRDNFMkYxMUUxQkRGM0YwQTVF' +
                                'NDFGNEM5NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGODNFRjlBQzNFMkYxMUUxQkRGM0Yw' +
                                'QTVFNDFGNEM5NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9z' +
                                'aCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBODAxMTc0' +
                                'MDcyMDY4MTE4QTZERjk0OTk0RTQ5RjdGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAx' +
                                'MTc0MDcyMDY4MTE4QTZERjk0OTk0RTQ5RjdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS' +
                                'REY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eB6a+AAAAmVJREFUeNqkk19IU1Ec' +
                                'x7/n7s6h6dUxHDomsRqMoCchCIpeeuopGySjlw3xIcrHWKP38GEEYRLUywZJiIwQDBUmSjBIpJe5' +
                                'WoXC+sdMt2HT5e7cvffXPWdoCwwEf3Au9/zOPZ/f93x/5zIiwklC5o+WRwv3tXPn78Igy7F2MQb2' +
                                'u5LTB72XBcBwuYdJ6eqDVhfrF1p13FB09J8C2iTgWw1I7jK82pGxazDAFE3tHV2HCqDpGqvXIWka' +
                                'goUV9H5MYWhkBHa7vQE0DFw314a2VYx8YXivSjytAmYF7oElvpplC9s0PJkkq9VKsizTzMwMNYeu' +
                                '61StVunDRpE8i1vE5gslvlegYFbob6ljf24CdVOJZlYrFov/HFuSJNhsNng62/Cg1wB0vZEXnpCB' +
                                'm3YDfW63SMZiMQSDwSO8YzAV4qrDCtYM4LSLHRICgYCYFgoF8fFRwZXIFpn71qTAPEK72UCfz4dQ' +
                                'KIRwOIyxsbH/dJCJNkLXGgluhPXp2+zUpw1SVZVKpRK5XC5+u2h8fPzQxNnZWVpaWqJyuUzfS7/I' +
                                'MrkmTGwAHr/JDi2uU6VSIcMwKJ1OU09Pj4BEo1FKpVKkKAo5HA6KRCK08vUnybHVvwDb6Hy2+9ky' +
                                'reTyQgWH5PN58vv9AtI84vE4hV6vUsuTlAA0LlKtip1tCXeSa3hxzYfTDgVOpxOJRAKZTAbT09PI' +
                                '5XIYGBjA504vJpd/4MBiximtkZfrkOWzvIbX3oZ7l87giqdbuM1NM8w2b5b38PxdDhOZjQM/d6sP' +
                                'B5WGgv3aHGrqLf66vlfB7amtY/xQ2DxUcJL4I8AAnOxJ4f+kgPsAAAAASUVORK5CYII=';
        
        var moshareBase64Png19 = 'iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC' +
                                'K2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczpt' +
                                'ZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0' +
                                'dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRl' +
                                'c2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwu' +
                                'b3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6c3ViamVjdD4KICAgICAgICAgICAg' +
                                'PHJkZjpCYWcvPgogICAgICAgICA8L2RjOnN1YmplY3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9u' +
                                'PgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4' +
                                'bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JU' +
                                'b29sPkFkb2JlIFBob3Rvc2hvcCBDUzUgTWFjaW50b3NoPC94bXA6Q3JlYXRvclRvb2w+CiAgICAg' +
                                'IDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpfm+dxAAADnElE' +
                                'QVQ4jZWU32uWZRjHP9d9P8+z93l/5N7VnFixtciIWFrKhkbRjxlkCjEEEaYHIvoPLMxO1AMzUpAO' +
                                'O/BIGeXMijrJwZgd+WM4M5EiSAKXIb3Nbe/2vu/zPPd9deC2JrWDLrjvo+v+3N8v15dLVBXZsD9s' +
                                '2v5OOxmW/1tBk2ucO/+bjn2aCoe/yUtX1xlWNL9BmpqFHl24dMlDeXDkIViozEyN6qXr/UEUSmdS' +
                                'KG4ljELsvDAVAlHW5z1rY6Vs4S8HP9SEa3OGTAVk/hdjoVDcErY0dQZgDc5lZEmI94BhS2vEQGvC' +
                                'hgLEgWAQPEo1cVyZSTn2uzA6bcAoGAfOpYQRBkC8R7yCg10rGvR8fZzvThymVq9j4iLEBSRXoFAs' +
                                '0Lsyx7k1Qn9LBpkiXhHvgQQDCahDM8fbj1lWDZ3g0KFDDJ77gitXr2KMwRiDtZYwjCCKeSQf88nT' +
                                'hleLGZo5UP/AMYA6T2xgf36Sr85+BkClUuH27dv/Gp4xBhtFNMc5PnjCEKlHnYd0HkbmeSlWelYE' +
                                'NFSw1nLgwAH6+/v/Mw3GGLwN6WkOWBd7yJYow3nWxY5Vba10d3eTy+XYt28f5XJ52XiJMZQiy9oC' +
                                '4NxSWEbZKhjLnj17mJ2dZffu3VQqleVhIogYmo0Hl83DUsB77iceX6+z+a3NbNu2jeHhYXbu3Mnk' +
                                '5OSyVlWV6dTzIFILytRzfSplLs0IjOXkyZO0t7czPDzMjh07FoG3bt1iYGCA06dPMzFxh5pTbkyl' +
                                '4B0kKda+tr1N86W99+oufLM15Ml8yKOtK9m0aROjo6OMjY0xPj5OR0cHR44cYWhoiIsXL9JSKhA+' +
                                'u56Pb1bwaZKZmelTAQnY2hy1esJH4xmft+SIxdDd3c3IyAgHDx5kcHCQCxcuLFpMkwZPPbOGY9fu' +
                                'UpuqEuIgTbH2lXfbxEZ7rXfhz39WuV9Pef3xIoEIzS0t9PX10dvbS6lUwnvPuq7nOXr0Q0ZKz3Hm' +
                                'xgSROiRNMqrVUxINDL4gxfwljIlVlcQpWzvLvL+xgxdXl4mjEImaAKE6PcWP96ocv3qHL3/6g8gK' +
                                'IgLe13xtZmOAa6jM+QBrEVVywLc3q3z/y116VjfT1Vai2BQw08i4eW+GyxP3mW5k5AKzkBFwPiTJ' +
                                'RDh8tpibnD6PtS/j/eKq8gqJc6D/LDQRIbQWs3ShGaOov1xX0yeqirx3ohDVH+nEPtS2WCGQLpde' +
                                '4zWx8a96fNfs3xg/iUOL2XsZAAAAAElFTkSuQmCC';

        var moshareButtonTemplate = _.template(
            '<a class="moshare-link" href="http://www.mogreet.com/moshare/it/?share=<%= share %>&message=<%=  message %>&channel=chrome-plugin-twitter">' +
            '<img class="moshare-icon" alt="moShare icon" src="data:image/png;base64,' + '<%= moshareBase64Png %>' + '" />' +
            '</a>'
        );

        var makeMoshareDiv = function(tweetURL, tweetText, parentEl) {
            return $(moshareButtonTemplate({
                share: tweetURL,
                message: tweetText,
                moshareBase64Png: $(parentEl).hasClass('simple-tweet') ? moshareBase64Png16 : moshareBase64Png19
            }));
        };

        var extractTextTweet = {    
            '.js-stream-tweet':   function(idx, el) {
                var text      = $('p.js-tweet-text', el);
                var permalink = $('a.js-permalink', el);
                return [text, permalink];
            }
        };

        var foreachVisibleScreenName = function(fn) {
            _.each(_.keys(extractTextTweet), function(selector) {
                $(selector).each(function(idx, el) {
                    fn(extractTextTweet[selector](idx, el), el);
                });
            });
        };

        var checkTweets = function() {
            foreachVisibleScreenName(function(el, parentEl) {
                if (0 === $('.moshare-link', parentEl).length) {
                    var tweetText = encodeURIComponent(el[0].text());
                    var tweetURL  = encodeURIComponent('https://twitter.com/' + el[1].attr('href'));
                    var moshareButton = makeMoshareDiv(tweetURL, tweetText, parentEl);     
                    moshareButton.click(function(e) {
                        window.open('http://www.mogreet.com/moshare/it/?share=' + tweetURL + '&message=' + tweetText + '&channel=chrome-plugin-twitter');
                        e.preventDefault();
                        e.stopPropagation();
                    });
                    $(el[0]).append(moshareButton);
                }
            });
        };
        
        var intervals = [250, 1000, 2500, 5000, 10000];
        var check = function() {
            _.each(intervals, function(interval) {
                _.delay(function() { checkTweets(); }, interval);
            });
        };

        $(window).scroll(_.debounce(function() {
            checkTweets();
        }, 1000));

        $('body').live('mouseup', check);
        $(check);
    }

    window.addEventListener("load", function(ev) {
        document.getElementById("appcontent").addEventListener(
            "DOMContentLoaded",
            function(ev) {
                var href = top.getBrowser().selectedBrowser.contentWindow.location.href;
                if (!(href == ev.target.documentURI) || !href.match(/^(https?:)?\/\/([a-z0-9\.-]*\.)?twitter\.com(#?$|\/.*)/i)) {
                    return;
                }

                var loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
                    .getService(Components.interfaces.mozIJSSubScriptLoader);
                loader.loadSubScript("chrome://moshare/content/jquery-1.7.2.min.js");
                loader.loadSubScript("chrome://moshare/content/underscore.js");
                var win = window.top.getBrowser().selectedBrowser.contentWindow;
                init_jQuery(win);
                motweet(win.$, win, _);
            }, false);
    }, false);
})(window);
