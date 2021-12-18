// bài tập 1
function showInter() {
    // vòng lặp while
    var num1 = 0
    
    var soChan1 = "";
    var soLe1 = "";
    while(num1 < 100) {
       if(num1 % 2 == 0) {
           soChan1 += " "  + num1 
       }
       else {
        soLe1 += " " + num1 

       }
      num1++

    }
    document.getElementById("show__inter").innerHTML = "Vòng lặp while" + "<br>" + "Số chẵn là: " + soChan1 + "<br>" + "Số lẻ là: " + soLe1 
    document.getElementById("show__inter").style.display = "block"
    
    // vòng lặp for
    var soChan2 = "";
    var soLe2 = "";
    for(var i = 0; i <100; i++) {
        if(i % 2 == 0) {
            soChan2 += " "  + i 
        }
        else {
            soLe2 += " " + i 
 
        }
    }
    document.getElementById("show__inter2").innerHTML = "Vòng lặp for" + "<br>" + "Số chẵn là: " + soChan1 + "<br>" + "Số lẻ là: " + soLe1 
    document.getElementById("show__inter2").style.display = "block"
}
// bài tập 2

function showNumber() {
    // vòng lặp while

    var count = 0;
    var total2 = 0;
    while(count < 1000) {
        if(count % 3 == 0) {
            total2 += 1
        }
        count++;
    }
    document.getElementById("show__Number").innerHTML = "Vòng lặp while" + "<br>" + "Số chia hết cho 3 nhỏ hơn 1000 là: " + total2  + " số"
    document.getElementById("show__Number").style.display = "block"

    // vòng lặp for
    var total3 = 0
    for(var i = 0; i < 1000; i++) {
        if(i % 3 == 0) {
            total3 += 1
        }
    }
    document.getElementById("show__Number2").innerHTML = "Vòng lặp for" + "<br>" + "Số chia hết cho 3 nhỏ hơn 1000 là: " +  total3 + " số"
    document.getElementById("show__Number2").style.display = "block"
}

// Bài tập 3

function showNumberBig() {
    var total = 0;
    var num = 1;
    while( total < 10000) {
      
        num++;
        total += num 
      
    }
    document.getElementById("show__big").innerHTML = "Số nguyên dương nhỏ nhất là: " + num
    document.getElementById("show__big").style.display = "block"
    
}

//Bài tập 4
function showNumber4() {
    var valueX = document.getElementById("inputEx1").value;
    var valueN = document.getElementById("inputEx2").value;

    var total = 0;
    var lt = 1;
    
    for( var n = 1; n <= valueN; n++)
    {
        lt = lt * valueX
        total += lt;
    }
    document.getElementById("show__total4").innerHTML = "Tổng: " + total
    document.getElementById("show__total4").style.display = "block"
}

// Bài tập 5
function showNumber5() {
    var n = document.getElementById("inputEx3").value;

    var gt = 1;
    var lt = 1;
    for(var i = 1; i <= n; i++) {
        lt = i *1
        gt *= lt
    }
    document.getElementById("show__total5").innerHTML = "Giai thừa: " + gt
    document.getElementById("show__total5").style.display = "block"
}
// Bài tập 6
function showNumber6() {
  
    var countChan = '<div style="background: #DC3545; width: 50%; margin:auto; color:#fff;">Div chẵn</div>';
    var countLe = '<div style="background: #0D6EFD;width: 50%;margin:auto; color:#fff;">Div lẻ</div>';
    var content="";
    var n = 1;
    while(n <= 10) {
      if (n % 2 != 0) {
          content = content  + countLe
           document.getElementById("show__color").innerHTML = content   
           document.getElementById("show__color").style.display = "block"
        
        
        
    }
    else  {
        
        content = content  + countChan  
        document.getElementById("show__color").innerHTML = content
        document.getElementById("show__color").style.display = "block"     
    }
    n++;
    }

    
}


// Bài tập 7
function showNumber7() {
    var num = document.getElementById("inputEx4").value;
    num = parseInt(num)
    var content = "";
    for (var i = 1; i <= num; i++) {
        if (testSNT(i)) {
            content += " " + i ;
        }
      
     }
        
        document.getElementById("show__total7").innerHTML = content 
        document.getElementById("show__total7").style.display = "block"
}

    function testSNT(n) {
          var isNgto = true;

          if (n < 2) {
              isNgto = false;
          }
          else if (n == 2) {
              isNgto = true;
          }
          else if (n % 2 == 0) {
              isNgto = false;
          }
          else {
              for (var i = 3; i <= Math.sqrt(n); i += 2)
              {
                  if (n % i == 0) {
                      isNgto = false;
                      break;
                  }
              }
          }
          
          return isNgto;
    
}   