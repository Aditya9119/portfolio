// var h1="hello";
// console.log(h1);

// var h2="ctrl+f5";
// console.log(h2);


// <p id="demo">Hello</p>
// <button type="button" onclick="document.getEelementById.innerHTML='Hello! Great to see you here.'" >Click Me!</button>


const robot={
    microprocessor : 8086,
    sector:"Agriculture",
    activation:function(){
        document.getElementById("display").innerHTML="Robot activated"+"<br>"+this.microprocessor+"<br>"+this.sector;   
    }
}
setTimeout(robot.activation,5000)