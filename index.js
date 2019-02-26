function bfs(rootNode, vertices, edges){
  rootNode.distance = 0
  let chewy = [rootNode]
  let whoa = [rootNode]

  while (chewy.length != 0) {
    let firstNode = chewy.shift()

    let adjacentverts = findAdjacent(firstNode.name, vertices, edges)

    adjacentverts.forEach(vertex => {
      whoa.push(vertex)
      markDistanceAndPredecessor(vertex, adjacentverts)
      chewy.push(vertex)

    })
  }

  return whoa
}

function findAdjacent(node, verts, eds){
  let adjacent = []

eds.forEach(x => {
  if (x[0] === node) {
    verts.forEach(y => {
      if (y.name === x[1] && y.distance === null) {
        adjacent.push(y)
      }
    })
  } else if (x[1] === node) {
    verts.forEach(y => {
      if (y.name === x[0] && y.distance === null) {
        adjacent.push(y)
      }
    })
  }

})
  return adjacent
}

function markDistanceAndPredecessor(vert, nodes) {
  nodes.forEach(x => {
    x.distance = 1
    x.predecessor = vert
  })

}
