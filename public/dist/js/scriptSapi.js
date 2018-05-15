$(document).ready(function() {
    showSapi();
    $('#dataTables-sapi').DataTable({
        responsive: true
    });

    $('#checkBerat').change(function (e) { 
        e.preventDefault();
        if (($('#checkBerat').prop('checked'))){
                var berat = $("#selBerat").val();
                $.ajax({
                    type: 'ajax',
                    method: 'POST',
                    url: '/sapi/beratSeratus/'+berat,
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
                                        '<td>'+data[i].berat_saat_ini.toFixed(1)+'</td>'+
                                        '<td>'+data[i].berat_satu_bulan.toFixed(1)+'</td>'+
                                        '<td>'+data[i].berat_tiga_bulan.toFixed(1)+'</td>'+
                                        '<td>'+data[i].status+'</td>'+
                                        '<td>'+data[i].keterangan+'</td>'+
                                    '</tr>';
                        }
                        $('#tblSapi').html(html);
                    },
                    error: function(){
                        console.log('Error');
                    }
                });
        }else{
            showSapi();
        }
    });

    $('#selBerat').change(function(){
        var berat = $("#selBerat").val();
        console.log(berat);
        $.ajax({
            type: 'ajax',
            method: 'POST',
            url: '/sapi/berat/'+berat,
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
                                '<td>'+data[i].berat_saat_ini.toFixed(1)+'</td>'+
                                '<td>'+data[i].berat_satu_bulan.toFixed(1)+'</td>'+
                                '<td>'+data[i].berat_tiga_bulan.toFixed(1)+'</td>'+
                                '<td>'+data[i].status+'</td>'+
                                '<td>'+data[i].keterangan+'</td>'+
                            '</tr>';
                }
                $('#tblSapi').html(html);
            },
            error: function(){
                console.log('Error');
            }
        });
    });

    $('#tblSapi').on('click', '.showPetani', function(){
        var noKTP = $(this).attr('data');
        $('#myModal').modal('show');
        $('#myModal').find('.modal-title').text('Detail Petani');
        $.ajax({
            type: 'ajax',
            method: 'get',
            url: '/sapi/getPetani/'+noKTP,
            async: false,
            dataType: 'json',
            success: function(data){
                for(i=0; i<data.length; i++){
                    $('#noKTP').val(data[i].noKTP);
                    $('#nama').val(data[i].nama);
                    $('#alamat').val(data[i].alamat);
                    $('#daerah').val(data[i].daerah);
                    $('#kontak').val(data[i].kontak);                    
                }
            },
            error: function(){
                console.log('Error Bro');
            }
        });
    });

    //Show petani
    function showSapi(){
        $.ajax({
            type: 'ajax',
            url: '/sapi/showSapi',
            method: 'get',
            dataType: 'json',
            success: function(data){
                var html = '';
                var i;
                for(i=0; i<data.length; i++){
                html +=
                '<tr>'+
                    '<td> <a href="javascript:;" class="showPetani" data="'+ data[i].noKTP +'">'+data[i].idSapi+'</a></td>'+
                    '<td>'+data[i].noKTP+'</td>'+ 
                    '<td>'+data[i].jenis+'</td>'+
                    '<td>'+data[i].daerah+'</td>'+
                    '<td>'+data[i].umur+'</td>'+
                    '<td>'+moment(data[i].tgl_awal).format('DD/MM/YYYY')+'</td>'+
                    '<td>'+data[i].berat_awal+'</td>'+
                    '<td>'+data[i].berat_saat_ini+'</td>'+
                    '<td>'+data[i].berat_satu_bulan+'</td>'+
                    '<td>'+data[i].berat_tiga_bulan+'</td>'+ 
                    '<td>'+data[i].status+'</td>'+
                    '<td>'+data[i].keterangan+'</td>'+                                    
                    '</td>'+
                '</tr>';
                }
                $('#tblSapi').html(html);
            },
            error: function(){
                alert('Terjadi Kesalahan');
            }
        });
    }
});