// ? importing images as Tommy cannot understand how relative path work in this case, please let Tommy know if you have better solution
import sunset from '../assets/wallpapers/highRes/1_sunset.jpg';
import forest from '../assets/wallpapers/highRes/2_forest.jpg';
import cityscape from '../assets/wallpapers/highRes/3_cityscape.jpg';
import rainy from '../assets/wallpapers/highRes/4_rainy.jpg';
import blocks from '../assets/wallpapers/highRes/5_blocks.jpg';
import paint from '../assets/wallpapers/highRes/6_paint.jpg';
import moon from '../assets/wallpapers/highRes/7_moon.jpg';
import waterfall from '../assets/wallpapers/highRes/8_waterfall.jpg';
import hexagon from '../assets/wallpapers/highRes/9_hexagon.jpg';
import road from '../assets/wallpapers/highRes/10_road.jpg';
import valley from '../assets/wallpapers/highRes/11_valley.jpg';
import train from '../assets/wallpapers/highRes/12_train.jpg';
// database
const database = {
	themePath: [
		null,
		sunset,
		forest,
		cityscape,
		rainy,
		blocks,
		paint,
		moon,
		waterfall,
		hexagon,
		road,
		valley,
		train,
	],
	//Default Life Information - Life information before the life is first created
	lifeInformation: {
		//Crucial information for running, never shown to the player
		//Status: 0 = Doesn't Exist, 1 = Alive, 2 = Dead
		version: '0.3 beta',
		status: 0, //Integer from 0-2, changed to 1 when life is created (0 = Not born yet, 1 = Alive, 2 = Dead)
		//Life Information
		age: {
			years: 0, // Integer >= 0
			days: 0, // Integer from 0-31
		},
		balance: 0.0, // Float >= 0
		birthday: {
			year: 1970, //Integer >= 0, changed when life is created
			month: 1, //Integer from 0-12, changed when life is created
			day: 1, //Integer from 0-31, changed when life is created
		},
		career: {
			current: {
				job: [], //Array of integers >= 0
				level: [], //Array of integers > 0
			},
			past: {
				job: [], //Array of integers >= 0
				level: [], //Array of integers > 0
				start: [], //Array of date libraries
				end: [], //Array of date libraries
			},
		},
		date: {
			year: 1970, //Integer >= 0, changed when life is created
			month: 1, //Integer from 0-12, changed when life is created
			day: 1, //Integer from 0-31, changed when life is created
		},
		diary:
			'Click the play button on the bottom right corner to start your life!', //String
		dsb: 0, //Integer, never shown to the player
		education: {
			status: 0, //Integer from 0-3 (0 = Not in school yet, 1 = In school, 2 = On Holidays, 3 = Graduated)
			level: 0, //Integer from 0-3
			grade: 0, //Integer <= 0
			school: 0, //Integer <= 0
			daysIntoGrade: 0, //Integer <= 0
			marks: 50, //Integer between 0-100
			effort: 50, //Integer between 0-100
		},
		gender: 'm', //String, either "m" or "f", changed when life is created
		iq: 0, //Integer < 0, generated when life is created
		name: {
			first: 'John', //String, changed when life is created
			last: 'Smith', //String, changed when life is created
		},
		netWorth: 0.0, //Float >= 0
		//Life number - To be used when transferring
		lifeNo: 0,
	},
	//Diary Entries
	diaryEntries: {
		born: ' - I have been brought into this world. <br>',
		death:
			' - I died due to natural causes. I was aged {age,years} years and {age,days} days when I died. <br>',
	},
	//Firefox Local Storage Transfers
	transfer: [
		'settings_volume',
		'settings_theme',
		'settings_gamespeed',
		'currentInfo',
		'pastInfo',
		'lifeTransfer',
	],
	//Database information related to education
	education: {
		//List of Levels
		levels: ['none', 'primary', 'secondary', 'tertiary'],
		//List of Schools
		schools: {
			primary: [
				null,
				'Auburn North Public School',
				'Blacktown South Public School',
				'Campsie Public School',
				'Chatswood Public School',
				'Harbord Public School',
				'Hurstville South Public School',
				'Leumeah Public School',
				'Liverpool Public School',
				'Malabar Public School',
				'Mona Vale Public School',
				'Padstow Park Public School',
				'Parramatta Public School',
				'Pennant Hills Public School',
				'Penrith Public School',
				'Randwick Public School',
				'Richmond Public School',
				'Ryde Public School',
				'St Johns Park Public School',
				'Sutherland Public School',
				'Westmead Public School',
			],
			secondary: [
				null,
				'Blakehurst High School',
				'Canley Vale High School',
				'Carlingford High School',
				'Castle Hill High School',
				'Casula High School',
				'Concord High School',
				'Elizabeth Macarthur High School',
				'Killara High School',
				'Killarney Heights High School',
				'Kingsgrove High School',
				'Kingswood High School',
				'Kirrawee High School',
				'Leumeah High School',
				'Menai High School',
				'Pittwater High School',
				'Prairiewood High School',
				'Rooty Hill High School',
				'Sir Joseph Banks High School',
				'South Sydney High School',
				'Turramurra High School',
			],
		},
		//List of Grade Names
		grades: {
			primary: {
				names: [
					null,
					'Kindergarten',
					'Year 1',
					'Year 2',
					'Year 3',
					'Year 4',
					'Year 5',
					'Year 6',
				],
				difficulty: [null, 5, 15, 20, 25, 30, 35, 45],
				startDate: [null, 131, 131, 131, 131, 131, 131, 131], //MMDD code of when the grade will start
				endDate: [null, 1215, 1215, 1215, 1215, 1215, 1215, 1215], //MMDD code of when the grade will end
			},
			secondary: {
				names: [
					null,
					'Year 7',
					'Year 8',
					'Year 9',
					'Year 10',
					'Year 11',
					'Year 12',
				],
				difficulty: [null, 60, 65, 75, 80, 95, 120],
				startDate: [null, 131, 131, 131, 131, 131, 1012], //MMDD code of when the grade will start
				endDate: [null, 1215, 1215, 1215, 1215, 925, 1106], //MMDD code of when the grade will end
			},
		},
		enrolmentAge: 4210,
	},
};

export default database;
