import sum from './basic';
import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from './Characters';

console.log('worked');
console.log(sum([1, 2]));

const bowerman = new Bowerman('Robin');
const swordsman = new Swordsman('Aragorn');
const magician = new Magician('Gandalf');
const daemon = new Daemon('Megatron');
const undead = new Undead('Ghost');
const zombie = new Zombie('Walker');

console.log(bowerman, swordsman, magician, daemon, undead, zombie);