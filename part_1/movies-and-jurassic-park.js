console.log('movies-and-jurassic-park.js is connected! woohoo!');



var priscilla = {
  title: 'The Adventures of Priscilla, Queen of the Desert',
  director: 'Stephan Elliott',
  actors: ['Hugo Weaving', 'Guy Pearce', 'Terence Stamp'],
  releaseYear: 1994,
  duration: 104
}

//1. After you have created your movie object, print the title of your movie using dot notation

console.log(priscilla.title)

//2. Print the director's name
console.log(priscilla.director)

//3. Print the release year
console.log(priscilla.releaseYear)

//4. Maybe your favorite movie came with an extended director's cut - write a statement that increases your movie object's duration by 25 minutes
console.log(priscilla.duration + 25)



// Part 1

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
};


// Do the tasks down here!

//1. Create a variable called guestOfHonor and assign its value to the name of the paleontologist at Snakewater, Montana.
var guestOfHonor = (snakewaterMontana['paleontologist']);

console.log(guestOfHonor)

//2. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called cleverGirl.
var cleverGirl = (snakewaterMontana['specimen']);

console.log(cleverGirl)

// Part 2

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
};

// Do the tasks down here!
//1. Store the array of specimens of this site into a variable called nicaraguanSpecimens.
var nicaraguanSpecimens = (nicaragua['specimens']);

console.log(nicaraguanSpecimens)

//2. Make a variable called favoriteSpecimen and assign its value to your favorite dinosaur within nicaraguanSpecimens
var favoriteSpecimen = (nicaragua.specimens[2]);

console.log(favoriteSpecimen)

//3. Add 250000 to the annual budget of this site.
var newBudget = ((nicaragua.annual_budget) + 250000);

console.log(newBudget)

// Part 3

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
};

// Do the tasks down here!

//1. Access the depth of John Hammond's mine in Mexico, store the depth of the Mexican mine into an appropriately named variable.
var mexicanMine = (hammondsMines.mexico.depth);

console.log(mexicanMine)

//2. Access and log the annual budget for Hammond's mine in Buenos Airies, store the annual budget for Hammond's mine in Buenos Aires.
var buenosBudget = (hammondsMines.buenos_aires.annual_budget);

console.log(buenosBudget)

//3. Access and console the dinosaur DNA specimens found in Buenos Aires.
console.log(hammondsMines.buenos_aires.specimens)


//4. Insert Nicaragua into hammondsMines.

//keeps removing the fucking object name
// var totalMines = [hammondsMines.buenos_aires,hammondsMines.mexico];
// var nicaragua;
// totalMines.push(nicaragua);
// console.log(totalMines)

//i know the following isn't right but i've spent hours on this
var totalMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ],
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ],
  },
  nicaragua: {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ],
}
};

console.log(totalMines)

//5. Create three variables to store the annual budgets for each mine into them.
var airesBudget = (totalMines.buenos_aires.annual_budget);
var mexicoBudget = (totalMines.mexico.annual_budget);
var nicaraguaBudget = (totalMines.nicaragua.annual_budget);

//6. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.
var annualCostOfOperations = (airesBudget + mexicoBudget + nicaraguaBudget);
console.log(annualCostOfOperations)

//7. Access and console log the "Parasaurolophus" specimen.
console.log(totalMines.mexico.specimens[1])


//shit that clearly did not work

// var nicaragua;
// var hammondsMines = [hammondsMines.buenos_aires,hammondsMines.mexico]
// hammondsMines.push(nicaragua);
// console.log(hammondsMines)


// var hammondsMines = [hammondsMines.buenos_aires,hammondsMines.mexico]
// var nicaragua;
// hammondsMines.push(nicaragua);
// console.log(hammondsMines)

// var hammondsMines = [buenos_aires,mexico];
// var nicaragua = {
//   depth: "200 meters",
//   annual_budget: 1500000,
//   specimens: [
//     "Tyrannosaurus Rex",
//     "Stegosaurous",
//     "Triceratops",
//     "Velociraptor"
//   ],
// };

// var hammondsMines = []
// var nicaragua = []
// array.prototype.push.apply(hammondsMines,nicaragua);

// var hammondsMines = ['buenos_aires','mexico'];
// var total = hammondsMines.push('nicaragua');
// console.log(hammondsMines);

// var buenosBudget = (hammondsMines.buenos_aires.annual_budget)
// console.log(buenosBudget)
// var mexicoBudget = (hammondsMines.mexico.annual_budget);
// var nicaraguaBudget = (hammondsMines.nicaragua.annual_budget);

// var hammondsMines = {'buenos_aires','mexico'};
// hammondsMines.push('nicaragua');


// nicaragua.push(hammondsMines);

