canvas=new fabric.Canvas('myCanvas');
ball_x = 0;
ball_y = 0;
hole_x = 900;
hole_y = 600;
ball_object="";
hole_object="";

ball_image();
hole_image();

function ball_image (){
    fabric.Image.fromURL("ball.png",function(img){
        ball_object = img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top:ball_y,
            left: ball_x
        });
        canvas.add(ball_object);
    });
}

function hole_image (){
    fabric.Image.fromURL("golf.png",function(img){
        hole_object = img;
        hole_object.scaleToWidth(100);
        hole_object.scaleToHeight(100);
        hole_object.set({
            top:hole_y,
            left: hole_x
        });
        canvas.add(hole_object);
    });

}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);
    if (keypress=='38'){
        key_up();
        console.log("up arrow key has been pressed")
    }
    if (keypress=='40'){
        key_down();
        console.log("down arrow key has been pressed")
        
    }
    if (keypress=='37'){
        key_left();
        console.log("left arrow key has been pressed")
        
    }
    if (keypress=='39'){
        key_right();
        console.log("right arrow key has been pressed")
    
    }
}

function key_up(){
    if (ball_y>=0){
        ball_y = ball_y - 10;
        console.log("the x and y value are " + ball_x + "," + ball_y);
        canvas.remove(ball_object);
        ball_image();
        check_goal();
    }
}

function key_down(){
    if(ball_y<600){
        ball_y = ball_y + 10;
        console.log("the x and y value are " + ball_x + "," + ball_y);
        canvas.remove(ball_object);
        ball_image();
        check_goal();
    }
}


function key_left(){
    if(ball_x>=0){
        ball_x = ball_x - 10;
        console.log("the x and y value are " + ball_x + "," + ball_y);
        canvas.remove(ball_object);
        ball_image();
        check_goal();
    }
}

function key_right(){
    if(ball_x<900){
        ball_x = ball_x + 10;
        console.log("the x and y value are " + ball_x + "," + ball_y);
        canvas.remove(ball_object);
        ball_image();
        check_goal();
    }
}

function check_goal(){
    if((ball_x == hole_x) && (ball_y == hole_y)){
        document.getElementById("goal").innerHTML = "You have Hit the Goal";
        document.getElementById("myCanvas").style.borderColor="red";
        ball_x = ball_x + 30;
        ball_y = ball_y + 30;
        ball_image();
    }
   
}

