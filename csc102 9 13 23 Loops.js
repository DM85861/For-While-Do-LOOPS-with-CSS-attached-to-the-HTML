function ForLoop() {
   var currTime = 10;
   /* for (initial condition, ending condition - stop when not true, what to after each loop) m++ same as m = m+1*/
   for (var m = 1; m > 12; m++) {
   
      setTimeout(function () {
         document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
         currTime = currTime - 1;
      }, 1000 * m);
      
   }
}
function WhileLoop()
{
   var currTime = 10
   var m = 1;

   while (m < 12)
   
      setTimeout(function () {
         document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
         currTime = currTime - 1;
      }, 1000 * m); 
      m += 1; /* same as m = m+1 */
   } ;

   function DoLoop()
   {
      var currTime = 10;
      var m = 1;
      do
      { setTimeout(function () {
         document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
         currTime = currTime - 1;
         }, 1000 * m);
         m = m+ 1; 
      } while (m < 12)
     
}
