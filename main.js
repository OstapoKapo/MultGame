let player1Y = 50;
let player1X = 50;

let player2Y = 50;
let player2X = 50;
btn_top1.onclick = () => {
    player1Y--;
    player1.style.top = player1Y + '%';
    overflow()
    overflow2()
    checkWinner();
}

btn_bottom1.onclick = () => {
    player1Y++;
    player1.style.top = player1Y + '%';
    overflow()
    overflow2()
    checkWinner();
}

btn_left1.onclick = () => {
    player1X--;
    player1.style.left = player1X + '%';
    overflow()
    overflow2()
    checkWinner();
}
btn_right1.onclick = () => {
    player1X++;
    player1.style.left = player1X + '%';
    overflow()
    overflow2()
    checkWinner();
}
let overA;
let overB;
let over = false
function overflow(){
    if(player2Y === 104){
        if(over != true){
      
            player2.style.display = 'none'
            over = true
            if(over === true){
               setInterval(function(){
                  player2.style.display = 'flex'
                  over = false
              },300) }
              
          }
       player2.style.top = '5%'
       player2Y = 5

    }
     else if(player2X === 102){
        if(over != true){
      
            player2.style.display = 'none'
            over = true
            if(over === true){
             setInterval(function(){
                  player2.style.display = 'flex'
                  over = false
              },300) }
              
          }
        player2.style.left = '2%'
        player2X=2 
 
     }
    else if(player2X === -2){
        if(over != true){
      
      player2.style.display = 'none'
      over = true
      if(over === true){
         setInterval(function(){
            player2.style.display = 'flex'
            over = false
        },300) }
        
    }
    
    
        player2.style.left = '98%'
        player2X= 98
 
     }
   else if(player2Y === -4){
    if(over != true){
      
        player2.style.display = 'none'
        over = true
        if(over === true){
          setInterval(function(){
              player2.style.display = 'flex'
              over = false
          },300) }
          
      }
        player2.style.top = '95%'
        player2Y= 95
 
     }
}
function overflow2(){
    if(player1Y === 104){
        if(over != true){
      
            player1.style.display = 'none'
            over = true
            if(over === true){
               setInterval(function(){
                  player1.style.display = 'flex'
                  over = false
              },300) }
              
          }
       player1.style.top = '5%'
       player1Y = 5

    }
     else if(player1X === 102){
        if(over != true){
      
            player1.style.display = 'none'
            over = true
            if(over === true){
             setInterval(function(){
                  player1.style.display = 'flex'
                  over = false
              },300) }
              
          }
        player1.style.left = '2%'
        player1X=2 
 
     }
    else if(player1X === -2){
        if(over != true){
      
      player1.style.display = 'none'
      over = true
      if(over === true){
         setInterval(function(){
            player1.style.display = 'flex'
            over = false
        },300) }
        
    }
    
    
        player1.style.left = '98%'
        player1X= 98
 
     }
   else if(player1Y === -4){
    if(over != true){
      
        player1.style.display = 'none'
        over = true
        if(over === true){
          setInterval(function(){
              player1.style.display = 'flex'
              over = false
          },300) }
          
      }
        player1.style.top = '95%'
        player1Y= 95
 
     }
}


btn_top2.onclick = () => {
    player2Y--;
    player2.style.top = player2Y + '%';
    overflow()
    overflow2()
    checkWinner();
   
}

btn_bottom2.onclick = () => {
    player2Y++;
    player2.style.top = player2Y + '%';
    overflow()
    overflow2()
    checkWinner();
}

btn_left2.onclick = () => {
    player2X--;
    player2.style.left = player2X + '%';
    overflow()
    overflow2()
    checkWinner();
}
btn_right2.onclick = () => {
    player2X++;
    player2.style.left = player2X + '%';
    overflow()
    overflow2()
    checkWinner();
}


document.body.onkeyup = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        player1Y--;
        player1.style.top = player1Y + '%';
        checkWinner();
        overflow()
        overflow2()
    } else if (e.keyCode == 40) {
        player1Y++;
        player1.style.top = player1Y + '%';
        checkWinner();
        overflow()
        overflow2()
    } else if (e.keyCode == 37) {
        player1X--;
        player1.style.left = player1X + '%';
        checkWinner();
        overflow()
        overflow2()
    } else if (e.keyCode == 39) {
        player1X++;
        player1.style.left = player1X + '%';
        checkWinner();
        overflow()
        overflow2()
    } else if (e.keyCode == 87) {
        player2Y--;
        player2.style.top = player2Y + '%';
        checkWinner();
        overflow()
        overflow2()
    } else if (e.keyCode == 83) {
        player2Y++;
        player2.style.top = player2Y + '%';
        checkWinner();
        overflow()
        overflow2()
    } else if (e.keyCode == 65) {
        player2X--;
        player2.style.left = player2X + '%';
        checkWinner();
        overflow()
        overflow2()
    } else if (e.keyCode == 68) {
        player2X++;
        player2.style.left = player2X + '%';
        checkWinner();
        overflow()
        overflow2()
    }
}


let targetY;
let targetX;

function setTarget() {
    targetY = Math.floor(Math.random() * 75);
    targetX = Math.floor(Math.random() * 75);
    target.style.top = targetY + '%';
    target.style.left = targetX + '%';
}
setTarget();

