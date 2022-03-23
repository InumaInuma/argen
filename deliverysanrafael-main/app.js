const nodemailer = require('nodemailer');
const accountTransport = require("./account_transport.json");

const mail_rover = nodemailer.createTransport(accountTransport);

const authorization1
    //clave del servidor firebase
    = 'key=AAAA-WM9Wfk:APA91bEXw6nU3RVQNK5ukBojV-UXyFN2Sn-fslhk9Vn43ShDyXtVyxFS8mTjldKMyw1376ZcT0cfVRJnJFyYvxTfdZi3cYqUY5HIHqPowiNEgYzgXcNSslc-WrCs4XViRwih6jlOqfH2';

module.exports = {
    auth, dir, send, restringirApp, code_PMZ, key_PMZ, nombre, isExplorer
};

function nombre(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            return 'Curiosity';
        default:
            return 'Planck';
    }
};

function isExplorer(idCliente) {
    var id = 0;
    try {
        var id = parseInt(idCliente);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_EXPLORER_APP_1:
            return true;
        default:
            return false;
    }
};

function restringirApp(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case -1:
            return 1; //Restringimos las solicitudes desde el APP ID a las motos con configuraciones en cliente_settings
        default:
            return 0;
    }
};

function code_PMZ(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            if (_ENVIRONMENT_ === 'developing') {
                return '';
            } else {
                return '';
            }
        default:
            return '';
    }
};

function key_PMZ(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            if (_ENVIRONMENT_ === 'developing') {
                return '';
            } else {
                return '';
            }
        default:
            return '';
    }
};

function auth(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse aut app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            return authorization1;
        default:
            return authorization1;
    }
};

//Directorios de storage
function dir(idaplicativo) {
    var id = 0;
    try {
        var id = parseInt(idaplicativo);
    } catch (error) {
        console.log(`error parse dir app.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            return 'cr';
        default:
            return 'df';
    }
};

//Envia un mail
function send(idAplicativo, calback) {
    var id = 0;
    try {
        var id = parseInt(idAplicativo);
    } catch (error) {
        console.log(`error parse idAplicativo feedback.js ${error}`)
    }
    switch (id) {
        case _ID_APP_1:
            json = {
                url: _SERVER + 'curiosity/', mail: mail_rover, app: 'MOTO TAXI', from: 'Moto Taxi <almatic2003@gmail.com>',
                to: 'Moto Taxi <almatic2003@gmail.com>',
                slogan: '😋 Seguridad, Confianza y Rapides. 🛵 Pide YA! 👇🏻',
                body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'Con el APP MOTO TAXI, te transportamos seguro, pronto tambien podras comprar en tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
                bcc: 'Info <almatic2003@gmail.com>', head: head, footer: footer
            };
            return calback(json);
        default:
            json = {
                url: _SERVER + 'curiosity/', mail: mail_rover, app: 'MOTO TAXI', from: 'Moto Taxi <almatic2003@gmail.com>',
                to: 'Moto Taxi <almatic2003@gmail.com>',
                slogan: '😋 Seguridad, Confianza y Rapides 🛵 Pide YA! 👇🏻',
                body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'Con el APP MOTO TAXI, te transportamos seguro, pronto tambien podras comprar en tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
                bcc: 'Info <almatic2003@gmail.com>', head: head, footer: footer
            };
            return calback(json);
    }
}

var head =
    '<!DOCTYPE html>' +
    '<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">' +
    '<head>' +
    '<meta charset="utf-8"> ' +
    '<meta name="viewport" content="width=device-width"> ' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge"> ' +
    '<meta name="x-apple-disable-message-reformatting"> ' +
    '<title>Curiosity</title> ' +
    '</head>';

var footer =
    '<table align="center" style="text-align: center;">' +
    '<tr>' +
    '<td>' +
    '<img src="' + _SERVER + 'curiosity/' + 'facebook.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '<td width="10">&nbsp;</td>' +
    '<td>' +
    '<img src="' + _SERVER + 'curiosity/' + 'twitter.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '<td width="10">&nbsp;</td>' +
    '<td>' +
    '<img src="' + _SERVER + 'curiosity/' + 'google.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '<td width="10">&nbsp;</td>' +
    '<td>' +
    '<img src="' + _SERVER + 'curiosity/' + 'linkedin.png" width="" height="" style="margin:0; padding:0; border:none; display:block;" border="0" alt="">' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr> ' +
    '<tr>' +
    '<td bgcolor="#ffffff">' +
    '<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">' +
    '<tr>' +
    '<td style="padding: 40px 40px 10px 40px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center; font-weight:normal;">' +
    '<p style="margin: 0;">'

    + 'MOTO TAXI</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 0px 40px 10px 40px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center; font-weight:normal;">' +
    '<p style="margin: 0;">'

    + 'Si usted recibió este correo por error por favor comuniquese con: almatic2003@gmail.com</p>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td style="padding: 0px 40px 40px 40px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #666666; text-align: center; font-weight:normal;">' +
    '<p style="margin: 0;">'

    + 'Copyright &copy; 2019-2022 <b>ALMATIC</b>, Todos los derechos reservados.</p>' +
    '</td>' +
    '</tr>' +
    '</table>' +
    '</td>' +
    '</tr> ' +
    '</table>' +
    '</div>' +
    '</center>' +
    '</body>' +
    '</html>';