$(document).ready(function () {
    //create a new WebSocket object.
    var wsUri = "ws://192.168.1.160:8080/chatsocket/server.php";
    var websocket = new WebSocket(wsUri);

    function rand(arg) {

        if ($.isArray(arg)) {
            return arg[rand(arg.length)];
        } else if (typeof arg === "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    }

    var items = ['007AFF', 'FF7000', 'FF7000', '15E25F', 'CFC700', 'CFC700', 'CF1100', 'CF00BE', 'F00'];
    var item = rand(items);

    websocket.onopen = function (ev) { // connection is open 
        $('#message_box').append("<div class=\"system_msg\">Connected!</div>"); //notify user
    };
    
    $('#message').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            $('#send-btn').click();
            return false;
        }
    });

    $('#send-btn').click(function () { //use clicks message send button	
        var mymessage = $('#message').val(); //get message text
        var myname = $('#name').val(); //get user name

        if (myname == "") { //empty name?
            alert("Enter your Name please!");
            return;
        }
        if (mymessage == "") { //emtpy message?
            alert("Enter Some message Please!");
            return;
        }

        //prepare json data
        var msg = {
            message: mymessage,
            name: myname,
            color: item
        };
        //convert and send data to server
        websocket.send(JSON.stringify(msg));
    });

    //#### Message received from server?
    websocket.onmessage = function (ev) {
        var msg = JSON.parse(ev.data); //PHP sends Json data
        var type = msg.type; //message type
        var umsg = msg.message; //message text
        var uname = msg.name; //user name
        var ucolor = msg.color; //color

        if (type == 'usermsg')
        {
            $('#message_box').append("<div><span class=\"user_name\" style=\"color:#" + ucolor + "\">" + uname + "</span> : <span class=\"user_message\">" + umsg + "</span></div>");
        }
        if (type == 'system')
        {
            $('#message_box').append("<div class=\"system_msg\">" + umsg + "</div>");
        }

        $('#message_box').scrollTop($('#message_box')[0].scrollHeight);

        $('#message').val(''); //reset text
    };

    websocket.onerror = function (ev) {
        $('#message_box').append("<div class=\"system_error\">Error Occurred - " + ev.data + "</div>");
    };
    websocket.onclose = function (ev) {
        $('#message_box').append("<div class=\"system_msg\">Connection Closed</div>");
    };
});