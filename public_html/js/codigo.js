$(document).ready(function ()
{
    var te = 0;
    var xr1=0, xr2=2 , xr=0, xr4=0;
    var xt1=0, xt2=0, xt3=0, xt4=0;

    $("#frm1").submit(function (evt)
    {
        evt.preventDefault();
        te++;
        if ($("#p11").is(":checked"))
           
        if ($("#p12").is(":checked"))
            $("#r2").val(parseInt($("#r2").val()) + 1);
        if ($("#p13").is(":checked"))
            $("#r3").val(parseInt($("#r3").val()) + 1);
        if ($("#p14").is(":checked"))
            $("#r4").val(parseInt($("#r4").val()) + 1);

        if ($("#p21").is(":checked"))
            $("#t1").val(parseInt($("#t1").val()) + 1);
        if ($("#p22").is(":checked"))
            $("#t2").val(parseInt($("#t2").val()) + 1);
        if ($("#p23").is(":checked"))
            $("#t3").val(parseInt($("#t3").val()) + 1);
        if ($("#p24").is(":checked"))
            $("#t4").val(parseInt($("#t4").val()) + 1);

    });

});
