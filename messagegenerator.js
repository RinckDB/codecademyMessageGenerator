let jobs = ["Barbarian", "Rogue", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"];
let races = ["Dragonborn", "Dwarf", "Elf", "Half-Elf", "Gnome", "Human", "Tiefling"];
let towns = ["Ravenvalley", "Sleek Forest", "Goldpoint", "Steamvein", "Fayhand", "Curse Field", "Riverhill"];
let weapons = ["Bow", "War Hammer", "Sword", "Staff", "Dagger", "Mace", "Fists", "Javelin", "Crossbow"];

let randJob = (jobs) => {
    jobNum = Math.floor(Math.random() * jobs.length);
    return jobs[jobNum];
}
let randRace = (races) => {
    raceNum = Math.floor(Math.random() * races.length);
    return races[raceNum];
}
let randTown = (towns) => {
    townNum = Math.floor(Math.random() * towns.length);
    return towns[townNum];
}
let randWeapon = (weapons) => {
    weaponNum = Math.floor(Math.random() * weapons.length);
    return weapons[weaponNum];
}

let job = randJob(jobs);
let race = randRace(races);
let town = randTown(towns);
let weapon = randWeapon(weapons);

let theMessage = (job, race, town, weapon) => {
    if(job === "Sorcerer" || job === "Wizard" || job === "Warlock"){
        weapon = "Magic";
    }

    let theAdventurer = "You are a " + job + " " + race + ". You are from the town " + town + ".  Your favorite weapon is " + weapon + ".";

    return theAdventurer;
}

console.log(theMessage(job, race, town, weapon));

