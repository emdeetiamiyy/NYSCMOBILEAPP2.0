function sendDistress()
{
	
	var loc = document.forms["distress"]["location"].value;
	var scode = document.forms["distress"]["stateCode"].value;
	var number = document.forms["distress"]["phoneNumber"].value;
	var type = document.forms["distress"]["messageType"].value;
		
	var sc= scode.substring(0,2);	
	var cc = sc.toUpperCase();
		
    var bc = scode.substring(5,6);
	var batch = bc.toUpperCase();
	
    if ( loc=="" || loc==null || scode=="" || scode==null || number=="" || number==null || type=="" || type==null) {
      alert("All fields with * must be filled!" );
	  return false;
    }
	else{
 //Validate state code and state selected
 if(    (loc=="Abia" && cc=="AB") || (loc=="Adamawa" && cc=="AD") || 
		(loc=="Akwaibom" && cc=="AK") || (loc=="Anambra" && cc=="AN") ||
		(loc=="Bauchi" && cc=="BA") || (loc=="Bayelsa" && cc=="BY") ||
		(loc=="Benue" && cc=="BN") || (loc=="Borno" && cc=="BO") ||
		(loc=="Crossriver" && cc=="CR") || (loc=="Delta" && cc=="DT") ||
		(loc=="Ebonyi" && cc=="EB") || (loc=="Edo" && cc=="ED") ||
		(loc=="Ekiti" && cc=="EK") || (loc=="Enugu" && cc=="EN") ||
		(loc=="Abuja" && cc=="FC") || (loc=="Gombe" && cc=="GM") ||
		(loc=="Imo" && cc=="IM") || (loc=="Jigawa" && cc=="JG") ||
		(loc=="Kaduna" && cc=="KD") || (loc=="Kano" && cc=="KN") ||
		(loc=="Katsina" && cc=="KT") || (loc=="Kebbi" && cc=="KB") ||
		(loc=="Kogi" && cc=="KG") || (loc=="Kwara" && cc=="KW") ||
		(loc=="Lagos" && cc=="LA") || (loc=="Nasarawa" && cc=="NS") ||
		(loc=="Niger" && cc=="NG") || (loc=="Ogun" && cc=="OG") ||
		(loc=="Ondo" && cc=="OD") || (loc=="Osun" && cc=="OS") ||
		(loc=="Oyo" && cc=="OY") || (loc=="Plateau" && cc=="PL") ||
		(loc=="Rivers" && cc=="RV") || (loc=="Sokoto" && cc=="SO") ||
		(loc=="Taraba" && cc=="TR") || (loc=="Yobe" && cc=="YB") ||
		(loc=="Zamfara" && cc=="ZM") 	)
		{
 //Validate Batch of Service
 if(batch=="A" || batch=="B" || batch=="C"  )
 {
 
 //major CODE THAT SENDS DISTRESS
var next = prompt("Are you sure you want to SEND this DISTRESS message? Type YES to proceed");
	if(next=="YES" || next=="Yes"  || next=="yes" )
	{
	
    var xmlHttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {

 //  alert(xmlhttp.responseText);
      if(xmlhttp.responseText == 1)
    {
          vala = document.getElementById('app'); // = 'message sent';
        // vala.display = 'none'; 
    alert('Your message has been delivered sucessfully');
	var content = document.getElementById('form');
    content.innerHTML = "Your message has been delivered and you will be contacted as soon as possible."; 
    }

      else if(xmlhttp.responseText == 2)
    {
          vala = document.getElementById('app'); // = 'message sent';
        // vala.display = 'none'; 
    alert('Your message was not sent');
  var content = document.getElementById('form');
    content.innerHTML = "Your message was not delivered, please get the new Version of the App to connect with NYSC."; 
    }

      else
          {
         alert('Your message was not delivered ');
         // return "not exist";
          }
      
    }
  }
  //alert('working');
var  stateCode = document.getElementById('stateCode').value;
 //alert(stateCode);
var phoneNumber = document.getElementById('phoneNumber').value;
var comment = document.getElementById('comment').value;
var location = document.getElementById('location').value;
var messageType = document.getElementById('messageType').value;

xmlhttp.open("GET","http://www.admin.nyscmobile.org/login/getDistress.php?stateCode="+stateCode+"&phoneNumber="+phoneNumber+"&message="+comment+"&location="+location
    +"&messageType="+messageType, true);
//alert(stateCode);
//alert('okk');
xmlhttp.send();
	}
	}
	else{
	alert("Invalid Service Batch\nPlease check and retry");
	return false;
		}//End of invalid batch
	{
	return false;	
	}//end of submit YES confirmation
	}
	else
	{
	var retry = "Your selected STATE and state-CODE NUMBER do not match!\nPlease check and retry";
	alert(retry);
	return false;
	}
	
		}// checks all * fields ends here
}
    
