import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Practica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');

//Hacer una sincronización en la página con mi elemento t
test('Probar dar clic en un enlace', async t => {
    console.log(page.text21.innerText)
    await t
        .click(page.link2)

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

    
        console.log(page.text21.innerText)

});