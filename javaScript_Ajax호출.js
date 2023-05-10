$.ajax({
    url : '/example/getAjaxData.do',
    global : false,
    type: 'POST',
    data : null,
    dataType : 'json',
    success: function(result) {
        if(result.data){
            $('#exampleItem').find('option').remove();
            $.each(result.data, function(idx, data){
                $('#exampleItem').append('<option value='+data.value+'>'+data.text+'</option>');
            });
        }
    }
});