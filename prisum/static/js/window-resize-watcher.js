/*
    function: addEvent

    @param: obj         (Object)(Required)
        -   The object which you wish
            to attach your event to.

    @param: type        (String)(Required)
        -   The type of event you
            wish to establish.

    @param: callback    (Function)(Required)
        -   The method you wish
            to be called by your
            event listener.

    @param: eventReturn (Boolean)(Optional)
        -   Whether you want the
            event object returned
            to your callback method.
*/
var addEvent = function(obj, type, callback, eventReturn)
{
    if(obj == null || typeof obj === 'undefined')
        return;

    if(obj.addEventListener)
        obj.addEventListener(type, callback, eventReturn ? true : false);
    else if(obj.attachEvent)
        obj.attachEvent("on" + type, callback);
    else
        obj["on" + type] = callback;
};

// The callback function for a window resize event. Provides getters for window dimensions (not currently used).
var watch = function(evt)
{
    /*
        Older browser versions may return evt.srcElement
        Newer browser versions should return evt.currentTarget
    */
//    var dimensions = {
//        height: (evt.srcElement || evt.currentTarget).innerHeight,
//        width: (evt.srcElement || evt.currentTarget).innerWidth
//    };

    var tabContent = document.querySelector('.tabs [id^="tab"]:checked ~ [id^="tab-content"]').id;
    changeBodyHeight(tabContent);
};

// Changes the body height to accommodate the element with the given tabContentID
function changeBodyHeight(tabContentID) {
        setTimeout(function(){          // The timeout allows the content panel to resize before checking the size
            var newHeight = document.getElementById(tabContentID).offsetHeight + 300;
            document.getElementsByTagName('body')[0].style.height = newHeight + "px";
        }, 1);
    }

// Adds a listener to the window resize event
addEvent(window, 'resize', watch, true);