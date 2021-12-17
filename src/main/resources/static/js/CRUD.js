var host = '';
var pagina = '';
var arg = '';
var body = '';
var datos = {};
var datosDel = '';
var idGlobal = "";
var items = {};

function CRUD(argument, pag, idTabla) {
    host = ''
    pagina = ''
    arg = ''
    body = ''
    datos = {};
    datosDel = ''
    idGlobal = "";
    items = null;
    validation = new Boolean();
    host = "http://129.151.124.186:80"
    pagina = host + pag
    arg = argument
    switch (arg) {
        case 'receiveData':
            switch (idTabla) {

                case 'contenidoClotheTable':
                    body = 'clotheBody';
                    break;

                case 'contenidoUserTable':
                    body = 'userBody';
                    break;

            }
            peticionGetAjax();
            $('#' + idTabla).show();
            break;

        case 'crearClothe':
            datos = {

                reference: valorAtributo('txtReferenceClothe'),
                category: { id: valorAtributo('txtCategoryClothe') },
                size: valorAtributo('txtSizeClothe'),
                description: valorAtributo('txtDescriptionClothe'),
                availability: valorAtributo('txtAvailabilityClothe'),
                price: valorAtributo('txtPriceClothe'),
                quantity: valorAtributo('txtQuantityClothe'),
                photography: valorAtributo('txtPhotographyClothe'),
            }
            datos = JSON.stringify(datos);
            peticionPostAjax();
            break;

        case 'modificarClothe':
            if (valorAtributo('txtModificarReferenceClothe').trim().length != 0) {
                peticionGetByIdAjax("/api/clothe/" + valorAtributo('txtModificarReferenceClothe'));
            } else {
                alert('Referencia a modificar es un campo obligatorio');

            }
            break;

        case 'eliminarClothe':
            if (valorAtributo('txtEliminarReferenceClothe').trim().length != 0) {
                peticionGetByIdAjax("/api/clothe/" + valorAtributo('txtEliminarReferenceClothe'));
            } else {
                alert('Id a eliminar es un campo obligatorio');

            }
            break;

        /* USUARIO */
        case 'crearUsuario':
            datos = {
                id: valorAtributo ('txtIdUser'),
                identification: valorAtributo ('txtIdentificationUser'),
                name: valorAtributo('txtNameUser'),
                address: valorAtributo('txtAddressUser'),
                cellphone: valorAtributo('txtCellPhoneUser'),
                email: valorAtributo('txtEmailUser'),
                password: valorAtributo('txtPasswordUser'),
                zone: valorAtributo('txtZoneUser'),
                type: valorAtributo('txtTypeUser'),
            }
            datos = JSON.stringify(datos);
            peticionPostAjax();
            break;

        case 'modificarUsuario':
            if (valorAtributo('txtModificarIdUser').trim().length != 0) {
                peticionGetByIdAjax("/api/user/" + valorAtributo('txtModificarIdUser'));

            } else {
                alert('Id a modificar es un campo obligatorio');

            }
            break;

        case 'eliminarUsuario':
            if (valorAtributo('txtEliminarIdUser').trim().length != 0) {
                peticionGetByIdAjax("/api/user/" + valorAtributo('txtEliminarIdUser'));
            } else {
                alert('Id a eliminar es un campo obligatorio');
            }
            break;

    }
}
function CRUDAnswer(arg) {
    switch (arg) {
        case 'receiveData':
            switch (body) {
                case 'clotheBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        //filas += "<td scope='row'>" + items[i].reference + "</td>";
                        filas += "<td>" + items[i].reference + "</td>";
                        filas += "<td>" + items[i].category.name + "</td>";
                        filas += "<td>" + items[i].size + "</td>";
                        filas += "<td>" + items[i].description + "</td>";
                        filas += "<td>" + items[i].availability + "</td>";
                        filas += "<td>" + items[i].price + "</td>";
                        filas += "<td>" + items[i].quantity + "</td>";
                        filas += "<td>" + items[i].photography + "</td>";
                        filas += "</tr>";
                    }
                    $('#' + body).append(filas);
                    
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

                case 'userBody':
                    $('#' + body).children().closest('tr').remove();
                    var filas = '';
                    for (i = 0; i < items.length; i++) {
                        filas += "<tr>";
                        filas += "<td>" + items[i].id + "</td>";
                        filas += "<td>" + items[i].identification + "</td>";
                        filas += "<td>" + items[i].name + "</td>";
                        filas += "<td>" + items[i].address + "</td>";
                        filas += "<td>" + items[i].cellphone + "</td>";
                        filas += "<td>" + items[i].email + "</td>";
                        filas += "<td>" + items[i].password + "</td>";
                        filas += "<td>" + items[i].zone + "</td>";
                        filas += "<td>" + items[i].type + "</td>";
                        filas += "</tr>";
                    }
                    $('#' + body).append(filas);
                    alert('REGISTROS TRAIDOS DE MANERA EXITOSA');
                    break;

               }
            break;

        case 'crearClothe':
            alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtReferenceClothe')
            limpiarAtributo('txtCategoryClothe');
            limpiarAtributo('txtSizeClothe');
            limpiarAtributo('txtDescriptionClothe');
            limpiarAtributo('txtAvailabilityClothe');
            limpiarAtributo('txtPriceClothe');
            limpiarAtributo('txtQuantityClothe');
            limpiarAtributo('txtPhotographyClothe');

            break;

        case 'modificarClothe':
            alert('SE MODIFICO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtModificarReferenceClothe');
            limpiarAtributo('txtModificarCategoryClothe');
            limpiarAtributo('txtModificarSizeClothe');
            limpiarAtributo('txtModificarDescriptionClothe');
            limpiarAtributo('txtModificarAvailabilityClothe');
            limpiarAtributo('txtModificarPriceClothe');
            limpiarAtributo('txtModificarQuantityClothe');
            limpiarAtributo('txtModificarPhotographyClothe');
            break;

        case 'eliminarClothe':
            alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtEliminarReferenceClothe');
            break;

        case 'crearUsuario':
            alert('SE COMPLETO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtIdUser');
            limpiarAtributo('txtIdentificationUser');
            limpiarAtributo('txtNameUser');
            limpiarAtributo('txtAddressUser');
            limpiarAtributo('txtCellPhoneUser');
            limpiarAtributo('txtEmailUser');
            limpiarAtributo('txtPasswordUser');
            limpiarAtributo('txtZoneUser');
            limpiarAtributo('txtTypeUser');
            break;

        case 'modificarUsuario':
            alert('SE MODIFICO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtModificarIdUser');
            limpiarAtributo('txtModificarIdentificationUser');
            limpiarAtributo('txtModificarNameUser');
            limpiarAtributo('txtModificarAddressUser');
            limpiarAtributo('txtModificarCellPhoneUser');
            limpiarAtributo('txtModificarEmailUser');
            limpiarAtributo('txtModificarPasswordUser');
            limpiarAtributo('txtModificarZoneUser');
            limpiarAtributo('txtModificarTypeUser');
            break;

        case 'eliminarUsuario':
            alert('SE ELIMINO DE MANERA EXITOSA EL REGISTRO');
            limpiarAtributo('txtEliminarIdUser');
            break;

     }
}

