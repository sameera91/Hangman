      function init() {
         
         var correct_guess = 0;
         var wrong_guess = 0; 
         
         function  replaceAt(word, index, character) {
           var newWord = word.substr(0,index) + character + word.substr(index+character.length);
           
           return newWord;
           
         }
         
         var words = ["dolphin", "cars", "airplane"];
         
         var correct_word = words[0];
         
         var starWord = correct_word;
         
         for(var i = 0; i < starWord.length; i++){
                   starWord = starWord.replace(/./gi, "*");

        }
        
        document.getElementById('result').innerHTML = starWord;
        
        //-------------------------Start of function-----------------------------------
        
         
         document.getElementById("submit").addEventListener('click', function() {
          
            
             var response = document.getElementById("word").value;

            
             var correct = 0; 
             var guess = 0;
               
  
               if(wrong_guess <= 10){
                  
                                        
                    guess++;
                   
                    
                    for(var j = 0; j < correct_word.length; j++){
                    
                     if (response == correct_word.charAt(j)){
                      
                         correct_guess++;
                         
                         starWord = replaceAt(starWord, j, response);
                       
                         correct++;
                         
                         document.getElementById('result').innerHTML = (response + " is in the word " + '<br><br>' + starWord);
                         
                         break;

                     }
                     
                    }
                    
                    if(response != correct_word.charAt(j)){
                     
                     wrong_guess++;
                     
                     document.getElementById('result').innerHTML = (response + " is not in the word. Try again. " + '<br><br>' + starWord);
                    }
            }
            
            if (starWord == correct_word) {
              document.getElementById('result').innerHTML = ("Congratulations! You have guessed the word. The correct word is " + correct_word + ".");
            }
            else if (starWord != correct_word && wrong_guess > 10){
             document.getElementById('result').innerHTML = ("Oh no, you ran out of guesses! The correct word is " + correct_word + ".");
            }
 
         });
         //-----------------------------------End of the  function------------------------------------ 
         
        
         
         }
         
         window.onload = init;
         