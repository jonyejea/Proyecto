$(document).ready(function() {
		$("#enviar").click(function(){
        var parametros = new Array();
            parametros["nombre"]=$("#nombre").val();
            parametros["correo"]=$("#correo").val();
            parametros["asunto"]=$("#asunto").val();
            parametros["mensaje"]=$("#mensaje").val();
            
        $.ajax({
                data:  $("#formulario").serialize(),
                url:   'php/enviarcorreo.php',
                type:  'post',
                beforeSend: function () {
                        $("#resultado").html("Enviando...");
                },
                success:  function (response) {
                        $("#resultado").html(response);
                }
        });
	});
    $("#reset").click(function(){
        alert("entre");
        
	});
});