import page from './pageModel';
fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar que aparecen correctamente el input y el botón', async t =>{
    await t
        .click(page.link3)
    
    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok()
});

test('Probar que podemos escribir un email', async t =>{
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@gmail.com')
        .expect(page.input31.value).eql('noemail@gmail.com')
});

test('Probar que envio el email correctamente', async t =>{
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'noemail@gmail.com')
        .expect(page.input31.value).eql('noemail@gmail.com')
        .click(page.button32)

    await t
        .expect(page.text33.innerText).contains('sent', 'Prueba exitosa')
});