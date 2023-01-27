const URLResidents = 'https://swapi.dev/api/people/';
const URLFilms = 'https://swapi.dev/api/films/';
const gravity1 = '1 standard';

module.exports = {
  count: 60,
  next: 'https://swapi.dev/api/planets/?page=2',
  previous: null,
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: gravity1,
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [
        `${URLResidents}1/`,
        `${URLResidents}2/`,
        `${URLResidents}4/`,
        `${URLResidents}6/`,
        `${URLResidents}7/`,
        `${URLResidents}8/`,
        `${URLResidents}9/`,
        `${URLResidents}11/`,
        `${URLResidents}43/`,
        `${URLResidents}62/`,
      ],
      films: [
        `${URLFilms}1/`,
        `${URLFilms}3/`,
        `${URLFilms}4/`,
        `${URLFilms}5/`,
        `${URLFilms}6/`,
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi.dev/api/planets/1/',
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: gravity1,
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      residents: [
        `${URLResidents}5/`,
        `${URLResidents}68/`,
        `${URLResidents}81/`,
      ],
      films: [
        `${URLFilms}1/`,
        `${URLFilms}6/`,
      ],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi.dev/api/planets/2/',
    },
    {
      name: 'Yavin IV',
      rotation_period: '24',
      orbital_period: '4818',
      diameter: '10200',
      climate: 'temperate, tropical',
      gravity: gravity1,
      terrain: 'jungle, rainforests',
      surface_water: '8',
      population: '1000',
      residents: [],
      films: [
        `${URLFilms}1/`,
      ],
      created: '2014-12-10T11:37:19.144000Z',
      edited: '2014-12-20T20:58:18.421000Z',
      url: 'https://swapi.dev/api/planets/3/',
    },
    {
      name: 'Hoth',
      rotation_period: '23',
      orbital_period: '549',
      diameter: '7200',
      climate: 'frozen',
      gravity: '1.1 standard',
      terrain: 'tundra, ice caves, mountain ranges',
      surface_water: '100',
      population: 'unknown',
      residents: [],
      films: [
        `${URLFilms}2/`,
      ],
      created: '2014-12-10T11:39:13.934000Z',
      edited: '2014-12-20T20:58:18.423000Z',
      url: 'https://swapi.dev/api/planets/4/',
    },
    {
      name: 'Dagobah',
      rotation_period: '23',
      orbital_period: '341',
      diameter: '8900',
      climate: 'murky',
      gravity: 'N/A',
      terrain: 'swamp, jungles',
      surface_water: '8',
      population: 'unknown',
      residents: [],
      films: [
        `${URLFilms}2/`,
        `${URLFilms}3/`,
        `${URLFilms}6/`,
      ],
      created: '2014-12-10T11:42:22.590000Z',
      edited: '2014-12-20T20:58:18.425000Z',
      url: 'https://swapi.dev/api/planets/5/',
    },
    {
      name: 'Bespin',
      rotation_period: '12',
      orbital_period: '5110',
      diameter: '118000',
      climate: 'temperate',
      gravity: `1.5 (surface), ${gravity1} (Cloud City)`,
      terrain: 'gas giant',
      surface_water: '0',
      population: '6000000',
      residents: [
        `${URLResidents}26/`,
      ],
      films: [
        `${URLFilms}2/`,
      ],
      created: '2014-12-10T11:43:55.240000Z',
      edited: '2014-12-20T20:58:18.427000Z',
      url: 'https://swapi.dev/api/planets/6/',
    },
    {
      name: 'Endor',
      rotation_period: '18',
      orbital_period: '402',
      diameter: '4900',
      climate: 'temperate',
      gravity: '0.85 standard',
      terrain: 'forests, mountains, lakes',
      surface_water: '8',
      population: '30000000',
      residents: [
        `${URLResidents}30/`,
      ],
      films: [
        `${URLFilms}3/`,
      ],
      created: '2014-12-10T11:50:29.349000Z',
      edited: '2014-12-20T20:58:18.429000Z',
      url: 'https://swapi.dev/api/planets/7/',
    },
    {
      name: 'Naboo',
      rotation_period: '26',
      orbital_period: '312',
      diameter: '12120',
      climate: 'temperate',
      gravity: gravity1,
      terrain: 'grassy hills, swamps, forests, mountains',
      surface_water: '12',
      population: '4500000000',
      residents: [
        `${URLResidents}3/`,
        `${URLResidents}21/`,
        `${URLResidents}35/`,
        `${URLResidents}36/`,
        `${URLResidents}37/`,
        `${URLResidents}38/`,
        `${URLResidents}39/`,
        `${URLResidents}42/`,
        `${URLResidents}60/`,
        `${URLResidents}61/`,
        `${URLResidents}66/`,
      ],
      films: [
        `${URLFilms}3/`,
        `${URLFilms}4/`,
        `${URLFilms}5/`,
        `${URLFilms}6/`,
      ],
      created: '2014-12-10T11:52:31.066000Z',
      edited: '2014-12-20T20:58:18.430000Z',
      url: 'https://swapi.dev/api/planets/8/',
    },
    {
      name: 'Coruscant',
      rotation_period: '24',
      orbital_period: '368',
      diameter: '12240',
      climate: 'temperate',
      gravity: gravity1,
      terrain: 'cityscape, mountains',
      surface_water: 'unknown',
      population: '1000000000000',
      residents: [
        `${URLResidents}34/`,
        `${URLResidents}55/`,
        `${URLResidents}74/`,
      ],
      films: [
        `${URLFilms}3/`,
        `${URLFilms}4/`,
        `${URLFilms}5/`,
        `${URLFilms}6/`,
      ],
      created: '2014-12-10T11:54:13.921000Z',
      edited: '2014-12-20T20:58:18.432000Z',
      url: 'https://swapi.dev/api/planets/9/',
    },
    {
      name: 'Kamino',
      rotation_period: '27',
      orbital_period: '463',
      diameter: '19720',
      climate: 'temperate',
      gravity: gravity1,
      terrain: 'ocean',
      surface_water: '100',
      population: '1000000000',
      residents: [
        `${URLResidents}22/`,
        `${URLResidents}72/`,
        `${URLResidents}73/`,
      ],
      films: [
        `${URLFilms}5/`,
      ],
      created: '2014-12-10T12:45:06.577000Z',
      edited: '2014-12-20T20:58:18.434000Z',
      url: 'https://swapi.dev/api/planets/10/',
    },
  ],
};