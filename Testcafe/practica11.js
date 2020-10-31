import page from './pageModel';


fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar manejar slider horizontal', async t =>{
    await t
        .click(page.link11)

    await t
        .click(page.slider11)
        .typeText(page.slider11,"3.5", {speed:0.1})
        .expect(page.slider11.value).eql('3.5')
});


test('Probar usar un slider horizontal con flechas', async t =>{
    await t
        .click(page.link11)
    await t
        .click(page.slider11)
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .wait(500)
        .expect(page.slider11.value).eql('1')

});
