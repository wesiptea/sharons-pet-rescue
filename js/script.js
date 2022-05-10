const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      this.isTired = 1;
      console.log(`${this.name} needs a nap. ZZZzzz...`);
    },
    play: function () {
      if (this.isTired === 10) {
        this.sleep();
        console.log("Too tired to play.");
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

console.log(sora, clover, baxter, cleo, francine);

// clover.sleep();
// baxter.play();
// console.log(clover, baxter);

clover.isTired = 8;
francine.isTired = 9;
// console.log(clover, francine);

// Create an array of the pet objects
const allPets = [sora, clover, baxter, cleo, francine];
// console.log(allPets);

// Create a function called showPets with an argument of petArray
const showPets = function (petArray) {
  // This allows us to see the pets in browser
  pets.innerHTML = "";
  // This empty string above will clear your list whenever showPets is run, so that you can update it with fresh info.

  for (let pet of petArray) {
    let status = "ready to play!";
    if (pet.isTired >= 7) {
      status = "sleeping.";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
