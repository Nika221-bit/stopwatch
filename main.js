const display = document.getElementById("display")
let Timer = null;
let StartTime = 0;
let ElapsedTime = 0;
let IsRunning = false;

function start(){
    if(!IsRunning ){
         StartTime = Date.now() - ElapsedTime;
         Timer = setInterval(update, 10);
         IsRunning = true;
         
     }
    

}

function stop(){
    if(IsRunning){
        clearInterval(Timer);
        ElapsedTime = Date.now - StartTime;
        IsRunning = false;
    }

}
function reset(){
 
    clearInterval(Timer);    
    StartTime = 0;
    ElapsedTime = 0;
    IsRunning = false;
    display.textContent = "00:00:00:00"

}
function update(){
   const CurrentTime = Date.now();
   ElapsedTime = CurrentTime - StartTime;

   let Hours = Math.floor(ElapsedTime / (1000 * 60 * 60));
   let Minutes = Math.floor(ElapsedTime / (1000 * 60 )) %  60;
   let Seconds = Math.floor(ElapsedTime / 1000 % 60 );
   let MilliSeconds = Math.floor(ElapsedTime % 1000 / 10 );
   
    Hours = String(Hours).padStart(2,"0");
    Minutes = String(Minutes).padStart(2,"0");
    Seconds = String(Seconds).padStart(2,"0");
    MilliSeconds = String(MilliSeconds).padStart(2,"0");

   display.textContent = `${Hours}:${Minutes}:${Seconds}:${MilliSeconds}`;
   
}
