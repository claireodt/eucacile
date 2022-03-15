<?php
if(isset($_POST['mailform']))
{
    if(!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])) {
        $header="MIME-Version : 1.0\r\n";
        $header.='From:"eucacile.fr"<contact@eucacile.fr>'."\n";
        $header.='Content-Type:text/html; charset="uft-8"'."\n";
        $header.='Content-Transfer-Encoding: 8bit';

        $message='
            <html lang="fr">
                <body>
                    <div>
                    <u>name :</u> '.$_POST['name'].'<br>
                    <u>email :</u> '.$_POST['email'].'<br>
                    <u>message :</u> '.nl2br($_POST['message']).'<br>
                    </div>
                </body>
            </html>
            ';

        mail("claireodt@gmail.com","New message | Let's Work together", $message, $header);
        $msg="your message has successfully been sent !";
    }
    else {
        $msg="please fill all the fields";
    }
    echo $msg;
    header("Location: " . $_SERVER["HTTP_REFERER"]);
}
