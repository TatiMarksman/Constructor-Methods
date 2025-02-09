import Magician from '../Class/Magician';

describe('Magician Class Test', () => {
  test('should create Magician character', () => {
    const magician = new Magician('Gandalf');
    expect(magician).toEqual({
      name: 'Gandalf',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('levelUp increases level and stats, resets health', () => {
    const magician = new Magician('Gandalf');
    magician.levelUp();

    expect(magician.level).toBe(2);
    expect(magician.health).toBe(100);
    expect(magician.attack).toBeCloseTo(12); 
    expect(magician.defence).toBeCloseTo(48); 
  });

  test('levelUp throws error if character is dead', () => {
    const magician = new Magician('Gandalf');
    magician.health = 0;

    expect(() => magician.levelUp()).toThrow("Can't level up a dead character.");
  });

  test('damage reduces health correctly', () => {
    const magician = new Magician('Gandalf');
    const damage = 30;
    const expectedHealth = 100 - damage * (1 - magician.defence / 100);
    magician.damage(damage);

    expect(magician.health).toBeCloseTo(expectedHealth);
  });

  test('damage does not set health below 0', () => {
    const magician = new Magician('Gandalf');
    magician.damage(200);

    expect(magician.health).toBe(0);
  });
});