function validacion(validation) {

    if (validation == true) {
        switch (arg) {

            case 'modificarClothe':
                datos = {
                    reference: valorAtributo('txtModificarReferenceClothe'),
                    category:  valorAtributo('txtModificarCategoryClothe') ,
                    size: valorAtributo('txtModificarSizeClothe'),
                    description: valorAtributo('txtModificarDescriptionClothe'),
                    availability: valorAtributo('txtModificarAvailabilityClothe'),
                    price: valorAtributo('txtModificarPriceClothe'),
                    quantity: valorAtributo('txtModificarQuantityClothe'),
                    photography: valorAtributo('txtModificarPhotographyClothe'),

                }
                datos = JSON.stringify(datos);
                peticionPutAjax();

                break;

            case 'modificarUser':
                datos = {
                    id: valorAtributo ('txtModificarIdUser'),
                    identification: valorAtributo ('txtModificarIdentificationUser'),
                    name: valorAtributo('txtModificarNameUser'),
                    address: valorAtributo('txtModificarAddressUser'),
                    cellphone: valorAtributo('txtModificarCellPhoneUser'),
                    email: valorAtributo('txtModificarEmailUser'),
                    password: valorAtributo('txtModificarPasswordUser'),
                    zone: valorAtributo('txtModificarZoneUser'),
                    type: valorAtributo('txtModificarTypeUser')
                }
                datos = JSON.stringify(datos);
                peticionPutAjax();

                break;

            case 'eliminarUser':
                datosDel = valorAtributo('txtEliminarIdUser');
                peticionDeleteAjax();
                break;

            case 'eliminarClothe':
                datosDel = valorAtributo('txtEliminarReferenceClothe');
                peticionDeleteAjax();
                break;

        }
    } else {

        alert('Id a modificar no se encuentra en base de datos');

    }
}
