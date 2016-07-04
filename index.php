<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'/>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/ribbons.css" rel="stylesheet" type="text/css" />
    <!--[if lt IE 9]>
    <link href="css/ribbons.ie.css" rel="stylesheet" type="text/css" />
    <![endif]-->

</head>
<body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>

<script src="js/socket.js"></script>
<div><a class="github-fork-ribbon right-top" href="https://github.com/teocci/ChatSocket" title="Fork me on GitHub">Fork me on GitHub</a></div>

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
<div class="footer">
    <p>
        <a href="https://raw.githubusercontent.com/teocci/ChatSocket/master/LICENSE">MIT License</a>
        Copyright &copy; 2016
        <a target="_blank" href="mailto:teocci@daum.net">Jorge Frisancho (teocci)</a>
        <a target="_blank" href="https://github.com/teocci">Github</a>
    </p>
</div>
</body>
</html>
