/**
 * From https://en.wikipedia.org/wiki/Moons_of_Jupiter
 *
 * @deprecated in favor of user service. Will be removed in v4.0
 */
export const moonsOfJupyter = [
  'Metis',
  'Adrastea',
  'Amalthea',
  'Thebe',
  'Io',
  'Europa',
  'Ganymede',
  'Callisto',
  'Themisto',
  'Leda',
  'Ersa',
  'Pandia',
  'Himalia',
  'Lysithea',
  'Elara',
  'Dia',
  'Carpo',
  'Valetudo',
  'Euporie',
  'Eupheme',
  // 'S/2003 J 18',
  // 'S/2010 J 2',
  'Helike',
  // 'S/2003 J 16',
  // 'S/2003 J 2',
  'Euanthe',
  // 'S/2017 J 7',
  'Hermippe',
  'Praxidike',
  'Thyone',
  'Thelxinoe',
  // 'S/2017 J 3',
  'Ananke',
  'Mneme',
  // 'S/2016 J 1',
  'Orthosie',
  'Harpalyke',
  'Iocaste',
  // 'S/2017 J 9',
  // 'S/2003 J 12',
  // 'S/2003 J 4',
  'Erinome',
  'Aitne',
  'Herse',
  'Taygete',
  // 'S/2017 J 2',
  // 'S/2017 J 6',
  'Eukelade',
  'Carme',
  // 'S/2003 J 19',
  'Isonoe',
  // 'S/2003 J 10',
  'Autonoe',
  'Philophrosyne',
  'Cyllene',
  'Pasithee',
  // 'S/2010 J 1',
  'Pasiphae',
  'Sponde',
  // 'S/2017 J 8',
  'Eurydome',
  // 'S/2017 J 5',
  'Kalyke',
  'Hegemone',
  'Kale',
  'Kallichore',
  // 'S/2011 J 1',
  // 'S/2017 J 1',
  'Chaldene',
  'Arche',
  'Eirene',
  'Kore',
  // 'S/2011 J 2',
  // 'S/2003 J 9',
  'Megaclite',
  'Aoede',
  // 'S/2003 J 23',
  'Callirrhoe',
  'Sinope'
];

/**
 * Get a random user-name based on the moons of Jupyter.
 * This function returns names like "Anonymous Io" or "Anonymous Metis".
 *
 * @deprecated in favor of user service. Will be removed in v4.0
 */
export const getAnonymousUserName = (): string =>
  'Anonymous ' +
  moonsOfJupyter[Math.floor(Math.random() * moonsOfJupyter.length)];

/**
 * @deprecated in favor of user service. Will be removed in v4.0
 */
export const userColors = [
  '#12A0D3',
  '#17AB30',
  '#CC8500',
  '#A79011',
  '#ee6352',
  '#609DA9',
  '#4BA749',
  '#00A1B3'
];

/**
 * @deprecated in favor of user service. Will be removed in v4.0
 */
export const getRandomColor = (): string =>
  userColors[Math.floor(Math.random() * userColors.length)];
