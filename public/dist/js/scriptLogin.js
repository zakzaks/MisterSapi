$(document).ready(function () {
    $("#formLogin").submit(function(event){
		event.preventDefault();
		$.ajax({
            url:$(this).attr("action"),
			type:$(this).attr("method"),
			data:$(this).serialize(),
            dataType: 'json',
			success:function(response){
				if(response.privileges==null){
					$('.alert-danger').html("<b>Error!</b> Data You've Entered is Wrong").fadeIn().delay(4000).fadeOut('slow');
				}else if(response.privileges=="Admin"){
                    window.location.href = "http://localhost:3000/sapi";
                }
			}
		});
	});
});