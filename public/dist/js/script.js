$(document).ready(function() {
    $('#dataTables-sapi').DataTable({
        responsive: true
    });

    $('#selBerat').change(function(){
        var berat = $("#selBerat").val();
        console.log(berat);
        $.ajax({
            type: 'ajax',
            method: 'get',
            url: '/sapi',
            data: {berat: berat},
            async: false,
            dataType: 'json',
            success: function(data){
                console.log('Sukses');
            },
            error: function(){
                console.log('Sukses');
            }
        });
    });
});