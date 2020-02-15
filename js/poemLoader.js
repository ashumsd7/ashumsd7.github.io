var backBtn= document.getElementById("back");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three= document.getElementById("three");




backBtn.addEventListener("click",function(){

    splash.classList.add('display-none') ;

})

one.innerText = "बेहतर कल";
one.addEventListener("click", function () {
    one1();
})




two.innerText = " हम न बदले तो क्या हुआ..";
two.addEventListener("click", function () {
    two2();
})

three.innerText= "मै था ?"
three.addEventListener("click",function() {
    three3();
})














function one1() {
    behtarKal();
}


function two2() {
    humNaBadle();
}


function three3() {

    mainTha();

}
















// here we will load poem content and try to match which type of poem we want to render




function behtarKal() {

    let html = document.getElementById("poemContent");
    html.innerHTML = `
      <center>
    <h2>बेहतर कल</h2>
    <hr>
</center>
<center>
<table >
                    <tr>
                        <td>
                            जीवन का ये अजीब पड़ाव है
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            किसी से न मेरा उतना जुड़ाव है, कितना?
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            जितना बचपन में होता था
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            जब मैं कहीं यूँ ही खोता था
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            सुबह माँ के चेहरे से शुरुआत होती थी
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            रात में दादी की कहानी से मुलाकात होती थी
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            रात में वो किरदार सामने आते थे
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            सपनो की दुनिया में हम फिर खो जाते थे
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            पर आज की दुनिया तब से कितनी भिन्न है
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            हर परिवार में बेटा बाप से खिन्न है
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                            हवाओं में सुगंध की जगह भरा धुंआ है
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                            हर राही के एक ऒर खाई तो दूजी ऒर कुआं है
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                            हर इंसान जाये तो जाये कहाँ
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            अपना दुखड़ा किसी को सुनाये कहाँ
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                            सभी को तो कुछ न कुछ सुनानी है
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                            सबसे जुडी एक दुःख भरी कहानी है
                        </td>
                    </tr>
                
                
                
                </table>
                <hr>
<center>

                <hr>
</center>
  `;


}

function humNaBadle() {
    let html = document.getElementById("poemContent");
    html.innerHTML = `

    <center>
    <h2> हम न बदले तो क्या हुआ वो बदलते चले गए..</h2>
    <hr>
</center>
    <center>
    <table >
                    <tr>
                        <td>
                        अनजाने में हुई दोस्ती वो भी इतनी दूर से
                        </td>
                    </tr>
                

                    <tr>
                        <td>
                           हमने तो देखा प्यार से पर उन्होंने देखा घूरके
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        एक दिन ऐसा भी आया न हमने कुछ सुना
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        वो पास आये प्यार से फिर मुस्कुराते चलेगए
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        हम न बदले तो क्या हुआ वो बदलते चलेगए.......
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        वो तो थे घूमते उन प्यारी सी झीलों में
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        हम थे की रोते थे उन रेत के टीलों में
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        हमने तो सोचा था एक ऐसा दिन भी आएगा
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        झूमेगी ये धरती और आसमा ये गायेगा
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        हम तो उनकी याद में एक दीप सा जले गए
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                        हम न बदले तो क्या हुआ वो बदलते चलेगए.......
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                        अभी भी है इन्तजार उनका एक दिन वोआएगा
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                        इस नादान से छोटे से मन को प्यार सेजगाएगा
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        इतने साल बीत गए बस कुछ साल ही बाकीहै
                        </td>
                    </tr>
                
                
                    <tr>
                        <td>
                        एक दिन की न पूछो यारो पूरी रात मैंने जागीहै
                        </td>
                    </tr>
                
                    <tr>
                        <td>
                        आंसुओं की बारिशो में हम भीगते चले गए
                        </td>
                    </tr>


                    <tr>
                    <td>
                    हम न बदले तो क्या हुआ वो बदलते चलेगए.......
                    </td>
                </tr>
            
                <tr>
                    <td>
                    मैं तो करूँगा इन्तजार उनका जब तक हैजान मेरी
                    </td>
                </tr>



                <tr>
                <td>
                की आएगा वो दिन और वो रात घनेरी
                </td>
            </tr>
        
            <tr>
                <td>
                न आया तो लोग यही कहेंगे
                </td>
            </tr>


            <tr>
            <td>
            कुछ तो थे आश में कुछ हाथ मलते चले गए
            </td>
        </tr>
    
        <tr>
            <td>
            हम न बदले तो क्या हुआ वो बदलते चलेगए.......
            </td>
        </tr>

        <tr>
        <td>
        दोस्तों इन्तजार था जिसका वो दिन फिर आगया
        </td>
    </tr>
            


    <tr>
    <td>
    वो दिन उन दिनों की उम्मीदों को जगा गया
    </td>
</tr>
        

<tr>
<td>
अभी कुछ दिन पहले वो मेरे पास आये थे
</td>
</tr>
    


<tr>
<td>
मुस्कराहट वैसे ही थी जैसे मुस्कुराये थे
</td>
</tr>

<tr>
<td>
हम तो ऐसे जाग गए जैसे कभी सोये नही
</td>
</tr>
    


<tr>
<td>
आँखे ऐसे हो गयी जैसे कभी सोयीं नही
</td>
</tr>
    


<tr>
<td>
बस उनकी तरफ पूरा मेरा गौर था
</td>
</tr>
    


<tr>
<td>
आँखें फिर से रो पड़ी जब साथ कोई औरथा
</td>
</tr>
    

<tr>
<td>
मैंने पूछा क्या ये तुम्हारा प्यार है ?
</td>
</tr>


<tr>
<td>

उसने बोला कल तुम मेरे यार तरह आज येमेरा यार है
</td>
</tr>
    



<tr>
<td>

ऐसा सुनकर मैं तो पूरा डर गया
</td>
</tr>
    



<tr>
<td>
मन की न पूछो यारो पूरा शरीर मेरा मर गया
</td>
</tr>
    
   
                </table>
                </center>
    
    `;

}

