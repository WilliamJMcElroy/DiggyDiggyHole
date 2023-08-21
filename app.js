// globals
let gold = 0
let time = 3
let timeDown = 1
let sumTotal = 0


// arrays
let purchaseMiners = {
    miner: {
        price: 10,
        quantity: 0,
        multiplier: 1,
    }
    ,
    octominer: {
        price: 100,
        quantity: 0,
        multiplier: 8,
    }
};

let purchaseAutos = {
    cart: {
        price: 600,
        quantity: 0,
        multiplier: 20,
    }
    ,
    OctominerTeamLeader: {
        price: 3000,
        quantity: 0,
        multiplier: 80,
    }
};
function mine() {
    minerMult()
    octoMult()
    gold++
    update()
}

function clickEarth() {
    if (purchaseMiners.miner.quantity > 0 && purchaseMiners.octominer.quantity > 0) {
        let sumTotal = ((purchaseMiners.miner.quantity * purchaseMiners.miner.multiplier) + (purchaseMiners.octominer.quantity * purchaseMiners.octominer.multiplier) + 1)
        document.getElementById('clickValue').innerText = `${sumTotal}`
    } else if (purchaseMiners.octominer.quantity > 0) {
        let sumTotal = (purchaseMiners.octominer.quantity * purchaseMiners.octominer.multiplier) + 1
        document.getElementById('clickValue').innerText = `${sumTotal}`
    }
    else if (purchaseMiners.miner.quantity > 0) {
        let sumTotal = ((purchaseMiners.miner.quantity * purchaseMiners.miner.multiplier) + 1)
        document.getElementById('clickValue').innerText = `${sumTotal}`
    } else {
        let sumTotal = 1
        document.getElementById('clickValue').innerText = `${sumTotal}`
    }
}


function update() {
    document.getElementById('gold').innerText = `${gold}`
}

function buyMiner() {
    let miner = purchaseMiners.miner
    if (gold >= miner.price) {
        miner.quantity++
        gold = gold - miner.price
        miner.price += 15
    }
    document.getElementById("minerPrice").innerHTML = `${miner.price}`
    document.getElementById("minerCount").innerHTML = `${miner.quantity}`
    console.log("miner purchased", miner)
    update()
}

function buyOcto() {
    let octo = purchaseMiners.octominer
    if (gold >= octo.price) {
        octo.quantity++
        gold = gold - octo.price
        octo.price += 45
    }
    document.getElementById("octoPrice").innerHTML = `${octo.price}`
    document.getElementById("octoMinerCount").innerHTML = `${octo.quantity}`
    console.log("octo purchased", octo)
    update()
}

function minerMult() {
    if (purchaseMiners.miner.quantity > 0) {
        let newMinerMult = purchaseMiners.miner.quantity * purchaseMiners.miner.multiplier
        gold = gold + newMinerMult
        update()
    }
}

function octoMult() {
    if (purchaseMiners.octominer.quantity > 0) {
        let newOctoMult = purchaseMiners.octominer.quantity * purchaseMiners.octominer.multiplier
        gold = gold + newOctoMult
        update()
    }
}

function buyCart() {
    let cart = purchaseAutos.cart
    if (gold >= cart.price) {
        cart.quantity++
        gold = gold - cart.price
        cart.price += 300
    }
    document.getElementById("cartPrice").innerHTML = `${cart.price}`
    document.getElementById("cartCount").innerHTML = `${cart.quantity}`
    console.log("cart purchased", cart)
    update()
}

function buyOctoTeam() {
    let team = purchaseAutos.OctominerTeamLeader
    if (gold >= team.price) {
        team.quantity++
        gold = gold - team.price
        team.price += 1500
    }
    document.getElementById("octoTeamPrice").innerHTML = `${team.price}`
    document.getElementById("teamCount").innerHTML = `${team.quantity}`
    console.log("lead purchased", team)
    update()
}

function collectAutos() {
    let totalCarts = purchaseAutos.cart.quantity * purchaseAutos.cart.multiplier
    let totalLeads = purchaseAutos.OctominerTeamLeader.quantity * purchaseAutos.OctominerTeamLeader.multiplier
    gold += totalCarts + totalLeads
    if (totalCarts > 1 && totalLeads > 1) {
        document.getElementById('autoValue').innerText = `${totalCarts + totalLeads}`
    } else if (totalCarts > 0) {
        document.getElementById('autoValue').innerText = `${totalCarts}`
    } else if (totalLeads > 0) {
        document.getElementById('autoValue').innerText = `${totalLeads}`
    }
    update()
}

function timer() {
    time = time - timeDown
    if (time <= 0) {
        time = 3
        document.getElementById("timer-seconds").innerText = `${time}`
    }
    document.getElementById("timer-seconds").innerText = `${time}`
}


function startInterval() {
    setInterval(collectAutos, 3000);
}

function startTimer() {
    setInterval(timer, 1000)
}

// Function calls
startInterval()
startTimer()