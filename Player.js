class Player{

    constructor(){
    }
getCount(){
var playerCountref = database.ref('playerCount')
playerCountref.on("value" ,function(data){
    playerCount = data.val()
})
}

updateCount(count){

database.ref('/').updtate({
    playerCount : count
})
}

udpate(name){

    var playerIndex = "player" + playerCount
    database.ref(playerIndex).set({
name : name 
    })
    
}













}