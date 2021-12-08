$(document).ready(function(){
LoadDetails(null);
	
    $('.form_date').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
})

function LoadDetails(e)
{
	var url = "https://api.nasa.gov/planetary/apod?api_key=XGAKshrcs1h6u80AvF0Yxnif50qjeV97VQ0QxUq9";
	if(e != null && e.value != "")
	{
		url += "&date="+e.value;
	}
	
	
	$.ajax({  
                    type: "GET",  
                    url: url,  
                    contentType: "application/json; charset=utf-8",  
                    dataType: "json",  
                    success: function (response) {  
					
						$('.card-img-top').attr('src',response.url);
						$('.card-title').html(response.title);
						$('.explanation').html(response.explanation);
						$('.copyright').html('&copy;'+response.copyright);
						$('.dateTaken').html('Taken on ' + response.date);
						$('.loader').hide();
                    },  
                    failure: function (response) {  
                        alert(response.responseText);  
                        alert("Failure");  
						
                    },  
                    error: function (response) {  
                        alert(response);  
                        alert("Error");  
						
                    }  
                });  
}