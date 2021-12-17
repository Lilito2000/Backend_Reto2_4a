
function valorAtributo(id) {
    var tipo = id.substring(0, 3);
    if (tipo == 'txt') {
        return $('#' + id).val();
    }
}
function limpiarAtributo(id){
    $("#" + id).val('');
}
function mostrarDiv(id1, id2) {
    $('[name="formulario"]').hide();
    if (id2 == undefined){
        $('div [name="formulario"]').hide();
        $('#'+id1).show();
    }else{
        $('div [name="formulario"]').hide();
        $('#'+id1).show();
        $('#'+id2).show();
    }

}
