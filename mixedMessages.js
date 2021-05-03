const grid = {
    adj: ["hungry", "silly", "smart", "athletic"],
    verb: ["running", "jumping", "flying", "yelling"],
    noun: ["man", "bear", "pig", "penguin"]
};

function createMessage() {
    let randAdj = grid.adj[Math.floor(Math.random() * grid.adj.length)];
    let randVerb = grid.verb[Math.floor(Math.random() * grid.verb.length)];
    let randNoun = grid.noun[Math.floor(Math.random() * grid.noun.length)];

    let message = `${randAdj} ${randVerb} ${randNoun}`;

    return message;
}

console.log(createMessage());