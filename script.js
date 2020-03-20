var i;
var j;

var e=5;

open=1;

function gg(x) {

    var xx = document.getElementById("item-" + x);

    var content = xx.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      document.getElementById("flip-card" + x).style.transform = "rotateY(0deg)";
      
    } else {
        for(j=1; j<e+1; j++) {
            var y = document.getElementById("item-" + j);
            if (y.nextElementSibling.style.maxHeight){ 
              var a = document.getElementById("flip-card" + j);
              a.style.transform = "rotateY(0deg)";
              y.nextElementSibling.style.maxHeight = null; 
            }
          }  
      content.style.maxHeight = content.scrollHeight + "px";
      document.getElementById("flip-card" + x).style.transform = "rotateY(180deg)";
      
     
      
    }
  }


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function addRecipe() {
    var title = document.getElementById("title").value;
    var directions = document.getElementById("directions").value;
    
    if (title == "" || directions == "") {
      document.getElementById("notFilled").innerHTML = "Uzupełnij";
    } else {
      if (document.getElementById("url1").value == "") {
        document.getElementById("url1").value = "noImage.jpg";
      }
      if (document.getElementById("url2").value == "") {
        document.getElementById("url2").value = "noImage.jpg";
      }

      var x = e+1;
      createRecipe(x);
      closeForm();
      
    }
  }
  
  function createRecipe(x) {
    var title = document.getElementById("title").value;
    var url1 = document.getElementById("url1").value;
    var url2 = document.getElementById("url2").value;
    var directions = document.getElementById("directions").value;

    var menu = document.getElementById("grid2");

  
    var newItem = document.createElement("div");
    newItem.className =  "item";
    newItem.setAttribute("id","rec"+x);
    menu.appendChild(newItem);

    var gallery = document.createElement("div");
    gallery.className = "collapsible";
    e++;
    gallery.setAttribute("id","item-"+x);
    newItem.appendChild(gallery);

    var flipbox = document.createElement("div");
    flipbox.className = "flip-box";
    gallery.appendChild(flipbox);

    var flipboxinner = document.createElement("div");
    flipboxinner.className="flip-box-inner";
    flipboxinner.setAttribute("id","flip-card"+x);
    flipbox.appendChild(flipboxinner);

    var flipboxfront = document.createElement("div");
    flipboxfront.className="flip-box-front";
    flipboxinner.appendChild(flipboxfront);

    var image1 = document.createElement("img");
    image1.setAttribute("src",url1);
    image1.setAttribute("id","imgf"+x);
    image1.onclick = function(){gg(x);}
    flipboxfront.appendChild(image1);
        
    var flipboxback = document.createElement("div");
    flipboxback.className="flip-box-back";
    flipboxinner.appendChild(flipboxback);
  
    var image2 = document.createElement("img");
    image2.setAttribute("src",url2);
    image2.setAttribute("id","imgb"+x);
    image2.onclick = function(){gg(x);}
    flipboxback.appendChild(image2);

    var h1 = document.createElement("h1");
    h1.innerHTML=title;
    gallery.appendChild(h1);

    var content = document.createElement("div");
    content.className = "content";
    newItem.appendChild(content);

    var p = document.createElement("p");
    p.innerHTML = directions;
    content.appendChild(p);

    var del = document.createElement("img");
    del.setAttribute("src","del.png");
    del.setAttribute("id","delicon");
    del.onclick = function() { document.getElementById("rec"+x).style.display="none";}
    content.appendChild(del);
  }
