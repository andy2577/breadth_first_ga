let graph = {};

graph["you"] = ["alice", 'bob', 'claire'];
graph['bob'] = ['anuj', 'paggy'];
graph['alice'] = ['paggy'];
graph['claire'] = ['thom', 'jonny'];
graph['paggy'] = [];
graph['anuj'] = [];
graph['thom'] = [];
graph['jonny'] = [];

let search = (name) => {
    let queue = [];
    queue = queue.concat(graph[name]);
    let searched = []; //array of searched items
    while(queue.length != 0){
        let person = queue.shift();
        if(searched.indexOf(person) == -1){
            if(check(person)){
                // do something
                console.log(person, ' is mango seller');
                return 'true';
            } else {
                queue = queue.concat(graph[person]);
                searched.push(person);
            }
    // console.log(person);
        }
    }
    
    return "false";
};

let check = (name) => {
    return (name.split("").pop() == 'j'); // this sould be more meaningfull 
};

search('you');