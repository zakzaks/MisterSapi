$(document).ready(function () {
    $('#dataTables-petani').DataTable({
        responsive: true
    });

/*    //Add petani
    $('#btnAdd').click(function(){
        $('#myModal').modal('show');
        $('#myModal').find('.modal-title').text('Tambah Petani');
    });

    //Save petani
    $('#btnSave').click(function (e) { 
        e.preventDefault();
        var url = $('#formPetani').attr('action');
        var data = $('#formPetani').serialize();
        console.log(data)
        $.ajax({
            type: 'ajax',
            method: 'POST',
            url: url,
            data: data,
            async: false,
            dataType: 'json',
            success: function(response){
                if(response.success){
                    $('#myModal').modal('hide');
                    $('#formPetani')[0].reset();
                    $('.alert-success').html('Data Telah Berhasil Ditambah').fadeIn().delay(4000).fadeOut('slow');
                    tampilMhs();
                }else{
                    alert('Error');
                }
            },
            error: function(){
                alert('Error Bro.');
            }
        });
    });*/
});