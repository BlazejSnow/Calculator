function timer(){
let dataa= new Date();

document.getElementById("zegar").innerHTML=(dataa.getDate()<10 ?"0"+dataa.getDate():dataa.getDate()) 
+"/"+((dataa.getMonth()+1)<10?"0"+(dataa.getMonth()+1):(dataa.getMonth()+1))
+"/"+dataa.getFullYear()
+" "+(dataa.getHours()<10 ?"0"+dataa.getHours():dataa.getHours()) 
+":"+(dataa.getMinutes()<10 ?"0"+dataa.getMinutes():dataa.getMinutes()) 
+":"+(dataa.getSeconds()<10 ?"0"+dataa.getSeconds():dataa.getSeconds()) ;
setTimeout("timer()",1000);

}
const operations=['/','.','*','sqrt','-','+'];
function display(valuwe=0){
    
    
    if (valuwe == '.' &&  document.getElementById("display").value.includes('.') )
     {
    document.getElementById("display").value;
   }
   else{
   if (valuwe != '.' && document.getElementById("display").value=='0' || document.getElementById("display").value/1 != document.getElementById("display").value 
    ){
   document.getElementById("display").value=valuwe ; }
   else{   document.getElementById("display").value+=valuwe;} }
    
}
function negation(ope){
    if (ope == "sqrt"){
        if(+document.getElementById("display").value>=0){
       document.getElementById("display").value=Math.sqrt(+document.getElementById("display").value); return;
    }else{document.getElementById("display").value="Nieprawidłowe dane wejściowe"} }
    if (ope == '+\-'){
    document.getElementById("display").value= -1 * document.getElementById("display").value}
}
function memory(action){
    if (operations.includes(document.getElementById("display").value)){
        document.getElementById("display").value=action;
    sign=action;


    console.log(sign);
        return
    }
    else
    if (typeof result !== "undefined" &&  sign!=0 ){
        if(operations.includes(document.getElementById("display").value.slice(-1))){
            
            document.getElementById("display").value=document.getElementById("display").value.slice(0,-1)+action;
            sign=action

            return;
        }
        
        finalisation(sign);
        sign=action;
        console.log(sign); 
       

        document.getElementById("display").value+=action
        return
    }
    result=document.getElementById("display").value;
    console.log(result);
    
    document.getElementById("display").value=action;

    
    sign=action;
    console.log(sign); 
   
 
         
    
    

}
function clean(level){
    if (level=='CE'){document.getElementById("display").value=0}
    else {
        result=0
        sign=0
        document.getElementById("display").value=0
        console.log(result)
    }
}

function finalisation(){
    
    if(result/1==result && document.getElementById("display").value/1==document.getElementById("display").value) {
     
    switch (sign){
        case '+':
            
            document.getElementById("display").value=(+result + +document.getElementById("display").value) ;sign=0;result=document.getElementById("display").value ;console.log(result); break
            case '-':
                
                document.getElementById("display").value=(result - document.getElementById("display").value) ;sign=0;result=document.getElementById("display").value ;console.log(result); break
                case '*':
                           
            document.getElementById("display").value=(result * document.getElementById("display").value);sign=0;result=document.getElementById("display").value ;console.log(result); break
            case '/':
               if(document.getElementById("display").value==0){sign=0;document.getElementById("display").value="Dzielenie przez zero jest zabronione",result=0} 
               else{
            document.getElementById("display").value=(result/document.getElementById("display").value);sign=0;result=document.getElementById("display").value ;console.log(result); break
               }
    }}
    else{document.getElementById("display").value="nieprawidłowy typ danych na wejściu";sign=0;result=0;}
}
