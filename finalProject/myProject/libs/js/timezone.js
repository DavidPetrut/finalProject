$('#BUTTON1').click(function() {

    $.ajax({
        url: "libs/php/timezone.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            lng: $('#lng').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#firstName').html(result['data']['adminCode2']);
                $('#secondName').html(result['data']['city']);
                $('#thirName').html(result['data']['countryCode']);
                $('#fourthName').html(result['data']['name']);
                $('#fifthName').html(result['data']['countryName']);



            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 
});

