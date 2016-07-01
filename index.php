<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'/>
    <link href="css/style.css" rel="stylesheet">
</head>
<body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

<script src="js/socket.js"></script>

<div class="header">
    <h1>ChatSocket</h1>
    <h3>This is a simple chat using php + websockets</h3>
</div>
<div class="chat_wrapper">
    <div class="message_box" id="message_box"></div>
    <div class="panel">
        <input type="text" name="name" id="name" placeholder="Your Name" maxlength="10" style="width:20%"/>
        <input type="text" name="message" id="message" placeholder="Message" maxlength="80" style="width:60%"/>
        <button id="send-btn">Send</button>
    </div>
</div>

</body>
</html>
