import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Ingresar a la página de inputs', async t =>{
    await t
        .click(page.link5)
});

test('Probar que no se puedan escribir letras', async t =>{
    await t
        .click(page.link5)
    await t
        .typeText(page.input51,"letras", {speed: 0.1})
        .expect(page.input51.value).eql("")
});

test('Probar que se puedan ingresar números', async t =>{
    await t
        .click(page.link5)
    await t
        .typeText(page.input51, "123456789", {speed: 0.1})
        .expect(page.input51.value).notEql("5487")
        .expect(page.input51.value).eql("123456789")
});

test('Probar reemplazar los números por caracteres especiales y números', async t =>{
    await t
        .click(page.link5)
    await t
        .typeText(page.input51,"666", {replace:true})
        .typeText(page.input51,"%&%&&$&%%(8/%·&%$", {replace:true})
    console.log(page.input51.value)
    await t
        .expect(page.input51.value).eql("8")
});
