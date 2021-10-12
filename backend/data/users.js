import bcrypt from 'bcryptjs'

const users = [
  {
    title: 'Mr',
    firstName: 'Eran',
    lastName: 'Grady',
    email: 'erangrady3.0@gmail.com',
    img: 'https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.6435-9/234580634_10219995800905260_155358663534934404_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0Fh6V-Txmo0AX9FOElY&tn=XoFaucfYlLkMcPPB&_nc_ht=scontent.ftlv1-1.fna&oh=038d2ad9915603f19e6e83d8179041d5&oe=618C2846',
    country: 'Israel',
    city: 'Kiryat yam',
    streetName: 'Robert sold',
    streetNumber: 36,
    password: bcrypt.hashSync('12345678', 10),
    isAdmin: true,
  },
  {
    title: 'Mr',
    firstName: 'Oscar',
    lastName: 'Wang',
    email: 'oscar.wang@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    country: 'New Zealand',
    city: 'Upper Hutt',
    streetName: 'Totara Avenue',
    streetNumber: 882,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Ms',
    firstName: 'Mélissa',
    lastName: 'Perrin',
    email: 'melissa.perrin@example.com',
    img: 'https://randomuser.me/api/portraits/med/women/54.jpg',
    country: 'France',
    city: 'Paris',
    streetName: "Place de L'Église",
    streetNumber: 6523,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Mr',
    firstName: 'Angelo',
    lastName: 'Pierre',
    email: 'angelo.pierre@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/78.jpg',
    country: 'France',
    city: 'Boulogne-Billancourt',
    streetName: 'Avenue de la Libération',
    streetNumber: 4046,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Mr',
    firstName: 'Jerry',
    lastName: 'Jacobs',
    email: 'jerry.jacobs@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/52.jpg',
    country: 'Ireland',
    city: 'Sligo',
    streetName: 'Jones Road',
    streetNumber: 9292,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Mr',
    firstName: 'Lauri',
    lastName: 'Anttila',
    email: 'lauri.anttila@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/42.jpg',
    country: 'Finland',
    city: 'Kaavi',
    streetName: 'Hermiankatu',
    streetNumber: 3624,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Mrs',
    firstName: 'Stephanie',
    lastName: 'Holmes',
    email: 'stephanie.holmes@example.com',
    img: 'https://randomuser.me/api/portraits/med/women/29.jpg',
    country: 'Ireland',
    city: 'Tramore',
    streetName: 'Church Road',
    streetNumber: 3824,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Mr',
    firstName: 'Marcellus',
    lastName: 'Van der Stoel',
    email: 'marcellus.vanderstoel@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/17.jpg',
    country: 'Netherlands',
    city: 'Ulvenhout Ac',
    streetName: 'Gerard Ter Borchlaan',
    streetNumber: 7685,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Monsieur',
    firstName: 'Ludovic',
    lastName: 'Meyer',
    email: 'ludovic.meyer@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/16.jpg',
    country: 'Switzerland',
    city: 'Burgdorf',
    streetName: 'Avenue du Château',
    streetNumber: 8171,
    password: bcrypt.hashSync('12345678', 10),
  },
  {
    title: 'Mr',
    firstName: 'Eder',
    lastName: 'Porto',
    email: 'eder.porto@example.com',
    img: 'https://randomuser.me/api/portraits/med/men/51.jpg',
    country: 'Brazil',
    city: 'Colombo',
    streetName: 'Rua Das Flores',
    streetNumber: 3636,
    password: bcrypt.hashSync('12345678', 10),
  },
]

export default users