import page from './pageModel';

fixture('Test con testcafe')
    .page('https://formy-project.herokuapp.com/form')

test('Probando primer formulario', async t =>{
    await t
        .typeText(page.input71, "Juan", {speed:0.1})
        .expect(page.input71.value).eql("Juan")
        .typeText(page.input72, "Perez")
        .expect(page.input72.value).eql("Perez")
        .typeText(page.input73, "Software Enginer in test")
        .expect(page.input73.value).eql("Software Enginer in test")
        .click(page.rbtn74)
        .expect(page.rbtn74.checked).ok()
        .click(page.rbtn75)
        .expect(page.rbtn75.checked).ok()
        .click(page.rbtn76)
        .expect(page.rbtn76.checked).ok()
        .click(page.checkbox77)
        .expect(page.checkbox77.checked).ok()
        .click(page.checkbox78)
        .expect(page.checkbox78.checked).ok()
        .click(page.checkbox79)
        .expect(page.checkbox79.checked).ok()
        .click(page.smenu701)
        .click(page.opt702)
        .typeText(page.date703,"102220")
        .click(page.btn704)

        await t
        .expect(page.text705.visible).ok()
});