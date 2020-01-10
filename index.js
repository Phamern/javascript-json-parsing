import {birdData} from './birds.js'

//1
console.log(birdData.description)

//2
const birdFamilyName = birdData.birds.map( name => name.family);
console.log(birdFamilyName)

// const filterBirds = birdData.birds.filter( fam => fam.family.includes('A') )
// console.log(filterBirds)

//3
const divingPetrels = birdData.birds.map( name => name.members)[2]

birdData.birds[2].members.map(
  bird => console.log(bird)
)
console.log(divingPetrels)

//4
birdData.birds.map(obj => obj.members.map(name => console.log(name)))

//5
birdData.birds.map(
  obj => {
    console.log(obj.family)
    obj.members.map(
      name => console.log(name))
  }
)

//6 
console.log(birdData.birds.filter(obj => obj.family.includes('g')))

//7
let newBirdArray = []
birdData.birds.map(
  fam => fam.members.map(
    allNames => newBirdArray = [...newBirdArray, allNames]
  )
)

console.log(newBirdArray)

//8

const filtered = newBirdArray.filter(
  mem => mem.includes('Antarctic')
)

console.log(filtered);

//Testing
// birdData.birds.filter(
//    obj => console.log(obj.members.includes('Antartic')
//     //  filtered => console.log(filtered.includes('Antartic'))
//    )
//    )
   