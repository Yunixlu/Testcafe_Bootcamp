import page from './pageModelE.js';

let rndNumber = Math.random().toString(36).substr(1,4);
const email = 'dummy' + rndNumber + '@mailinator.com'
const firstName = "Yunuen"
const lastName = "Pa"
const password = "88888"

fixture('Pruebas de módulo mi cuenta')
    .page('http://automationpractice.com');


    test('Crear una cuenta', async t => {

        await t
            .click(page.signIn_link)
            console.log("Correo", email)

        await t
            .typeText(page.email_input, email)
            .click(page.createAccount_btn)

        await t
            .expect(page.email_form.value).contains(email)
            .expect(page.email_form.hasAttribute('readonly')).notOk()

            .typeText(page.firstName_input, firstName)
            .typeText(page.lastName_input, lastName)

            .expect(page.firstName_Address.value).contains(firstName)
            .expect(page.lastName_Address.value).contains(lastName)

            .typeText(page.password_input, password)
            .typeText(page.address, "PO BOX 7867 ")


    });
    test('Loggearse con una cuenta nueva', async t =>{});
    test('Logout', async t =>{});
    test('Crear una cuenta con un correo ya existente', async t =>{});
    test('Validar recuperar el password con un correo valido', async t =>{});
    test('Validar recuperar el password con un correo no valido', async t =>{});
    test('Cambiar información de mi cuenta', async t =>{});
