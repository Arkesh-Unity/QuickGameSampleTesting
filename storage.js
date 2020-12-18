//const AUTH_TOKEN = "authToken";
const HIGHEST_SCORE = "highestScore";
//const USER_ID = "userID";
const TOTAL_COIN = "totalCoin";
const CODE = "code";
const DATA = "data";
const DISPLAY_NAME = "displayname";
const GAME_AUTH_SIGNIN = "gameauthsignin";
const IS_AUTH = "isauth";
const PLAYER_ID = "playerid";
const PLAYER_LEVEL = "playerlevel";
const TS = "ts";
export function saveLoginDetails(code,data,displayname, gameauthsignin, isauth,playerid , playerlevel,ts ){
    if(typeof(Storage) !== "undefined"){
       // localStorage.setItem(USER_ID, userID);
        //localStorage.setItem(AUTH_TOKEN, authToken);
        //localStorage.setItem(HIGHEST_SCORE, highestScore);
        localStorage.setItem(CODE, code);
        localStorage.setItem(DATA, data);
        localStorage.setItem(DISPLAY_NAME, displayname);
        localStorage.setItem(GAME_AUTH_SIGNIN, gameauthsignin);
        localStorage.setItem(IS_AUTH, isauth);
        localStorage.setItem(PLAYER_ID, playerid);
        localStorage.setItem(PLAYER_LEVEL, playerlevel);
        localStorage.setItem(TS, ts);
        console.log("Local storage supported!");
    }
    else{
        console.log("Local storage not supported!");
    }
    console.log("saveLoginDetails() called");
}

// {"gameUserData":{"displayName":"xx","gameAuthSign":"xx","isAuth":1,"playerId":"xx","playerLevel":x,"ts":"xxx"},"code":0,"data":"Login SUCCESS"}

export function removeLoginDetails(){
if(typeof(Storage) !== "undefined"){
        //localStorage.removeItem(USER_ID, userID);
        //localStorage.removeItem(AUTH_TOKEN, authToken);
        //localStorage.removeItem(HIGHEST_SCORE, highestScore);
        localStorage.removeItem(CODE, code);
        localStorage.removeItem(DATA, data);
        localStorage.removeItem(DISPLAY_NAME, displayname);
        localStorage.removeItem(GAME_AUTH_SIGNIN, gameauthsignin);
        localStorage.removeItem(IS_AUTH, isauth);
        localStorage.removeItem(PLAYER_ID, playerid);
        localStorage.removeItem(PLAYER_LEVEL, playerlevel);
        localStorage.removeItem(TS, ts);
        console.log("Local storage supported!");
    }
    else{
        console.log("Local storage not supported!");
    }
    console.log("removeLoginDetails() called");
}

export function getLoginDetails(){
    if(typeof(Storage) !== "undefined"){
        
            // localStorage.getItem(CODE);
            // localStorage.getItem(DATA);
            // localStorage.getItem(DISPLAY_NAME);
            // localStorage.getItem(GAME_AUTH_SIGNIN);
            // localStorage.getItem(IS_AUTH);
            // localStorage.getItem(PLAYER_ID);
            // localStorage.getItem(PLAYER_LEVEL);
            // localStorage.getItem(TS);
            console.log("Local storage supported!");
            console.log("getLoginDetails() :::   Code :"+ localStorage.getItem(CODE)+"  data :: "+ localStorage.getItem(DATA)
            +" DISPLAY_NAME :: "+localStorage.getItem(DISPLAY_NAME)+" GAME_AUTH_SIGNIN :: "+ localStorage.getItem(GAME_AUTH_SIGNIN)
            +" IS_AUTH ::"+localStorage.getItem(IS_AUTH)+" PLAYER_ID :: "+localStorage.getItem(PLAYER_ID)
            +" PLAYER_LEVEL :: "+localStorage.getItem(PLAYER_LEVEL)+"  TS  :: "+localStorage.getItem(TS));

        }
        else{
            console.log("Local storage not supported!");
        }
        console.log("getLoginDetails() called");
    }
    




export function modifyTotalCoin(coin){
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem(TOTAL_COIN,getTotalCoin()+coin);
        console.log("Local storage supported!");
    }
    else{
        console.log("Local storage not supported!");
    }
    
}

export function getTotalCoin(){
    if(typeof(Storage) !== "undefined"){
        return localStorage.getItem(TOTAL_COIN);
        console.log("Local storage supported!");
    }
    else{
        console.log("Local storage not supported!");
    }
}

export function modifyHighestScore(score){
    if(typeof(Storage) !== "undefined"){
        localStorage.setItem(HIGHEST_SCORE,score);;
        console.log("Local storage supported!");
    }
    else{
        console.log("Local storage not supported!");
    }
}

export function getHighestScore(){
    if(typeof(Storage) !== "undefined"){
        return  localStorage.getItem(HIGHEST_SCORE);
        console.log("Local storage supported!");
    }
    else{
        console.log("Local storage not supported!");
    }
}

