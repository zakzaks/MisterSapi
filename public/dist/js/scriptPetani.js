$(document).ready(function () {
    showPetani();
    dataTables();

    function dataTables() {  
        $('#dataTables-petani').DataTable({
            responsive: true
        });
    }
    
    //Add petani
    $('#btnAdd').click(function(){
        $('#myModal').modal('show');
        $('#myModal').find('.modal-title').text('Tambah Petani');
        $('#formPetani').attr('action','/petani/save');
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
            success: function(data){
                console.log(data);
                if(data='success'){
                    $('#myModal').modal('hide');
                    $('#formPetani')[0].reset();
                    $('.alert-success').html('Data Telah Berhasil Ditambah').fadeIn().delay(4000).fadeOut('slow');
                    showPetani();
                }else{
                    alert('Error');
                }
            },
            error: function(){
                alert('Error Bro.');
            }
        });
    });

    //Show petani
    function showPetani(){
        $.ajax({
            type: 'ajax',
            url: '/petani/showPetani',
            method: 'get',
            dataType: 'json',
            success: function(data){
                var html = '';
                var i;
                for(i=0; i<data.length; i++){
                html +=
                '<tr>'+
                    '<td>'+data[i].noKTP+'</td>'+
                    '<td>'+data[i].nama+'</td>'+
                    '<td>'+data[i].alamat+'</td>'+
                    '<td>'+data[i].daerah+'</td>'+
                    '<td>'+data[i].kontak+'</td>'+                                   
                    '</td>'+
                '</tr>';
                }
                $('#tblPetani').html(html);
            },
            error: function(){
                alert('Terjadi Kesalahan');
            }
        });
    }
});