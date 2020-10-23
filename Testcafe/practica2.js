import { Selector } from 'testcafe';
import page from './pageModel';
import { expect } from 'chai';

fixture('Practica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');

//Hacer una sincronización en la página con mi elemento t
test('Probar dar clic en un enlace', async t => {
    await t
        .click(page.link2)

    const thingIsVisible = page.text21;
    
    expect(await thingIsVisible.innerText).to.have.string("A/B Test Control" || "A/B Test Variation 1");
/*
        //let actual;
        if(page.text21.innerText == "A/B Test Control" || page.text21.innerText == "A/B Test Variation 1" || page.text21.innerText == "A/B Test Variation" ){
            console.log("Pasa prueba")
            //actual= true;
            //.expect(page.text21.innerText == "A/B Test Control"|| "A/B Test Variation 1" ||"A/B Test Variation").ok();
            await t
            .expect('ok').ok();
        }else{
            console.log("No pasa")
            //actual=false;
            await t
            
            .expect(false).ok('this assertion will fail');
        }
*/
});