function mainTha() {

    let html = document.getElementById("poemContent");
    html.innerHTML =`  <center>
     <h2>मै था ?</h2>
     <hr>
     </center>
    
     <center>
     <table >
     <tr>
         <td>
         एक कमरे में बैठा, कोई मुझे निहारता था
         </td>
     </tr>
 
     <tr>
         <td>
         जब भी मैं उसके सामने से जाता था
         </td>
     </tr>
 
     <tr>
         <td>
         मालूम नहीं था, ये मुझे निहारता क्यों है
         </td>
     </tr>
 
     <tr>
         <td>
         मैं जब भी घर आऊं ,तभी ये आता क्यों हैं
         </td>
     </tr>
 
     <tr>
         <td>
         जब जब मेरे अंदर आहट होती, उसकी मुझे और निहारने की चाहत होती
         </td>
     </tr>
 
     <tr>
         <td>
         अब तक कभी ऐसा न हुआ ,जो अब हो रहा था
         </td>
     </tr>
 
     <tr>
         <td>
         हर दिन मैं अपने अंदर हज़ारों सवाल लिए सो रहा था
         </td>
     </tr>
 
     <tr>
         <td>
         मैंने सोचा पूछ लूँ, की तुम कौन हो
         </td>
     </tr>
 
     <tr>
         <td>
         मेरे अंदर इतने सवाल ,और तुम मौन हो
         </td>
     </tr>
 
     <tr>
         <td>
         क्यों लगता है मुझे की, तुम मुझे पहचानते हो
         </td>
     </tr>
 
 
     <tr>
         <td>
         मुझसे ज्यादा तुम मुझको जानते हो
         </td>
     </tr>
 
 
     <tr>
         <td>
         इतना सोच के मैं चल पड़ा बस थोड़ी दूर मेरा घर पड़ा
         </td>
     </tr>
 
 
     <tr>
         <td>
         आशा ये थी की मुझे फिर वो देखेगा 
         </td>
     </tr>
 
     <tr>
         <td>
         मेरे बारे में वो शंका से सोचेगा
         </td>
     </tr>
 
 
     <tr>
         <td>
         आज वो पता नहीं किधर था
         </td>
     </tr>
 
     <tr>
         <td>
         कैसे ढूढूं उसे ,न पता उसका घर था
         </td>
     </tr>

     
     <tr>
         <td>
         अब पता नहीं ,मैं  जाऊं कहाँ
         </td>
     </tr>
 
     <tr>
         <td>
         अपने आप को ,उससे मिलाऊ कहाँ
         </td>
     </tr>
 
 
     <tr>
         <td>
         किसी को न देखा परेशां ,जितना मैं आज था
         </td>
     </tr>
 
     <tr>
         <td>
         आज कुछ ज्यादा ही बदला, मेरा अंदाज़ था
         </td>
     </tr>
 
     <tr>
         <td>
         मेरे अंदर उससे ,न मिल पाने का भय था
         </td>
     </tr>
 
     <tr>
         <td>
         आखिर क्यों मुझे लगता है ,शायद वो मै था 
         </td>
     </tr>
 
 
 
 
 </table>
     </center>`
    
}