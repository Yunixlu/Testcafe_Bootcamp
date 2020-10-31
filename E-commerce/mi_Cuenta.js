import page from './pageModelE.js';
import { data } from './data';

fixture('Pruebas de módulo mi cuenta')
    .page('http://automationpractice.com');


    test('Crear una cuenta', async t => {

        await t
            .click(page.signIn_link)
            console.log("Correo: ", data.email)
            console.log("Firstname: ", data.firstName)
            console.log("lastname: ", data.lastName)

        await t
            .typeText(page.email_input, data.email)
            .click(page.createAccount_btn)
            //.takeScreenshot()

        await t
            .expect(page.email_form.value).contains(data.email)
            .expect(page.email_form.hasAttribute('readonly')).notOk()

            .typeText(page.firstName_input, data.firstName)
            //.takeElementScreenshot(page.firstName_input)
            .typeText(page.lastName_input, data.lastName)

            .expect(page.firstName_Address.value).contains(data.firstName)
            .expect(page.lastName_Address.value).contains(data.lastName)

            .typeText(page.password_input, data.password)

            .typeText(page.address, data.address)
            .expect(page.address.value).contains(data.address)

            .typeText(page.city, data.city)
            .expect(page.city.value).contains(data.city)


    });
    test('Loggearse con una cuenta nueva', async t =>{});
    test('Logout', async t =>{});
    test('Crear una cuenta con un correo ya existente', async t =>{});
    test('Validar recuperar el password con un correo valido', async t =>{});
    test('Validar recuperar el password con un correo no valido', async t =>{});
    test('Cambiar información de mi cuenta', async t =>{});
