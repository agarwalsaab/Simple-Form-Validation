function validform1(){
	var name = document.forms['form1']['n1'].value;
	if(name==""){
		alert('Enter a valid name');
		return false;
	}
}

function validform2(){
	var name = document.forms['form2']['n2'].value;
	if(name==""){
		alert('Enter a valid name');
		return false;
	}
}