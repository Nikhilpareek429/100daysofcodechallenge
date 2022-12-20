// Use Javascript to creat a game of snake water and gum. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare Win or loss Using alert. Use confirm and prompt wherever requride .
let user = console.log("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody"
  }
  else if (cpu === "S" && user === "W") {
    return "cpu"
  }
  else if (cpu === "S" && user === "G") {
    return "user"
  }
  else if (cpu === "G" && user === "W") {
    return "user"
  }
  else if (cpu === "G" && user === "S") {
    return "cpu"
  }
  else if (cpu === "W" && user === "S") {
    return "user"
  }
  else if (cpu === "W" && user === "G") {
    return "cpu"
  }
}
let result = match(cpu, user)
console.log(`CPU:${cpu} User:${user} The winner is: ${result.toUpperCase()}`)