let player1Score = 0
let player2Score = 0
function checkWinner() {
    if (player1X == targetX && player1Y == targetY) {
        player1Score++
        scoreContainerLeft.innerText = player1Score
        setTarget();
    } else if (player2X == targetX && player2Y == targetY) {
        player2Score++
        scoreContainerRight.innerText = player2Score
        setTarget();
    }
}
let r = false;
gamePadTrigger.onclick = function(){
    if(r == false){
    gamepad1.style.bottom = '20px'
    gamepad2.style.bottom = '20px'
    gamePadTrigger.style.backgroundColor = 'green'
    r = true
    }else if(r != false ){
        gamepad1.style.bottom = '-200px'
    gamepad2.style.bottom = '-200px'
    gamePadTrigger.style.backgroundColor = 'rgba(0,0,0,0.4)'
    r = false
    }
   
    
}
let f = 4
let x;

let s = 0;
let m = 1;
let b;
let g;
let inf = true
timeRound.innerText = m +':'+ s
    






lobyBtn.onclick = function(){
    
   
    if(player1Name.value != '' && player2Name.value != ''){
        lobyBtn.style.marginLeft = '-3000px'
        name1.innerText = player1Name.value
        name2.innerText = player2Name.value
    option.style.display = 'none'
    
    timer();
    wrap.style.display = 'flex'
        
    }
    else{
        alert('write your name')
    }

    
}
function timer() {
               
    x = setInterval(function() {
       
        f--;
        start.innerText = f
        if(f === 0){
            start.innerText = 'Start'
            clearInterval(f);
            ti()
           
           
        }
      
            
         
    }, 1000)
}
function time() {
    
    b = setInterval(function() {
      
        s--;
        timeRound.innerText = m +':'+ s
        if( s < 0){
            m--
            s = 60
            timeRound.innerText = m +':'+ s
            
        }
        if( s < 10){
            
            
            timeRound.innerText = m +':'+ '0'+s
            
        }


        if(m === 0 && s === 0 ){
           over.innerText = 'Game Over' 
           if(player2Score>player1Score  ){
               win.innerText = 'Player2 Won' 
           }else if(player2Score<player1Score  ){
            win.innerText = 'Player1 Won' }else if(player2Score === player1Score  ){
                win.innerText = 'surender' }
            target.style.opacity = '0'
                player1.style.opacity = '0'
                player2.style.opacity = '0'
                gamePadTrigger.style.display = 'none'

            clearInterval(b);
           
        }

        
      
            
         
    }, 1000)
}
function ti(){
  g =   setInterval(function(){
       
        target.style.opacity = '1'
        player1.style.opacity = '1'
        player2.style.opacity = '1'
        clearInterval(g);
        start.style.opacity = '0'
        time()
       
       
    },1000)
}
let a = false
option.onclick = function(){
    if(a == false){
        menu.style.display = 'flex'
        lobyBtn.style.transition = '0'
        lobyBtn.style.marginTop = '1000px'
        option.style.backgroundImage = 'url(cancel.png)'
        lobby.style.backdropFilter="grayscale(100%)"
        
        a = true
        }else if(a != false ){
            option.style.backgroundImage = 'url(settings.png)'
            menu.style.display = 'none'
            lobyBtn.style.marginTop = '100px'
        a = false
        }

}

map1.onclick = function(){
    lobby.style.backgroundImage = ' url(https://steamuserimages-a.akamaihd.net/ugc/909030545047250042/56311C903F3FB52D41F1B43773233C77896CD94E/?imw=1024&imh=482&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true)'

}
map2.onclick = function(){
    lobby.style.backgroundImage = 'url(https://i.pinimg.com/originals/46/ac/9e/46ac9e282d3c303934a72d941845785b.gif)'
}
map3.onclick = function(){
    lobby.style.backgroundImage = ' url(https://64.media.tumblr.com/2ce4a735f4dbb8f133fd81fbaabd0af8/tumblr_nespxwV7Ze1rnbw6mo2_r1_1280.gifv)'
}
map4.onclick = function(){
    lobby.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShW0gSrnmxIwTAvXw2vbQe1DoaBQcLe02MvQ&usqp=CAU)'
}
map5.onclick = function(){
    lobby.style.backgroundImage = 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/171345804/original/0c110c67e7b089dbcef2e313d71f42e782ccdd86/colourfull-pixel-game-backgrounds.png)'
}
left__skin1.onclick = function(){
    player1.style.backgroundImage= ' url(_R_m1ZIVfCWfA9KSfClF5g.png)'
}
left__skin2.onclick = function(){
    player1.style.backgroundImage= 'url(https://stickers.wiki/static/stickers/bspinsgeneral/file_433036.webp?ezimgfmt=rs:116x134/rscb1/ng:webp/ngcb1)'
    player1.style.height = '58px'
}
left__skin3.onclick = function(){
    player1.style.backgroundColor = 'black'
   
}

right__skin1.onclick = function(){
    player2.style.backgroundImage= 'url( https://preview.redd.it/s9y9mgvn3pm11.png?auto=webp&s=b9953922b3c7a15f6a399f2c7f5f905e67896fa7)'
}
right__skin2.onclick = function(){
    player2.style.backgroundImage= '  url(http://download.seaicons.com/icons/femfoyou/angry-birds/1024/angry-bird-black-icon.png)'
}
right__skin3.onclick = function(){
    player2.style.backgroundColor = 'yellow'
}


    

    
  















