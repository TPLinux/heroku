function showReg(){
    $('#reg-div').fadeIn();
}
function hideReg(){
    $('#reg-div').fadeOut();
}
function showLogin(){
    $('#login-div').fadeIn();
}
function hideLogin(){
    $('#login-div').fadeOut();
}


$('#reg-form').on('submit', function(e){
    e.preventDefault();
    data = $('#reg-form').serialize();
    $.ajax({
	method: 'POST',
	url: '/signup',
	data: data,
	success: function(data){
	    console.log(data);
	    if(data.status == true){
		hideReg();
		showLogin();
	    }else{
		alert(data.msg);
	    }
	}
	
    });
});


$('#login-form').on('submit', function(e){
    e.preventDefault();
    data = $('#login-form').serialize();
    $.ajax({
	method: 'POST',
	url: '/login',
	data: data,
	success: function(data){
	    console.log(data);
	    if(data.status == true){
		window.location.href = '/main';
	    }else{
		alert(data.msg);
	    }
	}
	
    });
});
