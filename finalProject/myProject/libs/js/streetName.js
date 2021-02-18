 $('#button').click(function() {

    $.ajax({
        url: "libs/php/streetName.php",
        type: 'POST',
        dataType: 'json',
        data: {
            q: $('#q').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#locality').html(result['data'][0]['locality']);
                $('#countryCodex').html(result['data'][0]['countryCode']);
                $('#adminName1').html(result['data'][0]['adminName1']);
                $('#adminCode1').html(result['data'][0]['adminCode1']);
                $('#street').html(result['data'][0]['street']);



            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 
});
