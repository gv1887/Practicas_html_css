
function suma(){
   let Pnum = +document.getElementById("PrimerNum").value
   let Snum = +document.getElementById("SegundoNum").value
   let texto = document.getElementById("resultado")
   let resultado = Pnum + Snum

   texto.textContent = resultado
   
}
function resta(){
   let Pnum = +document.getElementById("PrimerNum").value
   let Snum = +document.getElementById("SegundoNum").value
   let texto = document.getElementById("resultado")
   let resultado = Pnum - Snum

   texto.textContent = resultado
   
}


function multi(){
   let Pnum = +document.getElementById("PrimerNum").value
   let Snum = +document.getElementById("SegundoNum").value
   let texto = document.getElementById("resultado")
   let resultado = Pnum * Snum

   texto.textContent = resultado
   
}
function divi(){
   let Pnum = +document.getElementById("PrimerNum").value
   let Snum = +document.getElementById("SegundoNum").value
   let texto = document.getElementById("resultado")
   let resultado = Pnum / Snum
   if(Pnum === 0 || Snum === 0){
      texto.textContent = "ERROR"
   }
   
   else{
      texto.textContent = resultado
      
   }
   
}
