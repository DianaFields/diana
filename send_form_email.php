<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From:Fields'; 
    $to = 'di.disegno@gmail.com'; 
    $subject = 'Alguien ha visto mi website!';
    $human = $_POST['human'];
            
    $body = "De: $name\n E-Mail: $email\n Message: $message";
                
    if ($_POST['submit']) {                 
        if (mail ($to, $subject, $body, $from)) { 
        echo '<div style="text-align:center;"><img style="    max-width: 500px;
    margin-top: 5em;"src="img/answer.png"><a href="index.html" style="    width: 150px;
    height: 44px;
    border-radius: 21px;
    border: solid 1px #3c12ff;
    background: none; display:block;margin:0 auto; margin-top:3em; text-align:center;line-height: 44px;
    text-decoration: none;
    font-family: sans-serif;
    border-radius: 21px;
    color: #3c12ff;
    font-weight: 800;">GO BACK</a></div>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    } 
    } 
?>