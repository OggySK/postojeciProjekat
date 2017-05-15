$.ajax({
    url: 'http://ip.jsontest.com/',
    dataType: 'json',
    error: function () {
        console.log('Greška');
    },
    success: function (data) {
        console.log(data);
        //npr: Object {ip: "87.116.181.85"}
    }
    
    
});
