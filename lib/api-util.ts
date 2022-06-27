export function getRandomIntNumberBetween(min: number = 1, max: number = 10) {
	// min: 5, max: 10
	return Math.floor(Math.random() * (max - min + 1) + min) // 10.999999999999 => 10
}

export const fakeUsers = [
	{
		name: 'Everett',
		username: 'Everett.Reilly95',
		avatar: 'https://cdn.fakercloud.com/avatars/sawrb_128.jpg',
		email: 'Everett.Reilly95.Gerlach@gmail.com',
		dob: '1982-06-30T10:19:21.807Z',
		phone: '(803) 642-6327',
		address: {
			street: 'Dickinson Center',
			suite: 'Apt. 746',
			city: 'Wymanchester',
			zipcode: '66927',
			geo: {
				lat: '73.3270',
				lng: '108.5247',
			},
		},
		website: 'thurman.info',
		company: {
			name: 'Bayer, Murazik and Gottlieb',
			catchPhrase: 'Upgradable 6th generation circuit',
			bs: 'scale proactive niches',
		},
		id: 0,
	},
	{
		name: 'Valerie',
		username: 'Valerie_Marvin',
		avatar: 'https://cdn.fakercloud.com/avatars/falconerie_128.jpg',
		email: 'Valerie_Marvin_Flatley6@yahoo.com',
		dob: '1958-09-22T07:30:44.813Z',
		phone: '1-256-897-1523',
		address: {
			street: 'Chandler Wall',
			suite: 'Apt. 468',
			city: 'South Edward',
			zipcode: '60167-8264',
			geo: {
				lat: '-71.3149',
				lng: '-153.2936',
			},
		},
		website: 'loyal.info',
		company: {
			name: 'Nicolas - Kuhic',
			catchPhrase: 'Optimized zero defect Graphical User Interface',
			bs: 'empower distributed vortals',
		},
		id: 1,
	},
	{
		name: 'Gregg',
		username: 'Gregg6',
		avatar: 'https://cdn.fakercloud.com/avatars/evanshajed_128.jpg',
		email: 'Gregg6.Murray@gmail.com',
		dob: '1974-04-24T17:50:03.783Z',
		phone: '1-248-211-7223 x795',
		address: {
			street: 'Johns Crest',
			suite: 'Suite 465',
			city: 'East Susanna',
			zipcode: '63751',
			geo: {
				lat: '13.3309',
				lng: '151.7477',
			},
		},
		website: 'greyson.org',
		company: {
			name: 'Bashirian, Upton and Doyle',
			catchPhrase: 'Synergistic zero administration approach',
			bs: 'envisioneer one-to-one schemas',
		},
		id: 2,
	},
	{
		name: 'Maud',
		username: 'Maud_Jacobson9',
		avatar: 'https://cdn.fakercloud.com/avatars/jedbridges_128.jpg',
		email: 'Maud_Jacobson9.Boyer99@gmail.com',
		dob: '1961-11-28T02:45:29.061Z',
		phone: '959-536-5978 x33491',
		address: {
			street: 'Lockman Coves',
			suite: 'Apt. 070',
			city: 'Attleboro',
			zipcode: '83825-8167',
			geo: {
				lat: '9.9947',
				lng: '-90.8921',
			},
		},
		website: 'nina.biz',
		company: {
			name: 'Wiza - Kihn',
			catchPhrase: 'Enterprise-wide user-facing array',
			bs: 'engage bleeding-edge systems',
		},
		id: 3,
	},
	{
		name: 'Cade',
		username: 'Cade_Heaney59',
		avatar: 'https://cdn.fakercloud.com/avatars/ankitind_128.jpg',
		email: 'Cade_Heaney59.Krajcik@gmail.com',
		dob: '1981-01-03T14:21:24.238Z',
		phone: '(969) 494-9886',
		address: {
			street: 'Jordyn Island',
			suite: 'Suite 552',
			city: 'Beattytown',
			zipcode: '44210',
			geo: {
				lat: '-88.5353',
				lng: '103.5527',
			},
		},
		website: 'anthony.name',
		company: {
			name: 'Padberg - Dare',
			catchPhrase: 'Operative content-based orchestration',
			bs: 'harness proactive methodologies',
		},
		id: 4,
	},
	{
		name: 'Ted',
		username: 'Ted_Jast',
		avatar: 'https://cdn.fakercloud.com/avatars/brandclay_128.jpg',
		email: 'Ted_Jast_Rath63@gmail.com',
		dob: '1981-05-28T01:00:28.840Z',
		phone: '(643) 779-4889 x7964',
		address: {
			street: 'Noemy Pike',
			suite: 'Apt. 610',
			city: 'Smyrna',
			zipcode: '09137-1642',
			geo: {
				lat: '34.7664',
				lng: '7.1243',
			},
		},
		website: 'baron.name',
		company: {
			name: 'Veum, Smith and Pfeffer',
			catchPhrase: 'Total attitude-oriented focus group',
			bs: 'streamline efficient methodologies',
		},
		id: 5,
	},
	{
		name: 'Hector',
		username: 'Hector.Haley',
		avatar: 'https://cdn.fakercloud.com/avatars/themadray_128.jpg',
		email: 'Hector.Haley_Schoen@yahoo.com',
		dob: '1951-04-12T01:55:57.078Z',
		phone: '519-546-3484',
		address: {
			street: 'Ena Vista',
			suite: 'Suite 509',
			city: 'Rochester',
			zipcode: '14200-2605',
			geo: {
				lat: '-66.9962',
				lng: '162.0399',
			},
		},
		website: 'eugenia.info',
		company: {
			name: "O'Kon - Dare",
			catchPhrase: 'Enterprise-wide well-modulated methodology',
			bs: 'deploy bricks-and-clicks users',
		},
		id: 6,
	},
	{
		name: 'Tre',
		username: 'Tre62',
		avatar: 'https://cdn.fakercloud.com/avatars/VinThomas_128.jpg',
		email: 'Tre62_Wisoky@hotmail.com',
		dob: '1980-11-28T02:01:16.609Z',
		phone: '892.426.5360 x4295',
		address: {
			street: 'Linnea Pike',
			suite: 'Apt. 835',
			city: 'Parker',
			zipcode: '01000-3101',
			geo: {
				lat: '4.0154',
				lng: '-175.7375',
			},
		},
		website: 'jordyn.org',
		company: {
			name: 'Ratke Inc',
			catchPhrase: 'Innovative mission-critical standardization',
			bs: 'architect turn-key bandwidth',
		},
		id: 7,
	},
	{
		name: 'Raymond',
		username: 'Raymond_Herman46',
		avatar: 'https://cdn.fakercloud.com/avatars/klefue_128.jpg',
		email: 'Raymond_Herman4699@yahoo.com',
		dob: '1985-12-29T11:44:36.902Z',
		phone: '1-715-624-2961',
		address: {
			street: 'Ryan Forge',
			suite: 'Apt. 982',
			city: 'Kenyaport',
			zipcode: '76127',
			geo: {
				lat: '-73.8780',
				lng: '-37.4484',
			},
		},
		website: 'deonte.name',
		company: {
			name: 'Schimmel, Hodkiewicz and Smitham',
			catchPhrase: 'Upgradable eco-centric application',
			bs: 'optimize scalable applications',
		},
		id: 8,
	},
	{
		name: 'Wilton',
		username: 'Wilton_Nicolas21',
		avatar: 'https://cdn.fakercloud.com/avatars/perretmagali_128.jpg',
		email: 'Wilton_Nicolas21.Luettgen@yahoo.com',
		dob: '1945-03-08T19:41:30.511Z',
		phone: '1-905-275-7411 x573',
		address: {
			street: 'Towne Isle',
			suite: 'Suite 922',
			city: 'Rexstad',
			zipcode: '34037',
			geo: {
				lat: '-51.8081',
				lng: '-42.3931',
			},
		},
		website: 'mekhi.net',
		company: {
			name: "O'Connell Group",
			catchPhrase: 'Reactive system-worthy standardization',
			bs: 'seize seamless deliverables',
		},
		id: 9,
	},
	{
		name: 'Keaton',
		username: 'Keaton_Bechtelar',
		avatar: 'https://cdn.fakercloud.com/avatars/aka_james_128.jpg',
		email: 'Keaton_Bechtelar.Runte@yahoo.com',
		dob: '1984-02-27T17:16:26.288Z',
		phone: '711.295.2692',
		address: {
			street: 'Rodrigo Wells',
			suite: 'Apt. 296',
			city: 'Wavabury',
			zipcode: '36724-5403',
			geo: {
				lat: '-63.2973',
				lng: '36.7935',
			},
		},
		website: 'dejuan.org',
		company: {
			name: 'Tillman and Sons',
			catchPhrase: 'Stand-alone optimizing encryption',
			bs: 'architect viral e-markets',
		},
		id: 10,
	},
	{
		name: 'Marshall',
		username: 'Marshall35',
		avatar: 'https://cdn.fakercloud.com/avatars/croakx_128.jpg',
		email: 'Marshall35.Gorczany78@yahoo.com',
		dob: '1951-05-04T16:56:22.503Z',
		phone: '(552) 919-2459',
		address: {
			street: 'Sauer Turnpike',
			suite: 'Apt. 322',
			city: 'Lake Joannyshire',
			zipcode: '15527-3349',
			geo: {
				lat: '-20.8791',
				lng: '74.2830',
			},
		},
		website: 'anissa.net',
		company: {
			name: 'Heller LLC',
			catchPhrase: 'Visionary secondary archive',
			bs: 'streamline impactful deliverables',
		},
		id: 11,
	},
	{
		name: 'Kurtis',
		username: 'Kurtis.Goldner86',
		avatar: 'https://cdn.fakercloud.com/avatars/rdsaunders_128.jpg',
		email: 'Kurtis.Goldner86_Streich44@gmail.com',
		dob: '1950-11-24T01:01:03.459Z',
		phone: '864-232-3263',
		address: {
			street: 'Harvey Vista',
			suite: 'Apt. 606',
			city: 'South Laviniaborough',
			zipcode: '38254-8620',
			geo: {
				lat: '-54.1293',
				lng: '-16.6453',
			},
		},
		website: 'kirk.net',
		company: {
			name: 'Pfannerstill - Lebsack',
			catchPhrase: 'De-engineered 6th generation alliance',
			bs: 'repurpose rich platforms',
		},
		id: 12,
	},
	{
		name: 'Elenora',
		username: 'Elenora23',
		avatar: 'https://cdn.fakercloud.com/avatars/tanveerrao_128.jpg',
		email: 'Elenora23.Reilly@yahoo.com',
		dob: '1970-11-29T20:40:39.656Z',
		phone: '672.949.2157 x49354',
		address: {
			street: 'Kurtis Court',
			suite: 'Suite 022',
			city: 'Minot',
			zipcode: '34767-3084',
			geo: {
				lat: '89.5804',
				lng: '37.2235',
			},
		},
		website: 'kirk.org',
		company: {
			name: 'Quigley, Leuschke and Emmerich',
			catchPhrase: 'Function-based hybrid local area network',
			bs: 'expedite scalable channels',
		},
		id: 13,
	},
	{
		name: 'Sophie',
		username: 'Sophie.Pagac2',
		avatar: 'https://cdn.fakercloud.com/avatars/lanceguyatt_128.jpg',
		email: 'Sophie.Pagac2.West43@gmail.com',
		dob: '1988-06-27T20:28:18.626Z',
		phone: '898-225-2579 x728',
		address: {
			street: 'Rosendo Courts',
			suite: 'Suite 564',
			city: 'Port Boris',
			zipcode: '90928-2973',
			geo: {
				lat: '25.4292',
				lng: '116.6464',
			},
		},
		website: 'daphne.name',
		company: {
			name: 'King - Heidenreich',
			catchPhrase: 'Persistent zero tolerance neural-net',
			bs: 'deploy strategic initiatives',
		},
		id: 14,
	},
	{
		name: 'Julianne',
		username: 'Julianne.Lesch28',
		avatar: 'https://cdn.fakercloud.com/avatars/GavicoInd_128.jpg',
		email: 'Julianne.Lesch28.Powlowski61@hotmail.com',
		dob: '1978-10-17T11:12:40.998Z',
		phone: '(866) 935-7519 x317',
		address: {
			street: 'Carroll Loaf',
			suite: 'Suite 744',
			city: 'Schultzland',
			zipcode: '94154-1796',
			geo: {
				lat: '23.0763',
				lng: '-1.8734',
			},
		},
		website: 'ramona.name',
		company: {
			name: 'Bins - Wintheiser',
			catchPhrase: 'Synchronised 24/7 project',
			bs: 'productize cutting-edge mindshare',
		},
		id: 15,
	},
	{
		name: 'Joshuah',
		username: 'Joshuah_Maggio',
		avatar: 'https://cdn.fakercloud.com/avatars/amayvs_128.jpg',
		email: 'Joshuah_Maggio_Prosacco@gmail.com',
		dob: '1973-12-05T07:31:35.411Z',
		phone: '(804) 945-1127',
		address: {
			street: 'Alexa Cliffs',
			suite: 'Apt. 713',
			city: 'New Rosemarymouth',
			zipcode: '97761',
			geo: {
				lat: '35.3283',
				lng: '151.7149',
			},
		},
		website: 'wilbert.com',
		company: {
			name: 'Muller - Daugherty',
			catchPhrase: 'Focused next generation archive',
			bs: 'transform distributed platforms',
		},
		id: 16,
	},
]

