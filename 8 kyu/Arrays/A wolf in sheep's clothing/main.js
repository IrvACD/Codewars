//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

//Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

//If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

//Note: there will always be exactly one wolf in the array.

//Examples
//Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
//Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

//Input: ["sheep", "sheep", "wolf"]
//Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
    queue = queue.reverse()

    if(queue[0] === "wolf"){
        console.log("Pls go away and stop eating my sheep")
    }

    for(let i = 0; i <= queue.length; i++){
        if(queue)
    }
}

warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])