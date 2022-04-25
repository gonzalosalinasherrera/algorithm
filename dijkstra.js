function Dijkstra(matrix,start){
    var result = {}
    result[start] = [];
    result[start].dist = 0;
    while (true){
        var anterior = null;
        var cercano = null;
        var dist = Infinity;
        for (var n in result){
            if(!result[n]){
                continue
            }
            var nDist = result[n].dist;
            var adj = matrix[n]
            for (var a in adj){
                if(result[a]){
                    continue
                }
                var d = adj[a] + nDist
                if (d < dist){
                    anterior = result[n]
                    cercano = a
                    dist = d
                }
            }
        }
        if(dist === Infinity){
            break
        }
        result[cercano] = anterior.concat(cercano)
        result[cercano].dist = dist
    }
    return result
}
matrix = {}
var path = {
    'R': ['2'],
    '2': ['3','4'],
    '3': ['4','6','13'],
    '4': ['5','8','2'],
    '5': ['7','11'],
    '6': ['13','15','2'],
    '7': ['10'],
    '8': ['11','13'],
    '9': ['14'],
    '10': [],
    '11': ['12'],
    '12': [],
    '13': ['14'],
    '14': [],
    '15': ['10']
}
for(var conect in path){
    if(!matrix[conect]){
        matrix[conect] = {}
    }
    path[conect].forEach(function(newcon){
        matrix[conect][newcon] = 1
        if(!matrix[newcon]){
            matrix[newcon] = {}
        }
        matrix[newcon][conect] = 1
    })
}

var start = '10';

var solution = Dijkstra(matrix,start)
console.log('From:', start,' to:')
var path = [],tpath='';
var total = ''
for(const [key, value] of Object.entries(solution)){
    if ('R' === key){
        path = value
    }
}
total = path.dist
for (let i=0; i < path.length;i++){
    if (i === 0){
        tpath = path[i]
    }else {
        tpath = tpath + ' -> ' + path[i]
    }
}
console.log(tpath,' = ',total)

// for(var flag in solution){
//     if(!solution[flag]){
//         continue
//     }
//     console.log(" -> " + flag + ": [" + solution[flag].join(", ") + "]   (dist:" + solution[flag].dist + ")")
// }