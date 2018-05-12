$(document).ready(function() {
    $('#dataTables-sapi').DataTable({
        responsive: true
    });

    $('#selBerat').change(function(){
        var berat = $("#selBerat").val();
        console.log(berat);
        $.ajax({
            type: 'ajax',
            method: 'POST',
            url: '/sapi/'+berat,
            async: false,
            dataType: 'json',
            success: function(data){
                var html = '';
                var i;
                for(i=0; i<data.length; i++){
                    html +='<tr>'+
                                '<td>'+data[i].idSapi+'</td>'+
                                '<td>'+data[i].noKTP+'</td>'+
                                '<td>'+data[i].jenis+'</td>'+
                                '<td>'+data[i].daerah+'</td>'+
                                '<td>'+data[i].umur+'</td>'+
                                '<td>'+moment(data[i].tgl_awal).format('DD/MM/YYYY')+'</td>'+
                                '<td>'+data[i].berat_awal+'</td>'+
                                '<td>'+data[i].berat_saat_ini+'</td>'+
                                '<td>'+data[i].berat_satu_bulan+'</td>'+
                                '<td>'+data[i].berat_tiga_bulan.toFixed(1)+'</td>'+
                            '</tr>';
                }
                $('#tblSapi').html(html);
            },
            error: function(){
                console.log('Error');
            }
        });
    });

    $('#tblSapi').on('click', '.petani', function(){
        var noKTP = $(this).attr('data');
        $('#myModal').modal('show');
        $('#myModal').find('.modal-title').text('Detail Petani');
        $.ajax({
            type: 'ajax',
            method: 'get',
            url: '/EditMhs',
            data: {nim: nim},
            async: false,
            dataType: 'json',
            success: function(data){
                $('input[name=txtNIM]').val(data.nim);
                $('input[name=txtNama]').val(data.nama);
                $('input[name=txtTglLahir]').val(data.tgl_lahir);
                $('input[name=txtAlamat]').val(data.alamat);
            },
            error: function(){
                alert('Tidak dapate mengubah Data.');
            }
        });
    });
});