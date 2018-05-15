$(document).ready(function () {
    $("#formLogin").submit(function(e){
		e.preventDefault();
		$.ajax({
            url:$(this).attr("action"),
			type:$(this).attr("method"),
			data:$(this).serialize(),
            dataType: 'json',
			success:function(data){
				if(data[0].privileges=="Admin"){
                    window.location.href = "http://localhost:3000/sapi";
                }else if(data[0].privileges=="Petani"){
                    window.location.href = "http://localhost:3000/sapi";
                }else if(data[0].privileges=="Investor"){
                    window.location.href = "http://localhost:3000/sapi";
                }
			},
            error: function(){
				$('.alert-danger').html("<b>Error!</b> Data You've Entered is Wrong").fadeIn().delay(4000).fadeOut('slow');
            }
		});
	});
});