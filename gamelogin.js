

//import * as storageJs from './storage.js';
function myFunction() {
    //window.location.href="home.html" 
    
    var params = { "appid": "103462861", "forceLogin": "1" }
     HwFastappObject.gameLogin(JSON.stringify(params));
     }
     HwFastappObject.onGameLoginResult = function onGameLoginResult(str) {
     //Mark
     success = 0;
    if(str.code === 0) {
       
       console.log("krishna login result game login success status code 0" );
       console.log("krishna login result str.gameUserData.displayName "+str.gameUserData.displayName);
       console.log("krishna login result str.gameUserData.gameAuthSign "+str.gameUserData.gameAuthSign);
       console.log("krishna login result str.gameUserData.isAuth "+str.gameUserData.isAuth);
       console.log("krishna login result str.gameUserData.playerId "+str.gameUserData.playerId);
       console.log("krishna login result str.gameUserData.playerLevel "+str.gameUserData.playerLevel);
       console.log("krishna login result str.gameUserData.ts "+str.gameUserData.ts);
// {"code":0,"data":"Login SUCCESS", "gameUserData":{"displayName":"xx","gameAuthSign":"xx","isAuth":1,"playerId":"xx","playerLevel":x,"ts":"xxx"}}
      
        // storageJs.saveLoginDetails(str.code,str.data,str.gameUserData.displayName,str.gameUserData.gameAuthSign,
       // str.gameUserData.isAuth,str.gameUserData.playerId,str.gameUserData.playerLevel,str.gameUserData.ts);

       document.location.href="https://htmlpreview.github.io/?https://github.com/Arkesh-Unity/QuickGameSampleTesting/blob/main/home.html"
      
    } else {
        console.log("krishna login result game login failed status code "+str.code );
    }
 
 }
 
 
