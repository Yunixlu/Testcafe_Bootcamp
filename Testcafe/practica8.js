import page from './pageModel.js';

const username = "tomsmith";
const password = "SuperSecretPassword!";

fixture ('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar ingresar al login', async t =>{
   await t
         .click(page.link8) 
});

test('Probar validación al no ingresar username', async t =>{
    await t
        .click(page.link8) 

    await t
        .click(page.btn83)
        .expect(page.alertText84.innerText).contains("Your username is invalid!")    
});

test('Probar validación al no ingresar password', async t =>{
    await t
        .click(page.link8) 

    await t
        .typeText(page.input81, username)

    await t
        .click(page.btn83)
        .expect(page.alertText84.innerText).contains("Your password is invalid!")    
});

test('Probar username incorrecto y contraseña correcta', async t =>{
    await t
        .click(page.link8) 
        await t
        .typeText(page.input81, 'test')
        .typeText(page.input82, password)

    await t
        .click(page.btn83)
        .expect(page.alertText84.innerText).contains("Your username is invalid!")    
});

test('Probar username correcto y contraseña incorrecta', async t =>{
    await t
        .click(page.link8) 
        await t
        .typeText(page.input81, username)
        .typeText(page.input82, 'test')

    await t
        .click(page.btn83)
        .expect(page.alertText84.innerText).contains("Your password is invalid!")    
});


test('Probar que usuario y contraseña coincidan con lo que se ingresa', async t =>{
    await t
        .click(page.link8)
    
    await t
    .typeText(page.input81, username)
    .expect(page.input81.value).contains(username)
    .typeText(page.input82, password)
    .expect(page.input82.value).contains(password)
});

test('Probar un login correcto', async t =>{
    await t 
        .click(page.link8)
    await t 
        .typeText(page.input81, username)
        .typeText(page.input82, password)
    await t
        .click(page.btn83)
        .expect(page.alertText84.innerText).contains('You logged into a secure area!')
        .expect(page.text85.innerText).contains('Secure Area')
        .expect(page.text86.innerText).contains('Welcome to the Secure Area. When you are done click logout below.')
});

test('Probar un logout correcto', async t =>{
    await t 
        .click(page.link8)
    await t 
        .typeText(page.input81, username)
        .typeText(page.input82, password)
    await t
        .click(page.btn83)
        .expect(page.alertText84.innerText).contains('You logged into a secure area!')
        .expect(page.text85.innerText).contains('Secure Area')
        .expect(page.text86.innerText).contains('Welcome to the Secure Area. When you are done click logout below.')

    await t
        .click(page.btn87)
        .expect(page.alertText84.innerText).contains('You logged out of the secure area!') 
});