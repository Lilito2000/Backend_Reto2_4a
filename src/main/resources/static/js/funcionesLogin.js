function validarUsuario(){

$.ajax({
    url: "http://localhost:80/api/user/" + email + "/" + password + "",//"http://localhost:8080/api/user/" + email + "/" + password + "",
    type: "GET",
    datatype: "JSON",
    success: function (item) {
        console.log(item);
        validarUsuario(item);
    }
});
}
function emailVerification(email) {
    let emailExits = false;
    $.ajax({
        url: "http://localhost:80/api/user/" + email + "",//"http://localhost:80/api/user/" + email + "",
        async: false,
        type: "GET",
        datatype: "JSON",
        //async: falsemailExitse,
        success: function (answer) {
            console.log(answer);
            emailExits= answer;
        }
    });
    return emailExits;
}
