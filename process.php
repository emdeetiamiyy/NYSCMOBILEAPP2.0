<?php
$adminemail = "mobileapp@nysc.gov.ng";

if ($_GET['send'] == 'comments')
{
						
	$_uname = $_POST['name'];
	$_uemail = $_POST['email'];

	$_title	=	$_POST['title'];
	$_comments	=	stripslashes($_POST['comment']);
						
	$email_check = '';
	$return_arr = array();

	if($_uname=="" || $_uemail=="" || $_comments=="")
	{
		$return_arr["frm_check"] = 'error';
		$return_arr["msg"] = "Please fill in all required fields!";
	} 
	else if(filter_var($_uemail, FILTER_VALIDATE_EMAIL)) 
	{
	
	$to = $adminemail;
	$from = $_uemail;
	$subject = "New Contact Us Message: " .$_uname;
	
	$message =  'Name: &nbsp;&nbsp;' . $_uname . '<br><br>' . $_uemail . '<br><br> title: &nbsp;&nbsp;' . $_title .  '<br><br> Comment:&nbsp;&nbsp;' . $_comments;	

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$headers .= "Content-Transfer-Encoding: 7bit\r\n";
	$headers .= "From: " . $from . "\r\n";

	@mail($to, $subject, $message, $headers);	
	
	echo "Your submission was delivered successfully ";
	
	} else {
   
   
	$return_arr["frm_check"] = 'error';
	$return_arr["msg"] = "Please enter a valid email address!";

}

echo json_encode($return_arr);
}

?>