export const fakeStoryies = [
	{
		name: 'Sophie',
		username: 'Sophie.Pagac2',
		avatar: 'https://cdn.fakercloud.com/avatars/lanceguyatt_128.jpg',
		email: 'Sophie.Pagac2.West43@gmail.com',
		dob: '1988-06-27T20:28:18.626Z',
		phone: '898-225-2579 x728',
		address: {
			street: 'Rosendo Courts',
			suite: 'Suite 564',
			city: 'Port Boris',
			zipcode: '90928-2973',
			geo: {
				lat: '25.4292',
				lng: '116.6464',
			},
		},
		website: 'daphne.name',
		company: {
			name: 'King - Heidenreich',
			catchPhrase: 'Persistent zero tolerance neural-net',
			bs: 'deploy strategic initiatives',
		},
		id: 14,
	},
	{
		name: 'Julianne',
		username: 'Julianne.Lesch28',
		avatar: 'https://cdn.fakercloud.com/avatars/GavicoInd_128.jpg',
		email: 'Julianne.Lesch28.Powlowski61@hotmail.com',
		dob: '1978-10-17T11:12:40.998Z',
		phone: '(866) 935-7519 x317',
		address: {
			street: 'Carroll Loaf',
			suite: 'Suite 744',
			city: 'Schultzland',
			zipcode: '94154-1796',
			geo: {
				lat: '23.0763',
				lng: '-1.8734',
			},
		},
		website: 'ramona.name',
		company: {
			name: 'Bins - Wintheiser',
			catchPhrase: 'Synchronised 24/7 project',
			bs: 'productize cutting-edge mindshare',
		},
		id: 15,
	},
	{
		name: 'Joshuah',
		username: 'Joshuah_Maggio',
		avatar: 'https://cdn.fakercloud.com/avatars/amayvs_128.jpg',
		email: 'Joshuah_Maggio_Prosacco@gmail.com',
		dob: '1973-12-05T07:31:35.411Z',
		phone: '(804) 945-1127',
		address: {
			street: 'Alexa Cliffs',
			suite: 'Apt. 713',
			city: 'New Rosemarymouth',
			zipcode: '97761',
			geo: {
				lat: '35.3283',
				lng: '151.7149',
			},
		},
		website: 'wilbert.com',
		company: {
			name: 'Muller - Daugherty',
			catchPhrase: 'Focused next generation archive',
			bs: 'transform distributed platforms',
		},
		id: 16,
	},
]
