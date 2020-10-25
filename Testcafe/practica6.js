import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar que se muestre el texto Add/Remove Elements', async t =>{
    await t
        .click(page.link6)
    await t
        .expect(page.text65.innerText).eql("Add/Remove Elements")
});

test('Probar agregar y quitar botones', async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)    
});

test('Probar que se muestre el botón Delete', async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)  
        .expect(page.removeBtn62.visible).ok()
        .wait(3000)
});


test('Probar que se puedan remover botones', async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)  
        .expect(page.removeBtn62.visible).ok()
        .wait(3000)
    await t
        .click(page.removeBtn62)
        .click(page.removeBtn63)
        .click(page.removeBtn64)
        .wait(3000)
        .expect(page.removeBtn64.visible).notOk()
        
});