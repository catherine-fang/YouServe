<?php
if($_POST["message"]) {
    mail("isabellegrimesey@gmail.com", "Review Post Request", $_POST["name_attribute_of_input"], "From: an@email.address");
}
?>
