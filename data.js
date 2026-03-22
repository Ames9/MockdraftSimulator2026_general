const teams = [
    {
        "id": "ari",
        "name": "Arizona Cardinals",
        "city": "Arizona"
    },
    {
        "id": "atl",
        "name": "Atlanta Falcons",
        "city": "Atlanta"
    },
    {
        "id": "bal",
        "name": "Baltimore Ravens",
        "city": "Baltimore"
    },
    {
        "id": "buf",
        "name": "Buffalo Bills",
        "city": "Buffalo"
    },
    {
        "id": "car",
        "name": "Carolina Panthers",
        "city": "Carolina"
    },
    {
        "id": "chi",
        "name": "Chicago Bears",
        "city": "Chicago"
    },
    {
        "id": "cin",
        "name": "Cincinnati Bengals",
        "city": "Cincinnati"
    },
    {
        "id": "cle",
        "name": "Cleveland Browns",
        "city": "Cleveland"
    },
    {
        "id": "dal",
        "name": "Dallas Cowboys",
        "city": "Dallas"
    },
    {
        "id": "den",
        "name": "Denver Broncos",
        "city": "Denver"
    },
    {
        "id": "det",
        "name": "Detroit Lions",
        "city": "Detroit"
    },
    {
        "id": "gb",
        "name": "Green Bay Packers",
        "city": "Green Bay"
    },
    {
        "id": "hou",
        "name": "Houston Texans",
        "city": "Houston"
    },
    {
        "id": "ind",
        "name": "Indianapolis Colts",
        "city": "Indianapolis"
    },
    {
        "id": "jax",
        "name": "Jacksonville Jaguars",
        "city": "Jacksonville"
    },
    {
        "id": "kc",
        "name": "Kansas City Chiefs",
        "city": "Kansas City"
    },
    {
        "id": "lv",
        "name": "Las Vegas Raiders",
        "city": "Las Vegas"
    },
    {
        "id": "lac",
        "name": "Los Angeles Chargers",
        "city": "Los Angeles"
    },
    {
        "id": "lar",
        "name": "Los Angeles Rams",
        "city": "Los Angeles"
    },
    {
        "id": "mia",
        "name": "Miami Dolphins",
        "city": "Miami"
    },
    {
        "id": "min",
        "name": "Minnesota Vikings",
        "city": "Minnesota"
    },
    {
        "id": "ne",
        "name": "New England Patriots",
        "city": "New England"
    },
    {
        "id": "no",
        "name": "New Orleans Saints",
        "city": "New Orleans",
        "isTarget": true
    },
    {
        "id": "nyg",
        "name": "New York Giants",
        "city": "New York"
    },
    {
        "id": "nyj",
        "name": "New York Jets",
        "city": "New York"
    },
    {
        "id": "phi",
        "name": "Philadelphia Eagles",
        "city": "Philadelphia"
    },
    {
        "id": "pit",
        "name": "Pittsburgh Steelers",
        "city": "Pittsburgh"
    },
    {
        "id": "sf",
        "name": "San Francisco 49ers",
        "city": "San Francisco"
    },
    {
        "id": "sea",
        "name": "Seattle Seahawks",
        "city": "Seattle"
    },
    {
        "id": "tb",
        "name": "Tampa Bay Buccaneers",
        "city": "Tampa Bay"
    },
    {
        "id": "ten",
        "name": "Tennessee Titans",
        "city": "Tennessee"
    },
    {
        "id": "was",
        "name": "Washington Commanders",
        "city": "Washington"
    }
];
const draftProspects = [
    {
        "id": "p1",
        "name": "Fernando Mendoza",
        "school": "Indiana",
        "pos": "QB",
        "rank": 1,
        "isRB": false
    },
    {
        "id": "p2",
        "name": "Arvell Reese",
        "school": "Ohio State",
        "pos": "LB",
        "rank": 2,
        "isRB": false
    },
    {
        "id": "p3",
        "name": "David Bailey",
        "school": "Texas Tech",
        "pos": "EDGE",
        "rank": 3,
        "isRB": false
    },
    {
        "id": "p4",
        "name": "Jeremiyah Love",
        "school": "Notre Dame",
        "pos": "RB",
        "rank": 4,
        "isRB": true
    },
    {
        "id": "p5",
        "name": "Francis Mauigoa",
        "school": "Miami (FL)",
        "pos": "OT",
        "rank": 5,
        "isRB": false
    },
    {
        "id": "p6",
        "name": "Rueben Bain",
        "school": "Miami (FL)",
        "pos": "EDGE",
        "rank": 6,
        "isRB": false
    },
    {
        "id": "p7",
        "name": "Sonny Styles",
        "school": "Ohio State",
        "pos": "LB",
        "rank": 7,
        "isRB": false
    },
    {
        "id": "p8",
        "name": "Carnell Tate",
        "school": "Ohio State",
        "pos": "WR",
        "rank": 8,
        "isRB": false
    },
    {
        "id": "p9",
        "name": "Caleb Downs",
        "school": "Ohio State",
        "pos": "S",
        "rank": 9,
        "isRB": false
    },
    {
        "id": "p10",
        "name": "Spencer Fano",
        "school": "Utah",
        "pos": "OT",
        "rank": 10,
        "isRB": false
    },
    {
        "id": "p11",
        "name": "Mansoor Delane",
        "school": "LSU",
        "pos": "CB",
        "rank": 11,
        "isRB": false
    },
    {
        "id": "p12",
        "name": "Monroe Freeling",
        "school": "Georgia",
        "pos": "OT",
        "rank": 12,
        "isRB": false
    },
    {
        "id": "p13",
        "name": "Makai Lemon",
        "school": "USC",
        "pos": "WR",
        "rank": 13,
        "isRB": false
    },
    {
        "id": "p14",
        "name": "Jordyn Tyson",
        "school": "Arizona State",
        "pos": "WR",
        "rank": 14,
        "isRB": false
    },
    {
        "id": "p15",
        "name": "Jermod McCoy",
        "school": "Tennessee",
        "pos": "CB",
        "rank": 15,
        "isRB": false
    },
    {
        "id": "p16",
        "name": "Kenyon Sadiq",
        "school": "Oregon",
        "pos": "TE",
        "rank": 16,
        "isRB": false
    },
    {
        "id": "p17",
        "name": "Olaivavega Ioane",
        "school": "Penn State",
        "pos": "IOL",
        "rank": 17,
        "isRB": false
    },
    {
        "id": "p18",
        "name": "Keldric Faulk",
        "school": "Auburn",
        "pos": "EDGE",
        "rank": 18,
        "isRB": false
    },
    {
        "id": "p19",
        "name": "Dillon Thieneman",
        "school": "Oregon",
        "pos": "S",
        "rank": 19,
        "isRB": false
    },
    {
        "id": "p20",
        "name": "Akheem Mesidor",
        "school": "Miami (FL)",
        "pos": "EDGE",
        "rank": 20,
        "isRB": false
    },
    {
        "id": "p21",
        "name": "Peter Woods",
        "school": "Clemson",
        "pos": "DL",
        "rank": 21,
        "isRB": false
    },
    {
        "id": "p22",
        "name": "Kadyn Proctor",
        "school": "Alabama",
        "pos": "OT",
        "rank": 22,
        "isRB": false
    },
    {
        "id": "p23",
        "name": "Avieon Terrell",
        "school": "Clemson",
        "pos": "CB",
        "rank": 23,
        "isRB": false
    },
    {
        "id": "p24",
        "name": "Caleb Lomu",
        "school": "Utah",
        "pos": "OT",
        "rank": 24,
        "isRB": false
    },
    {
        "id": "p25",
        "name": "C.J. Allen",
        "school": "Georgia",
        "pos": "LB",
        "rank": 25,
        "isRB": false
    },
    {
        "id": "p26",
        "name": "Emmanuel McNeil-Warren",
        "school": "Toledo",
        "pos": "S",
        "rank": 26,
        "isRB": false
    },
    {
        "id": "p27",
        "name": "Caleb Banks",
        "school": "Florida",
        "pos": "DL",
        "rank": 27,
        "isRB": false
    },
    {
        "id": "p28",
        "name": "Omar Cooper Jr.",
        "school": "Indiana",
        "pos": "WR",
        "rank": 28,
        "isRB": false
    },
    {
        "id": "p29",
        "name": "Denzel Boston",
        "school": "Washington",
        "pos": "WR",
        "rank": 29,
        "isRB": false
    },
    {
        "id": "p30",
        "name": "T.J. Parker",
        "school": "Clemson",
        "pos": "EDGE",
        "rank": 30,
        "isRB": false
    },
    {
        "id": "p31",
        "name": "Kevin Concepcion",
        "school": "Texas A&M",
        "pos": "WR",
        "rank": 31,
        "isRB": false
    },
    {
        "id": "p32",
        "name": "Blake Miller",
        "school": "Clemson",
        "pos": "OT",
        "rank": 32,
        "isRB": false
    },
    {
        "id": "p33",
        "name": "Kayden McDonald",
        "school": "Ohio State",
        "pos": "DL",
        "rank": 33,
        "isRB": false
    },
    {
        "id": "p34",
        "name": "Cashius Howell",
        "school": "Texas A&M",
        "pos": "EDGE",
        "rank": 34,
        "isRB": false
    },
    {
        "id": "p35",
        "name": "Ty Simpson",
        "school": "Alabama",
        "pos": "QB",
        "rank": 35,
        "isRB": false
    },
    {
        "id": "p36",
        "name": "Colton Hood",
        "school": "Tennessee",
        "pos": "CB",
        "rank": 36,
        "isRB": false
    },
    {
        "id": "p37",
        "name": "Zion Young",
        "school": "Missouri",
        "pos": "EDGE",
        "rank": 37,
        "isRB": false
    },
    {
        "id": "p38",
        "name": "Max Iheanachor",
        "school": "Arizona State",
        "pos": "OT",
        "rank": 38,
        "isRB": false
    },
    {
        "id": "p39",
        "name": "Brandon Cisse",
        "school": "South Carolina",
        "pos": "CB",
        "rank": 39,
        "isRB": false
    },
    {
        "id": "p40",
        "name": "Lee Hunter",
        "school": "Texas Tech",
        "pos": "DL",
        "rank": 40,
        "isRB": false
    },
    {
        "id": "p41",
        "name": "Emmanuel Pregnon",
        "school": "Oregon",
        "pos": "IOL",
        "rank": 41,
        "isRB": false
    },
    {
        "id": "p42",
        "name": "Christen Miller",
        "school": "Georgia",
        "pos": "DL",
        "rank": 42,
        "isRB": false
    },
    {
        "id": "p43",
        "name": "Chris Johnson",
        "school": "San Diego State",
        "pos": "CB",
        "rank": 43,
        "isRB": false
    },
    {
        "id": "p44",
        "name": "Jacob Rodriguez",
        "school": "Texas Tech",
        "pos": "LB",
        "rank": 44,
        "isRB": false
    },
    {
        "id": "p45",
        "name": "Chase Bisontis",
        "school": "Texas A&M",
        "pos": "IOL",
        "rank": 45,
        "isRB": false
    },
    {
        "id": "p46",
        "name": "Anthony Hill Jr.",
        "school": "Texas",
        "pos": "LB",
        "rank": 46,
        "isRB": false
    },
    {
        "id": "p47",
        "name": "R Mason Thomas",
        "school": "Oklahoma",
        "pos": "EDGE",
        "rank": 47,
        "isRB": false
    },
    {
        "id": "p48",
        "name": "Jadarian Price",
        "school": "Notre Dame",
        "pos": "RB",
        "rank": 48,
        "isRB": true
    },
    {
        "id": "p49",
        "name": "Chris Brazzell",
        "school": "Tennessee",
        "pos": "WR",
        "rank": 49,
        "isRB": false
    },
    {
        "id": "p50",
        "name": "Jake Golday",
        "school": "Cincinnati",
        "pos": "LB",
        "rank": 50,
        "isRB": false
    },
    {
        "id": "p51",
        "name": "Malachi Lawrence",
        "school": "UCF",
        "pos": "EDGE",
        "rank": 51,
        "isRB": false
    },
    {
        "id": "p52",
        "name": "Eli Stowers",
        "school": "Vanderbilt",
        "pos": "TE",
        "rank": 52,
        "isRB": false
    },
    {
        "id": "p53",
        "name": "D'angelo Ponds",
        "school": "Indiana",
        "pos": "CB",
        "rank": 53,
        "isRB": false
    },
    {
        "id": "p54",
        "name": "Chris Bell",
        "school": "Louisville",
        "pos": "WR",
        "rank": 54,
        "isRB": false
    },
    {
        "id": "p55",
        "name": "Germie Bernard",
        "school": "Alabama",
        "pos": "WR",
        "rank": 55,
        "isRB": false
    },
    {
        "id": "p56",
        "name": "Gabe Jacas",
        "school": "Illinois",
        "pos": "EDGE",
        "rank": 56,
        "isRB": false
    },
    {
        "id": "p57",
        "name": "Gennings Dunker",
        "school": "Iowa",
        "pos": "OT",
        "rank": 57,
        "isRB": false
    },
    {
        "id": "p58",
        "name": "A.J. Haulcy",
        "school": "LSU",
        "pos": "S",
        "rank": 58,
        "isRB": false
    },
    {
        "id": "p59",
        "name": "Derrick Moore",
        "school": "Michigan",
        "pos": "EDGE",
        "rank": 59,
        "isRB": false
    },
    {
        "id": "p60",
        "name": "Zachariah Branch",
        "school": "Georgia",
        "pos": "WR",
        "rank": 60,
        "isRB": false
    },
    {
        "id": "p61",
        "name": "Josiah Trotter",
        "school": "Missouri",
        "pos": "LB",
        "rank": 61,
        "isRB": false
    },
    {
        "id": "p62",
        "name": "Keith Abney II",
        "school": "Arizona State",
        "pos": "CB",
        "rank": 62,
        "isRB": false
    },
    {
        "id": "p63",
        "name": "Malachi Fields",
        "school": "Notre Dame",
        "pos": "WR",
        "rank": 63,
        "isRB": false
    },
    {
        "id": "p64",
        "name": "Keionte Scott",
        "school": "Miami (FL)",
        "pos": "CB",
        "rank": 64,
        "isRB": false
    },
    {
        "id": "p65",
        "name": "Mike Washington Jr.",
        "school": "Arkansas",
        "pos": "RB",
        "rank": 65,
        "isRB": true
    },
    {
        "id": "p66",
        "name": "Domonique Orange",
        "school": "Iowa State",
        "pos": "DL",
        "rank": 66,
        "isRB": false
    },
    {
        "id": "p67",
        "name": "Connor Lew",
        "school": "Auburn",
        "pos": "IOL",
        "rank": 67,
        "isRB": false
    },
    {
        "id": "p68",
        "name": "Dani Dennis-Sutton",
        "school": "Penn State",
        "pos": "EDGE",
        "rank": 68,
        "isRB": false
    },
    {
        "id": "p69",
        "name": "Elijah Sarratt",
        "school": "Indiana",
        "pos": "WR",
        "rank": 69,
        "isRB": false
    },
    {
        "id": "p70",
        "name": "Kamari Ramsey",
        "school": "USC",
        "pos": "S",
        "rank": 70,
        "isRB": false
    },
    {
        "id": "p71",
        "name": "Antonio Williams",
        "school": "Clemson",
        "pos": "WR",
        "rank": 71,
        "isRB": false
    },
    {
        "id": "p72",
        "name": "Caleb Tiernan",
        "school": "Northwestern",
        "pos": "OT",
        "rank": 72,
        "isRB": false
    },
    {
        "id": "p73",
        "name": "Sam Hecht",
        "school": "Kansas State",
        "pos": "IOL",
        "rank": 73,
        "isRB": false
    },
    {
        "id": "p74",
        "name": "Gracen Halton",
        "school": "Oklahoma",
        "pos": "DL",
        "rank": 74,
        "isRB": false
    },
    {
        "id": "p75",
        "name": "Max Klare",
        "school": "Ohio State",
        "pos": "TE",
        "rank": 75,
        "isRB": false
    },
    {
        "id": "p76",
        "name": "Treydan Stukes",
        "school": "Arizona",
        "pos": "CB",
        "rank": 76,
        "isRB": false
    },
    {
        "id": "p77",
        "name": "Romello Height",
        "school": "Texas Tech",
        "pos": "EDGE",
        "rank": 77,
        "isRB": false
    },
    {
        "id": "p78",
        "name": "Garrett Nussmeier",
        "school": "LSU",
        "pos": "QB",
        "rank": 78,
        "isRB": false
    },
    {
        "id": "p79",
        "name": "Keylan Rutledge",
        "school": "Georgia Tech",
        "pos": "IOL",
        "rank": 79,
        "isRB": false
    },
    {
        "id": "p80",
        "name": "Kyle Louis",
        "school": "Pittsburgh",
        "pos": "LB",
        "rank": 80,
        "isRB": false
    },
    {
        "id": "p81",
        "name": "Davison Igbinosun",
        "school": "Ohio State",
        "pos": "CB",
        "rank": 81,
        "isRB": false
    },
    {
        "id": "p82",
        "name": "Skyler Bell",
        "school": "UConn",
        "pos": "WR",
        "rank": 82,
        "isRB": false
    },
    {
        "id": "p83",
        "name": "Joshua Josephs",
        "school": "Tennessee",
        "pos": "EDGE",
        "rank": 83,
        "isRB": false
    },
    {
        "id": "p84",
        "name": "Genesis Smith",
        "school": "Arizona",
        "pos": "S",
        "rank": 84,
        "isRB": false
    },
    {
        "id": "p85",
        "name": "Zakee Wheatley",
        "school": "Penn State",
        "pos": "S",
        "rank": 85,
        "isRB": false
    },
    {
        "id": "p86",
        "name": "Darrell Jackson Jr.",
        "school": "Florida State",
        "pos": "DL",
        "rank": 86,
        "isRB": false
    },
    {
        "id": "p87",
        "name": "Ted Hurst",
        "school": "Georgia State",
        "pos": "WR",
        "rank": 87,
        "isRB": false
    },
    {
        "id": "p88",
        "name": "L.T. Overton",
        "school": "Alabama",
        "pos": "EDGE",
        "rank": 88,
        "isRB": false
    },
    {
        "id": "p89",
        "name": "Jalon Kilgore",
        "school": "South Carolina",
        "pos": "S",
        "rank": 89,
        "isRB": false
    },
    {
        "id": "p90",
        "name": "Chandler Rivers",
        "school": "Duke",
        "pos": "CB",
        "rank": 90,
        "isRB": false
    },
    {
        "id": "p91",
        "name": "Logan Jones",
        "school": "Iowa",
        "pos": "IOL",
        "rank": 91,
        "isRB": false
    },
    {
        "id": "p92",
        "name": "Deion Burks",
        "school": "Oklahoma",
        "pos": "WR",
        "rank": 92,
        "isRB": false
    },
    {
        "id": "p93",
        "name": "Malik Muhammad",
        "school": "Texas",
        "pos": "CB",
        "rank": 93,
        "isRB": false
    },
    {
        "id": "p94",
        "name": "Bryce Lance",
        "school": "North Dakota State",
        "pos": "WR",
        "rank": 94,
        "isRB": false
    },
    {
        "id": "p95",
        "name": "Jonah Coleman",
        "school": "Washington",
        "pos": "RB",
        "rank": 95,
        "isRB": true
    },
    {
        "id": "p96",
        "name": "Jake Slaughter",
        "school": "Florida",
        "pos": "IOL",
        "rank": 96,
        "isRB": false
    },
    {
        "id": "p97",
        "name": "Sam Roush",
        "school": "Stanford",
        "pos": "TE",
        "rank": 97,
        "isRB": false
    },
    {
        "id": "p98",
        "name": "Julian Neal",
        "school": "Arkansas",
        "pos": "CB",
        "rank": 98,
        "isRB": false
    },
    {
        "id": "p99",
        "name": "Devin Moore",
        "school": "Florida",
        "pos": "CB",
        "rank": 99,
        "isRB": false
    },
    {
        "id": "p100",
        "name": "Jalen Farmer",
        "school": "Kentucky",
        "pos": "IOL",
        "rank": 100,
        "isRB": false
    },
    {
        "id": "p101",
        "name": "Bud Clark",
        "school": "TCU",
        "pos": "S",
        "rank": 101,
        "isRB": false
    },
    {
        "id": "p102",
        "name": "Michael Trigg",
        "school": "Baylor",
        "pos": "TE",
        "rank": 102,
        "isRB": false
    },
    {
        "id": "p103",
        "name": "Emmett Johnson",
        "school": "Nebraska",
        "pos": "RB",
        "rank": 103,
        "isRB": true
    },
    {
        "id": "p104",
        "name": "Ja'Kobi Lane",
        "school": "USC",
        "pos": "WR",
        "rank": 104,
        "isRB": false
    },
    {
        "id": "p105",
        "name": "Jaishawn Barham",
        "school": "Michigan",
        "pos": "LB",
        "rank": 105,
        "isRB": false
    },
    {
        "id": "p106",
        "name": "Dametrious Crownover",
        "school": "Texas A&M",
        "pos": "OT",
        "rank": 106,
        "isRB": false
    },
    {
        "id": "p107",
        "name": "Keyron Crawford",
        "school": "Auburn",
        "pos": "EDGE",
        "rank": 107,
        "isRB": false
    },
    {
        "id": "p108",
        "name": "Billy Schrauth",
        "school": "Notre Dame",
        "pos": "IOL",
        "rank": 108,
        "isRB": false
    },
    {
        "id": "p109",
        "name": "Daylen Everette",
        "school": "Georgia",
        "pos": "CB",
        "rank": 109,
        "isRB": false
    },
    {
        "id": "p110",
        "name": "Brenen Thompson",
        "school": "Mississippi State",
        "pos": "WR",
        "rank": 110,
        "isRB": false
    },
    {
        "id": "p111",
        "name": "Will Lee III",
        "school": "Texas A&M",
        "pos": "CB",
        "rank": 111,
        "isRB": false
    },
    {
        "id": "p112",
        "name": "Carson Beck",
        "school": "Miami (FL)",
        "pos": "QB",
        "rank": 112,
        "isRB": false
    },
    {
        "id": "p113",
        "name": "Deontae Lawson",
        "school": "Alabama",
        "pos": "LB",
        "rank": 113,
        "isRB": false
    },
    {
        "id": "p114",
        "name": "Justin Joly",
        "school": "NC State",
        "pos": "TE",
        "rank": 114,
        "isRB": false
    },
    {
        "id": "p115",
        "name": "Brian Parker II",
        "school": "Duke",
        "pos": "OT",
        "rank": 115,
        "isRB": false
    },
    {
        "id": "p116",
        "name": "Dontay Corleone",
        "school": "Cincinnati",
        "pos": "DL",
        "rank": 116,
        "isRB": false
    },
    {
        "id": "p117",
        "name": "Zane Durant",
        "school": "Penn State",
        "pos": "DL",
        "rank": 117,
        "isRB": false
    },
    {
        "id": "p118",
        "name": "Chris McClellan",
        "school": "Missouri",
        "pos": "DL",
        "rank": 118,
        "isRB": false
    },
    {
        "id": "p119",
        "name": "Nick Singleton",
        "school": "Penn State",
        "pos": "RB",
        "rank": 119,
        "isRB": true
    },
    {
        "id": "p120",
        "name": "Zxavian Harris",
        "school": "Mississippi",
        "pos": "DL",
        "rank": 120,
        "isRB": false
    },
    {
        "id": "p121",
        "name": "Drew Allar",
        "school": "Penn State",
        "pos": "QB",
        "rank": 121,
        "isRB": false
    },
    {
        "id": "p122",
        "name": "Anthony Lucas",
        "school": "USC",
        "pos": "EDGE",
        "rank": 122,
        "isRB": false
    },
    {
        "id": "p123",
        "name": "Oscar Delp",
        "school": "Georgia",
        "pos": "TE",
        "rank": 123,
        "isRB": false
    },
    {
        "id": "p124",
        "name": "Austin Barber",
        "school": "Florida",
        "pos": "OT",
        "rank": 124,
        "isRB": false
    },
    {
        "id": "p125",
        "name": "Tacario Davis",
        "school": "Washington",
        "pos": "CB",
        "rank": 125,
        "isRB": false
    },
    {
        "id": "p126",
        "name": "Isaiah World",
        "school": "Oregon",
        "pos": "OT",
        "rank": 126,
        "isRB": false
    },
    {
        "id": "p127",
        "name": "Tim Keenan III",
        "school": "Alabama",
        "pos": "DL",
        "rank": 127,
        "isRB": false
    },
    {
        "id": "p128",
        "name": "Jude Bowry",
        "school": "Boston College",
        "pos": "OT",
        "rank": 128,
        "isRB": false
    },
    {
        "id": "p129",
        "name": "DeMonte Capehart",
        "school": "Clemson",
        "pos": "DL",
        "rank": 129,
        "isRB": false
    },
    {
        "id": "p130",
        "name": "Harold Perkins",
        "school": "LSU",
        "pos": "LB",
        "rank": 130,
        "isRB": false
    },
    {
        "id": "p131",
        "name": "Kaleb Proctor",
        "school": "Southeastern Louisiana",
        "pos": "DL",
        "rank": 131,
        "isRB": false
    },
    {
        "id": "p132",
        "name": "Rayshaun Benny",
        "school": "Michigan",
        "pos": "DL",
        "rank": 132,
        "isRB": false
    },
    {
        "id": "p133",
        "name": "Markel Bell",
        "school": "Miami (FL)",
        "pos": "OT",
        "rank": 133,
        "isRB": false
    },
    {
        "id": "p134",
        "name": "Taylen Green",
        "school": "Arkansas",
        "pos": "QB",
        "rank": 134,
        "isRB": false
    },
    {
        "id": "p135",
        "name": "Kage Casey",
        "school": "Boise State",
        "pos": "OT",
        "rank": 135,
        "isRB": false
    },
    {
        "id": "p136",
        "name": "Trey Zuhn III",
        "school": "Texas A&M",
        "pos": "OT",
        "rank": 136,
        "isRB": false
    },
    {
        "id": "p137",
        "name": "Jack Endries",
        "school": "Texas",
        "pos": "TE",
        "rank": 137,
        "isRB": false
    },
    {
        "id": "p138",
        "name": "Beau Stephens",
        "school": "Iowa",
        "pos": "IOL",
        "rank": 138,
        "isRB": false
    },
    {
        "id": "p139",
        "name": "Kaytron Allen",
        "school": "Penn State",
        "pos": "RB",
        "rank": 139,
        "isRB": true
    },
    {
        "id": "p140",
        "name": "J.C. Davis",
        "school": "Illinois",
        "pos": "OT",
        "rank": 140,
        "isRB": false
    },
    {
        "id": "p141",
        "name": "Taurean York",
        "school": "Texas A&M",
        "pos": "LB",
        "rank": 141,
        "isRB": false
    },
    {
        "id": "p142",
        "name": "Josh Cameron",
        "school": "Baylor",
        "pos": "WR",
        "rank": 142,
        "isRB": false
    },
    {
        "id": "p143",
        "name": "Bryce Boettcher",
        "school": "Oregon",
        "pos": "LB",
        "rank": 143,
        "isRB": false
    },
    {
        "id": "p144",
        "name": "Matt Gulbin",
        "school": "Michigan State",
        "pos": "IOL",
        "rank": 144,
        "isRB": false
    },
    {
        "id": "p145",
        "name": "Joe Royer",
        "school": "Cincinnati",
        "pos": "TE",
        "rank": 145,
        "isRB": false
    },
    {
        "id": "p146",
        "name": "Diego Pounds",
        "school": "Mississippi",
        "pos": "OT",
        "rank": 146,
        "isRB": false
    },
    {
        "id": "p147",
        "name": "Drew Shelton",
        "school": "Penn State",
        "pos": "OT",
        "rank": 147,
        "isRB": false
    },
    {
        "id": "p148",
        "name": "Charles Demmings",
        "school": "Stephen F. Austin",
        "pos": "CB",
        "rank": 148,
        "isRB": false
    },
    {
        "id": "p149",
        "name": "De'Zhaun Stribling",
        "school": "Mississippi",
        "pos": "WR",
        "rank": 149,
        "isRB": false
    },
    {
        "id": "p150",
        "name": "Parker Brailsford",
        "school": "Alabama",
        "pos": "IOL",
        "rank": 150,
        "isRB": false
    },
    {
        "id": "p151",
        "name": "Louis Moore",
        "school": "Indiana",
        "pos": "S",
        "rank": 151,
        "isRB": false
    },
    {
        "id": "p152",
        "name": "Kevin Coleman Jr.",
        "school": "Missouri",
        "pos": "WR",
        "rank": 152,
        "isRB": false
    },
    {
        "id": "p153",
        "name": "Caden Curry",
        "school": "Ohio State",
        "pos": "EDGE",
        "rank": 153,
        "isRB": false
    },
    {
        "id": "p154",
        "name": "Michael Taaffe",
        "school": "Texas",
        "pos": "S",
        "rank": 154,
        "isRB": false
    },
    {
        "id": "p155",
        "name": "Kaleb Elarms-Orr",
        "school": "TCU",
        "pos": "LB",
        "rank": 155,
        "isRB": false
    },
    {
        "id": "p156",
        "name": "Aiden Fisher",
        "school": "Indiana",
        "pos": "LB",
        "rank": 156,
        "isRB": false
    },
    {
        "id": "p157",
        "name": "Tanner Koziol",
        "school": "Houston",
        "pos": "TE",
        "rank": 157,
        "isRB": false
    },
    {
        "id": "p158",
        "name": "Hezekiah Masses",
        "school": "California",
        "pos": "CB",
        "rank": 158,
        "isRB": false
    },
    {
        "id": "p159",
        "name": "Jakobe Thomas",
        "school": "Miami (FL)",
        "pos": "S",
        "rank": 159,
        "isRB": false
    },
    {
        "id": "p160",
        "name": "Jeff Caldwell",
        "school": "Cincinnati",
        "pos": "WR",
        "rank": 160,
        "isRB": false
    },
    {
        "id": "p161",
        "name": "Nate Boerkircher",
        "school": "Texas A&M",
        "pos": "TE",
        "rank": 161,
        "isRB": false
    },
    {
        "id": "p162",
        "name": "VJ Payne",
        "school": "Kansas State",
        "pos": "S",
        "rank": 162,
        "isRB": false
    },
    {
        "id": "p163",
        "name": "Ephesians Prysock",
        "school": "Washington",
        "pos": "CB",
        "rank": 163,
        "isRB": false
    },
    {
        "id": "p164",
        "name": "Cole Payton",
        "school": "North Dakota State",
        "pos": "QB",
        "rank": 164,
        "isRB": false
    },
    {
        "id": "p165",
        "name": "Demond Claiborne",
        "school": "Wake Forest",
        "pos": "RB",
        "rank": 165,
        "isRB": true
    },
    {
        "id": "p166",
        "name": "Will Kacmarek",
        "school": "Ohio State",
        "pos": "TE",
        "rank": 166,
        "isRB": false
    },
    {
        "id": "p167",
        "name": "Reggie Virgil",
        "school": "Texas Tech",
        "pos": "WR",
        "rank": 167,
        "isRB": false
    },
    {
        "id": "p168",
        "name": "Thaddeus Dixon",
        "school": "North Carolina",
        "pos": "CB",
        "rank": 168,
        "isRB": false
    },
    {
        "id": "p169",
        "name": "Max Llewellyn",
        "school": "Iowa",
        "pos": "EDGE",
        "rank": 169,
        "isRB": false
    },
    {
        "id": "p170",
        "name": "Eric McAlister",
        "school": "TCU",
        "pos": "WR",
        "rank": 170,
        "isRB": false
    },
    {
        "id": "p171",
        "name": "Keyshaun Elliott",
        "school": "Arizona State",
        "pos": "LB",
        "rank": 171,
        "isRB": false
    },
    {
        "id": "p172",
        "name": "Tyler Onyedim",
        "school": "Texas A&M",
        "pos": "DL",
        "rank": 172,
        "isRB": false
    },
    {
        "id": "p173",
        "name": "Marlin Klein",
        "school": "Michigan",
        "pos": "TE",
        "rank": 173,
        "isRB": false
    },
    {
        "id": "p174",
        "name": "Cade Klubnik",
        "school": "Clemson",
        "pos": "QB",
        "rank": 174,
        "isRB": false
    },
    {
        "id": "p175",
        "name": "C.J. Daniels",
        "school": "Miami (FL)",
        "pos": "WR",
        "rank": 175,
        "isRB": false
    },
    {
        "id": "p176",
        "name": "TJ Hall",
        "school": "Iowa",
        "pos": "CB",
        "rank": 176,
        "isRB": false
    },
    {
        "id": "p177",
        "name": "Aamil Wagner",
        "school": "Notre Dame",
        "pos": "OT",
        "rank": 177,
        "isRB": false
    },
    {
        "id": "p178",
        "name": "Enrique Cruz Jr.",
        "school": "Kansas",
        "pos": "OT",
        "rank": 178,
        "isRB": false
    },
    {
        "id": "p179",
        "name": "Mikail Kamara",
        "school": "Indiana",
        "pos": "EDGE",
        "rank": 179,
        "isRB": false
    },
    {
        "id": "p180",
        "name": "Pat Coogan",
        "school": "Indiana",
        "pos": "IOL",
        "rank": 180,
        "isRB": false
    },
    {
        "id": "p181",
        "name": "Jeremiah Wright",
        "school": "Auburn",
        "pos": "IOL",
        "rank": 181,
        "isRB": false
    },
    {
        "id": "p182",
        "name": "Kendrick Law",
        "school": "Kentucky",
        "pos": "WR",
        "rank": 182,
        "isRB": false
    },
    {
        "id": "p183",
        "name": "Eli Raridon",
        "school": "Notre Dame",
        "pos": "TE",
        "rank": 183,
        "isRB": false
    },
    {
        "id": "p184",
        "name": "Kaelon Black",
        "school": "Indiana",
        "pos": "RB",
        "rank": 184,
        "isRB": true
    },
    {
        "id": "p185",
        "name": "Ar'maj Reed-Adams",
        "school": "Texas A&M",
        "pos": "IOL",
        "rank": 185,
        "isRB": false
    },
    {
        "id": "p186",
        "name": "Eli Heidenreich",
        "school": "Navy",
        "pos": "WR",
        "rank": 186,
        "isRB": false
    },
    {
        "id": "p187",
        "name": "Nadame Tucker",
        "school": "Western Michigan",
        "pos": "EDGE",
        "rank": 187,
        "isRB": false
    },
    {
        "id": "p188",
        "name": "Landon Robinson",
        "school": "Navy",
        "pos": "DL",
        "rank": 188,
        "isRB": false
    },
    {
        "id": "p189",
        "name": "Mason Reiger",
        "school": "Wisconsin",
        "pos": "EDGE",
        "rank": 189,
        "isRB": false
    },
    {
        "id": "p190",
        "name": "Seth McGowan",
        "school": "Kentucky",
        "pos": "RB",
        "rank": 190,
        "isRB": true
    },
    {
        "id": "p191",
        "name": "Adam Randall",
        "school": "Clemson",
        "pos": "RB",
        "rank": 191,
        "isRB": true
    },
    {
        "id": "p192",
        "name": "Dallen Bentley",
        "school": "Utah",
        "pos": "TE",
        "rank": 192,
        "isRB": false
    },
    {
        "id": "p193",
        "name": "Nick Barrett",
        "school": "South Carolina",
        "pos": "DL",
        "rank": 193,
        "isRB": false
    },
    {
        "id": "p194",
        "name": "Cole Wisniewski",
        "school": "Texas Tech",
        "pos": "S",
        "rank": 194,
        "isRB": false
    },
    {
        "id": "p195",
        "name": "Fa'alili Fa'amoe",
        "school": "Wake Forest",
        "pos": "OT",
        "rank": 195,
        "isRB": false
    },
    {
        "id": "p196",
        "name": "Lander Barton",
        "school": "Utah",
        "pos": "LB",
        "rank": 196,
        "isRB": false
    },
    {
        "id": "p197",
        "name": "Sawyer Robertson",
        "school": "Baylor",
        "pos": "QB",
        "rank": 197,
        "isRB": false
    },
    {
        "id": "p198",
        "name": "Jager Burton",
        "school": "Kentucky",
        "pos": "IOL",
        "rank": 198,
        "isRB": false
    },
    {
        "id": "p199",
        "name": "Lorenzo Styles Jr.",
        "school": "Ohio State",
        "pos": "CB",
        "rank": 199,
        "isRB": false
    },
    {
        "id": "p200",
        "name": "Riley Nowakowski",
        "school": "Indiana",
        "pos": "TE",
        "rank": 200,
        "isRB": false
    },
    {
        "id": "p201",
        "name": "D.J. Campbell",
        "school": "Texas",
        "pos": "IOL",
        "rank": 201,
        "isRB": false
    },
    {
        "id": "p202",
        "name": "Tyreak Sapp",
        "school": "Florida",
        "pos": "EDGE",
        "rank": 202,
        "isRB": false
    },
    {
        "id": "p203",
        "name": "Josh Cuevas",
        "school": "Alabama",
        "pos": "TE",
        "rank": 203,
        "isRB": false
    },
    {
        "id": "p204",
        "name": "Cyrus Allen",
        "school": "Cincinnati",
        "pos": "WR",
        "rank": 204,
        "isRB": false
    },
    {
        "id": "p205",
        "name": "John Michael Gyllenborg",
        "school": "Wyoming",
        "pos": "TE",
        "rank": 205,
        "isRB": false
    },
    {
        "id": "p206",
        "name": "Albert Regis",
        "school": "Texas A&M",
        "pos": "DL",
        "rank": 206,
        "isRB": false
    },
    {
        "id": "p207",
        "name": "J'Mari Taylor",
        "school": "Virginia",
        "pos": "RB",
        "rank": 207,
        "isRB": true
    },
    {
        "id": "p208",
        "name": "Vincent Anthony Jr.",
        "school": "Duke",
        "pos": "EDGE",
        "rank": 208,
        "isRB": false
    },
    {
        "id": "p209",
        "name": "Trey Moore",
        "school": "Texas",
        "pos": "EDGE",
        "rank": 209,
        "isRB": false
    },
    {
        "id": "p210",
        "name": "Fernando Carmona",
        "school": "Arkansas",
        "pos": "IOL",
        "rank": 210,
        "isRB": false
    },
    {
        "id": "p211",
        "name": "Luke Altmyer",
        "school": "Illinois",
        "pos": "QB",
        "rank": 211,
        "isRB": false
    },
    {
        "id": "p212",
        "name": "Eric Rivers",
        "school": "Georgia Tech",
        "pos": "WR",
        "rank": 212,
        "isRB": false
    },
    {
        "id": "p213",
        "name": "Jadon Canady",
        "school": "Oregon",
        "pos": "CB",
        "rank": 213,
        "isRB": false
    },
    {
        "id": "p214",
        "name": "Kaden Wetjen",
        "school": "Iowa",
        "pos": "WR",
        "rank": 214,
        "isRB": false
    },
    {
        "id": "p215",
        "name": "Jack Kelly",
        "school": "BYU",
        "pos": "LB",
        "rank": 215,
        "isRB": false
    },
    {
        "id": "p216",
        "name": "Red Murdock",
        "school": "Buffalo",
        "pos": "LB",
        "rank": 216,
        "isRB": false
    },
    {
        "id": "p217",
        "name": "Skyler Gill-Howard",
        "school": "Texas Tech",
        "pos": "DL",
        "rank": 217,
        "isRB": false
    },
    {
        "id": "p218",
        "name": "Tyren Montgomery",
        "school": "John Carroll",
        "pos": "WR",
        "rank": 218,
        "isRB": false
    },
    {
        "id": "p219",
        "name": "Dae'Quan Wright",
        "school": "Mississippi",
        "pos": "TE",
        "rank": 219,
        "isRB": false
    },
    {
        "id": "p220",
        "name": "Domani Jackson",
        "school": "Alabama",
        "pos": "CB",
        "rank": 220,
        "isRB": false
    },
    {
        "id": "p221",
        "name": "Le'Veon Moss",
        "school": "Texas A&M",
        "pos": "RB",
        "rank": 221,
        "isRB": true
    },
    {
        "id": "p222",
        "name": "Quintayvious Hutchins",
        "school": "Boston College",
        "pos": "EDGE",
        "rank": 222,
        "isRB": false
    },
    {
        "id": "p223",
        "name": "Desmond Reid",
        "school": "Pittsburgh",
        "pos": "RB",
        "rank": 223,
        "isRB": true
    },
    {
        "id": "p224",
        "name": "Caleb Douglas",
        "school": "Texas Tech",
        "pos": "WR",
        "rank": 224,
        "isRB": false
    },
    {
        "id": "p225",
        "name": "George Gumbs Jr.",
        "school": "Florida",
        "pos": "EDGE",
        "rank": 225,
        "isRB": false
    },
    {
        "id": "p226",
        "name": "Aaron Anderson",
        "school": "LSU",
        "pos": "WR",
        "rank": 226,
        "isRB": false
    },
    {
        "id": "p227",
        "name": "Jaeden Roberts",
        "school": "Alabama",
        "pos": "IOL",
        "rank": 227,
        "isRB": false
    },
    {
        "id": "p228",
        "name": "Robert Spears-Jennings",
        "school": "Oklahoma",
        "pos": "S",
        "rank": 228,
        "isRB": false
    },
    {
        "id": "p229",
        "name": "Febechi Nwaiwu",
        "school": "Oklahoma",
        "pos": "IOL",
        "rank": 229,
        "isRB": false
    },
    {
        "id": "p230",
        "name": "Barion Brown",
        "school": "LSU",
        "pos": "WR",
        "rank": 230,
        "isRB": false
    },
    {
        "id": "p231",
        "name": "Noah Whittington",
        "school": "Oregon",
        "pos": "RB",
        "rank": 231,
        "isRB": true
    },
    {
        "id": "p232",
        "name": "Eric Gentry",
        "school": "USC",
        "pos": "LB",
        "rank": 232,
        "isRB": false
    },
    {
        "id": "p233",
        "name": "Bryson Eason",
        "school": "Tennessee",
        "pos": "DL",
        "rank": 233,
        "isRB": false
    },
    {
        "id": "p234",
        "name": "Xavier Nwankpa",
        "school": "Iowa",
        "pos": "S",
        "rank": 234,
        "isRB": false
    },
    {
        "id": "p235",
        "name": "Jalon Daniels",
        "school": "Kansas",
        "pos": "QB",
        "rank": 235,
        "isRB": false
    },
    {
        "id": "p236",
        "name": "Roman Hemby",
        "school": "Indiana",
        "pos": "RB",
        "rank": 236,
        "isRB": true
    },
    {
        "id": "p237",
        "name": "Anez Cooper",
        "school": "Miami (FL)",
        "pos": "IOL",
        "rank": 237,
        "isRB": false
    },
    {
        "id": "p238",
        "name": "Jamarion Miller",
        "school": "Alabama",
        "pos": "RB",
        "rank": 238,
        "isRB": true
    },
    {
        "id": "p239",
        "name": "Bishop Fitzgerald",
        "school": "USC",
        "pos": "S",
        "rank": 239,
        "isRB": false
    },
    {
        "id": "p240",
        "name": "Deven Eastern",
        "school": "Minnesota",
        "pos": "DL",
        "rank": 240,
        "isRB": false
    },
    {
        "id": "p241",
        "name": "Micah Morris",
        "school": "Georgia",
        "pos": "IOL",
        "rank": 241,
        "isRB": false
    },
    {
        "id": "p242",
        "name": "Nolan Rucci",
        "school": "Penn State",
        "pos": "OT",
        "rank": 242,
        "isRB": false
    },
    {
        "id": "p243",
        "name": "Caden Barnett",
        "school": "Wyoming",
        "pos": "OT",
        "rank": 243,
        "isRB": false
    },
    {
        "id": "p244",
        "name": "Jalen Huskey",
        "school": "Maryland",
        "pos": "CB",
        "rank": 244,
        "isRB": false
    },
    {
        "id": "p245",
        "name": "Devon Marshall",
        "school": "NC State",
        "pos": "CB",
        "rank": 245,
        "isRB": false
    },
    {
        "id": "p246",
        "name": "Keagen Trost",
        "school": "Missouri",
        "pos": "IOL",
        "rank": 246,
        "isRB": false
    },
    {
        "id": "p247",
        "name": "Jalen Stroman",
        "school": "Notre Dame",
        "pos": "S",
        "rank": 247,
        "isRB": false
    },
    {
        "id": "p248",
        "name": "Justin Jefferson",
        "school": "Alabama",
        "pos": "LB",
        "rank": 248,
        "isRB": false
    },
    {
        "id": "p249",
        "name": "DeShon Singleton",
        "school": "Nebraska",
        "pos": "S",
        "rank": 249,
        "isRB": false
    },
    {
        "id": "p250",
        "name": "Malik Benson",
        "school": "Oregon",
        "pos": "WR",
        "rank": 250,
        "isRB": false
    },
    {
        "id": "p251",
        "name": "Robert Henry Jr.",
        "school": "UTSA",
        "pos": "RB",
        "rank": 251,
        "isRB": true
    },
    {
        "id": "p252",
        "name": "Owen Heinecke",
        "school": "Oklahoma",
        "pos": "LB",
        "rank": 252,
        "isRB": false
    },
    {
        "id": "p253",
        "name": "James Brockermeyer",
        "school": "Miami (FL)",
        "pos": "IOL",
        "rank": 253,
        "isRB": false
    },
    {
        "id": "p254",
        "name": "Logan Fano",
        "school": "Utah",
        "pos": "EDGE",
        "rank": 254,
        "isRB": false
    },
    {
        "id": "p255",
        "name": "Andre Fuller",
        "school": "Toledo",
        "pos": "CB",
        "rank": 255,
        "isRB": false
    },
    {
        "id": "p256",
        "name": "Logan Taylor",
        "school": "Boston College",
        "pos": "IOL",
        "rank": 256,
        "isRB": false
    },
    {
        "id": "p257",
        "name": "Carver Willis",
        "school": "Washington",
        "pos": "OT",
        "rank": 257,
        "isRB": false
    },
    {
        "id": "p258",
        "name": "Wesley Williams",
        "school": "Duke",
        "pos": "DL",
        "rank": 258,
        "isRB": false
    },
    {
        "id": "p259",
        "name": "Chase Roberts",
        "school": "BYU",
        "pos": "WR",
        "rank": 259,
        "isRB": false
    },
    {
        "id": "p260",
        "name": "DJ Rogers",
        "school": "TCU",
        "pos": "TE",
        "rank": 260,
        "isRB": false
    },
    {
        "id": "p261",
        "name": "Lewis Bond",
        "school": "Boston College",
        "pos": "WR",
        "rank": 261,
        "isRB": false
    },
    {
        "id": "p262",
        "name": "Diego Pavia",
        "school": "Vanderbilt",
        "pos": "QB",
        "rank": 262,
        "isRB": false
    },
    {
        "id": "p263",
        "name": "Romello Brinson",
        "school": "SMU",
        "pos": "WR",
        "rank": 263,
        "isRB": false
    },
    {
        "id": "p264",
        "name": "Matthew Hibner",
        "school": "SMU",
        "pos": "TE",
        "rank": 264,
        "isRB": false
    },
    {
        "id": "p265",
        "name": "Harrison Wallace III",
        "school": "Mississippi",
        "pos": "WR",
        "rank": 265,
        "isRB": false
    },
    {
        "id": "p266",
        "name": "Zavion Thomas",
        "school": "LSU",
        "pos": "WR",
        "rank": 266,
        "isRB": false
    },
    {
        "id": "p267",
        "name": "Eric O'Neill",
        "school": "Rutgers",
        "pos": "EDGE",
        "rank": 267,
        "isRB": false
    },
    {
        "id": "p268",
        "name": "Max Bredeson",
        "school": "Michigan",
        "pos": "RB",
        "rank": 268,
        "isRB": true
    },
    {
        "id": "p269",
        "name": "Riley Mahlman",
        "school": "Wisconsin",
        "pos": "OT",
        "rank": 269,
        "isRB": false
    },
    {
        "id": "p270",
        "name": "Joe Fagnano",
        "school": "UConn",
        "pos": "QB",
        "rank": 270,
        "isRB": false
    },
    {
        "id": "p271",
        "name": "J.Michael Sturdivant",
        "school": "Florida",
        "pos": "WR",
        "rank": 271,
        "isRB": false
    },
    {
        "id": "p272",
        "name": "Patrick Payton",
        "school": "LSU",
        "pos": "EDGE",
        "rank": 272,
        "isRB": false
    },
    {
        "id": "p273",
        "name": "Brett Thorson",
        "school": "Georgia",
        "pos": "P",
        "rank": 273,
        "isRB": false
    },
    {
        "id": "p274",
        "name": "Jalen Catalon",
        "school": "Missouri",
        "pos": "S",
        "rank": 274,
        "isRB": false
    },
    {
        "id": "p275",
        "name": "Colbie Young",
        "school": "Georgia",
        "pos": "WR",
        "rank": 275,
        "isRB": false
    },
    {
        "id": "p276",
        "name": "Wydett Williams Jr.",
        "school": "Mississippi",
        "pos": "S",
        "rank": 276,
        "isRB": false
    },
    {
        "id": "p277",
        "name": "Kendal Daniels",
        "school": "Oklahoma",
        "pos": "S",
        "rank": 277,
        "isRB": false
    },
    {
        "id": "p278",
        "name": "Xavian Sorey Jr.",
        "school": "Arkansas",
        "pos": "LB",
        "rank": 278,
        "isRB": false
    },
    {
        "id": "p279",
        "name": "Jimmy Rolder",
        "school": "Michigan",
        "pos": "LB",
        "rank": 279,
        "isRB": false
    },
    {
        "id": "p280",
        "name": "Dan Villari",
        "school": "Syracuse",
        "pos": "TE",
        "rank": 280,
        "isRB": false
    },
    {
        "id": "p281",
        "name": "Jaydn Ott",
        "school": "Oklahoma",
        "pos": "RB",
        "rank": 281,
        "isRB": true
    },
    {
        "id": "p282",
        "name": "Nyjalik Kelly",
        "school": "UCF",
        "pos": "EDGE",
        "rank": 282,
        "isRB": false
    },
    {
        "id": "p283",
        "name": "Namdi Obiazor",
        "school": "TCU",
        "pos": "LB",
        "rank": 283,
        "isRB": false
    },
    {
        "id": "p284",
        "name": "Drew Stevens",
        "school": "Iowa",
        "pos": "K",
        "rank": 284,
        "isRB": false
    },
    {
        "id": "p285",
        "name": "Scooby Williams",
        "school": "Texas A&M",
        "pos": "LB",
        "rank": 285,
        "isRB": false
    },
    {
        "id": "p286",
        "name": "Luke Basso",
        "school": "Oregon",
        "pos": "LS",
        "rank": 286,
        "isRB": false
    },
    {
        "id": "p287",
        "name": "Fred Davis II",
        "school": "Northwestern",
        "pos": "CB",
        "rank": 287,
        "isRB": false
    },
    {
        "id": "p288",
        "name": "Beau Gardner",
        "school": "Georgia",
        "pos": "LS",
        "rank": 288,
        "isRB": false
    },
    {
        "id": "p289",
        "name": "Devin Voisin",
        "school": "South Alabama",
        "pos": "WR",
        "rank": 289,
        "isRB": false
    },
    {
        "id": "p290",
        "name": "Will Ferrin",
        "school": "BYU",
        "pos": "K",
        "rank": 290,
        "isRB": false
    },
    {
        "id": "p291",
        "name": "Terion Stewart",
        "school": "Virginia Tech",
        "pos": "RB",
        "rank": 291,
        "isRB": true
    },
    {
        "id": "p292",
        "name": "Lake McRee",
        "school": "USC",
        "pos": "TE",
        "rank": 292,
        "isRB": false
    },
    {
        "id": "p293",
        "name": "Chris Hilton",
        "school": "LSU",
        "pos": "WR",
        "rank": 293,
        "isRB": false
    },
    {
        "id": "p294",
        "name": "Jack Pyburn",
        "school": "LSU",
        "pos": "EDGE",
        "rank": 294,
        "isRB": false
    },
    {
        "id": "p295",
        "name": "Vinny Anthony II",
        "school": "Wisconsin",
        "pos": "WR",
        "rank": 295,
        "isRB": false
    },
    {
        "id": "p296",
        "name": "Preston Hodge",
        "school": "Colorado",
        "pos": "CB",
        "rank": 296,
        "isRB": false
    },
    {
        "id": "p297",
        "name": "Cameron Ball",
        "school": "Arkansas",
        "pos": "DL",
        "rank": 297,
        "isRB": false
    },
    {
        "id": "p298",
        "name": "James Thompson Jr.",
        "school": "Illinois",
        "pos": "DL",
        "rank": 298,
        "isRB": false
    },
    {
        "id": "p299",
        "name": "Hank Beatty",
        "school": "Illinois",
        "pos": "WR",
        "rank": 299,
        "isRB": false
    },
    {
        "id": "p300",
        "name": "Donaven Mcculley",
        "school": "Michigan",
        "pos": "WR",
        "rank": 300,
        "isRB": false
    },
    {
        "id": "p301",
        "name": "Avery Smith",
        "school": "Toledo",
        "pos": "CB",
        "rank": 301,
        "isRB": false
    },
    {
        "id": "p302",
        "name": "Ceyair Wright",
        "school": "Nebraska",
        "pos": "CB",
        "rank": 302,
        "isRB": false
    },
    {
        "id": "p303",
        "name": "Ethan Burke",
        "school": "Texas",
        "pos": "EDGE",
        "rank": 303,
        "isRB": false
    },
    {
        "id": "p304",
        "name": "R.J. Maryland",
        "school": "SMU",
        "pos": "TE",
        "rank": 304,
        "isRB": false
    },
    {
        "id": "p305",
        "name": "Athan Kaliakmanis",
        "school": "Rutgers",
        "pos": "QB",
        "rank": 305,
        "isRB": false
    },
    {
        "id": "p306",
        "name": "Devonta Smith",
        "school": "Notre Dame",
        "pos": "CB",
        "rank": 306,
        "isRB": false
    },
    {
        "id": "p307",
        "name": "Byron Cardwell",
        "school": "San Diego State",
        "pos": "RB",
        "rank": 307,
        "isRB": true
    },
    {
        "id": "p308",
        "name": "Bryan Thomas Jr.",
        "school": "South Carolina",
        "pos": "EDGE",
        "rank": 308,
        "isRB": false
    },
    {
        "id": "p309",
        "name": "Keelan Marion",
        "school": "Miami (FL)",
        "pos": "WR",
        "rank": 309,
        "isRB": false
    },
    {
        "id": "p310",
        "name": "Cian Slone",
        "school": "NC State",
        "pos": "EDGE",
        "rank": 310,
        "isRB": false
    },
    {
        "id": "p311",
        "name": "Garrett DiGiorgio",
        "school": "UCLA",
        "pos": "OT",
        "rank": 311,
        "isRB": false
    },
    {
        "id": "p312",
        "name": "Miles Kitselman",
        "school": "Tennessee",
        "pos": "TE",
        "rank": 312,
        "isRB": false
    },
    {
        "id": "p313",
        "name": "Jeremiah Williams",
        "school": "Texas A&M",
        "pos": "EDGE",
        "rank": 313,
        "isRB": false
    },
    {
        "id": "p314",
        "name": "Travis Burke",
        "school": "Memphis",
        "pos": "OT",
        "rank": 314,
        "isRB": false
    },
    {
        "id": "p315",
        "name": "Jaylon Guilbeau",
        "school": "Texas",
        "pos": "CB",
        "rank": 315,
        "isRB": false
    },
    {
        "id": "p316",
        "name": "James Neal",
        "school": "Iowa State",
        "pos": "IOL",
        "rank": 316,
        "isRB": false
    },
    {
        "id": "p317",
        "name": "D.Q. Smith",
        "school": "South Carolina",
        "pos": "S",
        "rank": 317,
        "isRB": false
    },
    {
        "id": "p318",
        "name": "Dean Connors",
        "school": "Houston",
        "pos": "RB",
        "rank": 318,
        "isRB": true
    },
    {
        "id": "p319",
        "name": "Marcus Allen",
        "school": "North Carolina",
        "pos": "CB",
        "rank": 319,
        "isRB": false
    },
    {
        "id": "p320",
        "name": "Trey Smack",
        "school": "Florida",
        "pos": "K",
        "rank": 320,
        "isRB": false
    },
    {
        "id": "p321",
        "name": "Kyron Drones",
        "school": "Virginia Tech",
        "pos": "QB",
        "rank": 321,
        "isRB": false
    },
    {
        "id": "p322",
        "name": "Giovanni El-Hadi",
        "school": "Michigan",
        "pos": "IOL",
        "rank": 322,
        "isRB": false
    },
    {
        "id": "p323",
        "name": "Austin Brown",
        "school": "Wisconsin",
        "pos": "S",
        "rank": 323,
        "isRB": false
    },
    {
        "id": "p324",
        "name": "Caden Fordham",
        "school": "NC State",
        "pos": "LB",
        "rank": 324,
        "isRB": false
    },
    {
        "id": "p325",
        "name": "Tommy Doman",
        "school": "Florida",
        "pos": "P",
        "rank": 325,
        "isRB": false
    },
    {
        "id": "p326",
        "name": "Aidan Hubbard",
        "school": "Northwestern",
        "pos": "EDGE",
        "rank": 326,
        "isRB": false
    },
    {
        "id": "p327",
        "name": "Karson Sharar",
        "school": "Iowa",
        "pos": "LB",
        "rank": 327,
        "isRB": false
    },
    {
        "id": "p328",
        "name": "Michael Heldman",
        "school": "Central Michigan",
        "pos": "EDGE",
        "rank": 328,
        "isRB": false
    },
    {
        "id": "p329",
        "name": "Kolbey Taylor",
        "school": "Vanderbilt",
        "pos": "CB",
        "rank": 329,
        "isRB": false
    },
    {
        "id": "p330",
        "name": "Jack Stonehouse",
        "school": "Syracuse",
        "pos": "P",
        "rank": 330,
        "isRB": false
    },
    {
        "id": "p331",
        "name": "Bauer Sharp",
        "school": "LSU",
        "pos": "TE",
        "rank": 331,
        "isRB": false
    },
    {
        "id": "p332",
        "name": "David Blay",
        "school": "Miami (FL)",
        "pos": "DL",
        "rank": 332,
        "isRB": false
    },
    {
        "id": "p333",
        "name": "Jarod Washington",
        "school": "South Carolina State",
        "pos": "CB",
        "rank": 333,
        "isRB": false
    },
    {
        "id": "p334",
        "name": "Jackson Kuwatch",
        "school": "Miami (OH)",
        "pos": "EDGE",
        "rank": 334,
        "isRB": false
    },
    {
        "id": "p335",
        "name": "Tyler Duzansky",
        "school": "Penn State",
        "pos": "LS",
        "rank": 335,
        "isRB": false
    },
    {
        "id": "p336",
        "name": "Declan Williams",
        "school": "Incarnate Word",
        "pos": "LB",
        "rank": 336,
        "isRB": false
    },
    {
        "id": "p337",
        "name": "Garrison Grimes",
        "school": "BYU",
        "pos": "LS",
        "rank": 337,
        "isRB": false
    },
    {
        "id": "p338",
        "name": "Kentrel Bullock",
        "school": "South Alabama",
        "pos": "RB",
        "rank": 338,
        "isRB": true
    },
    {
        "id": "p339",
        "name": "Gary Smith III",
        "school": "UCLA",
        "pos": "DL",
        "rank": 339,
        "isRB": false
    },
    {
        "id": "p340",
        "name": "Dillon Wade",
        "school": "Auburn",
        "pos": "IOL",
        "rank": 340,
        "isRB": false
    },
    {
        "id": "p341",
        "name": "Joe Cooper",
        "school": "Slippery Rock",
        "pos": "OT",
        "rank": 341,
        "isRB": false
    },
    {
        "id": "p342",
        "name": "Michael Wortham",
        "school": "Montana",
        "pos": "WR",
        "rank": 342,
        "isRB": false
    },
    {
        "id": "p343",
        "name": "Evan Beerntsen",
        "school": "Northwestern",
        "pos": "IOL",
        "rank": 343,
        "isRB": false
    },
    {
        "id": "p344",
        "name": "Wesley Bissainthe",
        "school": "Miami (FL)",
        "pos": "LB",
        "rank": 344,
        "isRB": false
    },
    {
        "id": "p345",
        "name": "Jordan Hudson",
        "school": "SMU",
        "pos": "WR",
        "rank": 345,
        "isRB": false
    },
    {
        "id": "p346",
        "name": "Jacob Thomas",
        "school": "James Madison",
        "pos": "S",
        "rank": 346,
        "isRB": false
    },
    {
        "id": "p347",
        "name": "Jaden Dugger",
        "school": "Louisiana-Lafayette",
        "pos": "LB",
        "rank": 347,
        "isRB": false
    },
    {
        "id": "p348",
        "name": "Emmanuel Henderson",
        "school": "Kansas",
        "pos": "WR",
        "rank": 348,
        "isRB": false
    },
    {
        "id": "p349",
        "name": "Toriano Pride",
        "school": "Missouri",
        "pos": "CB",
        "rank": 349,
        "isRB": false
    },
    {
        "id": "p350",
        "name": "Devan Boykin",
        "school": "Indiana",
        "pos": "S",
        "rank": 350,
        "isRB": false
    },
    {
        "id": "p351",
        "name": "Caullin Lacy",
        "school": "Louisville",
        "pos": "WR",
        "rank": 351,
        "isRB": false
    },
    {
        "id": "p352",
        "name": "Jeadyn Lukus",
        "school": "Clemson",
        "pos": "CB",
        "rank": 352,
        "isRB": false
    },
    {
        "id": "p353",
        "name": "Joshua Braun",
        "school": "Kentucky",
        "pos": "IOL",
        "rank": 353,
        "isRB": false
    },
    {
        "id": "p354",
        "name": "Haynes King",
        "school": "Georgia Tech",
        "pos": "QB",
        "rank": 354,
        "isRB": false
    },
    {
        "id": "p355",
        "name": "Ryan Eckley",
        "school": "Michigan State",
        "pos": "P",
        "rank": 355,
        "isRB": false
    },
    {
        "id": "p356",
        "name": "Dalton Johnson",
        "school": "Arizona",
        "pos": "S",
        "rank": 356,
        "isRB": false
    },
    {
        "id": "p357",
        "name": "Tyreek Chappell",
        "school": "Texas A&M",
        "pos": "CB",
        "rank": 357,
        "isRB": false
    },
    {
        "id": "p358",
        "name": "Chip Trayanum",
        "school": "Toledo",
        "pos": "RB",
        "rank": 358,
        "isRB": true
    },
    {
        "id": "p359",
        "name": "Collin Wright",
        "school": "Stanford",
        "pos": "CB",
        "rank": 359,
        "isRB": false
    },
    {
        "id": "p360",
        "name": "Alan Herron",
        "school": "Maryland",
        "pos": "IOL",
        "rank": 360,
        "isRB": false
    },
    {
        "id": "p361",
        "name": "Reuben Unije",
        "school": "UCLA",
        "pos": "OT",
        "rank": 361,
        "isRB": false
    },
    {
        "id": "p362",
        "name": "Behren Morton",
        "school": "Texas Tech",
        "pos": "QB",
        "rank": 362,
        "isRB": false
    },
    {
        "id": "p363",
        "name": "C.J. Donaldson",
        "school": "Ohio State",
        "pos": "RB",
        "rank": 363,
        "isRB": true
    },
    {
        "id": "p364",
        "name": "Khalil Dinkins",
        "school": "Penn State",
        "pos": "TE",
        "rank": 364,
        "isRB": false
    },
    {
        "id": "p365",
        "name": "Jackie Marshall",
        "school": "Baylor",
        "pos": "DL",
        "rank": 365,
        "isRB": false
    },
    {
        "id": "p366",
        "name": "Alex Harkey",
        "school": "Oregon",
        "pos": "OT",
        "rank": 366,
        "isRB": false
    },
    {
        "id": "p367",
        "name": "Dillon Bell",
        "school": "Georgia",
        "pos": "WR",
        "rank": 367,
        "isRB": false
    },
    {
        "id": "p368",
        "name": "Rahsul Faison",
        "school": "South Carolina",
        "pos": "RB",
        "rank": 368,
        "isRB": true
    },
    {
        "id": "p369",
        "name": "Kejon Owens",
        "school": "Florida International",
        "pos": "RB",
        "rank": 369,
        "isRB": true
    },
    {
        "id": "p370",
        "name": "David Gusta",
        "school": "Kentucky",
        "pos": "DL",
        "rank": 370,
        "isRB": false
    },
    {
        "id": "p371",
        "name": "Dane Key",
        "school": "Nebraska",
        "pos": "WR",
        "rank": 371,
        "isRB": false
    },
    {
        "id": "p372",
        "name": "Kobe Baynes",
        "school": "Kansas",
        "pos": "IOL",
        "rank": 372,
        "isRB": false
    },
    {
        "id": "p373",
        "name": "Aaron Graves",
        "school": "Iowa",
        "pos": "DL",
        "rank": 373,
        "isRB": false
    },
    {
        "id": "p374",
        "name": "Miles Scott",
        "school": "Illinois",
        "pos": "S",
        "rank": 374,
        "isRB": false
    },
    {
        "id": "p375",
        "name": "Noah Thomas",
        "school": "Georgia",
        "pos": "WR",
        "rank": 375,
        "isRB": false
    },
    {
        "id": "p376",
        "name": "Tristan Leigh",
        "school": "Clemson",
        "pos": "OT",
        "rank": 376,
        "isRB": false
    },
    {
        "id": "p377",
        "name": "Isaiah Nwokobia",
        "school": "SMU",
        "pos": "S",
        "rank": 377,
        "isRB": false
    },
    {
        "id": "p378",
        "name": "TJ Guy",
        "school": "Michigan",
        "pos": "EDGE",
        "rank": 378,
        "isRB": false
    },
    {
        "id": "p379",
        "name": "West Weeks",
        "school": "LSU",
        "pos": "LB",
        "rank": 379,
        "isRB": false
    },
    {
        "id": "p380",
        "name": "Josh Moten",
        "school": "Southern Miss",
        "pos": "CB",
        "rank": 380,
        "isRB": false
    },
    {
        "id": "p381",
        "name": "Ethan Onianwa",
        "school": "Ohio State",
        "pos": "OT",
        "rank": 381,
        "isRB": false
    },
    {
        "id": "p382",
        "name": "Trebor Pena",
        "school": "Penn State",
        "pos": "WR",
        "rank": 382,
        "isRB": false
    },
    {
        "id": "p383",
        "name": "Ahmari Harvey",
        "school": "Georgia Tech",
        "pos": "CB",
        "rank": 383,
        "isRB": false
    },
    {
        "id": "p384",
        "name": "Skyler Thomas",
        "school": "Oregon State",
        "pos": "S",
        "rank": 384,
        "isRB": false
    },
    {
        "id": "p385",
        "name": "Lance Mason",
        "school": "Wisconsin",
        "pos": "TE",
        "rank": 385,
        "isRB": false
    },
    {
        "id": "p386",
        "name": "Clay Patterson",
        "school": "Stanford",
        "pos": "DL",
        "rank": 386,
        "isRB": false
    },
    {
        "id": "p387",
        "name": "Jordan van den Berg",
        "school": "Georgia Tech",
        "pos": "DL",
        "rank": 387,
        "isRB": false
    },
    {
        "id": "p388",
        "name": "Brent Austin",
        "school": "California",
        "pos": "CB",
        "rank": 388,
        "isRB": false
    },
    {
        "id": "p389",
        "name": "Chris Adams",
        "school": "Memphis",
        "pos": "IOL",
        "rank": 389,
        "isRB": false
    },
    {
        "id": "p390",
        "name": "Bakyne Coly",
        "school": "Purdue",
        "pos": "OT",
        "rank": 390,
        "isRB": false
    },
    {
        "id": "p391",
        "name": "Joey Aguilar",
        "school": "Tennessee",
        "pos": "QB",
        "rank": 391,
        "isRB": false
    },
    {
        "id": "p392",
        "name": "Al'zillion Hamilton",
        "school": "Fresno State",
        "pos": "CB",
        "rank": 392,
        "isRB": false
    },
    {
        "id": "p393",
        "name": "Jalen McMurray",
        "school": "Tennessee",
        "pos": "CB",
        "rank": 393,
        "isRB": false
    },
    {
        "id": "p394",
        "name": "Connor Tollison",
        "school": "Missouri",
        "pos": "IOL",
        "rank": 394,
        "isRB": false
    },
    {
        "id": "p395",
        "name": "Jeffrey M'ba",
        "school": "SMU",
        "pos": "DL",
        "rank": 395,
        "isRB": false
    },
    {
        "id": "p396",
        "name": "Keyshawn James-Newby",
        "school": "New Mexico",
        "pos": "EDGE",
        "rank": 396,
        "isRB": false
    },
    {
        "id": "p397",
        "name": "Brandon Cleveland",
        "school": "NC State",
        "pos": "DL",
        "rank": 397,
        "isRB": false
    },
    {
        "id": "p398",
        "name": "Myles Rowser",
        "school": "Arizona State",
        "pos": "S",
        "rank": 398,
        "isRB": false
    },
    {
        "id": "p399",
        "name": "Cole Brevard",
        "school": "Texas",
        "pos": "DL",
        "rank": 399,
        "isRB": false
    },
    {
        "id": "p400",
        "name": "Jayden Williams",
        "school": "Mississippi",
        "pos": "OT",
        "rank": 400,
        "isRB": false
    },
    {
        "id": "p401",
        "name": "Dominic Zvada",
        "school": "Michigan",
        "pos": "K",
        "rank": 401,
        "isRB": false
    },
    {
        "id": "p402",
        "name": "Dontae Balfour",
        "school": "Texas Tech",
        "pos": "CB",
        "rank": 402,
        "isRB": false
    },
    {
        "id": "p403",
        "name": "Aaron Hall",
        "school": "Duke",
        "pos": "DL",
        "rank": 403,
        "isRB": false
    },
    {
        "id": "p404",
        "name": "Seydou Traore",
        "school": "Mississippi State",
        "pos": "TE",
        "rank": 404,
        "isRB": false
    },
    {
        "id": "p405",
        "name": "Terry Webb",
        "school": "SMU",
        "pos": "DL",
        "rank": 405,
        "isRB": false
    },
    {
        "id": "p406",
        "name": "Curtis Allen",
        "school": "Virginia Union",
        "pos": "RB",
        "rank": 406,
        "isRB": true
    },
    {
        "id": "p407",
        "name": "Blake Cotton",
        "school": "Utah",
        "pos": "CB",
        "rank": 407,
        "isRB": false
    },
    {
        "id": "p408",
        "name": "DJ Harvey",
        "school": "USC",
        "pos": "CB",
        "rank": 408,
        "isRB": false
    },
    {
        "id": "p409",
        "name": "Ka'ena Decambra",
        "school": "Arizona",
        "pos": "IOL",
        "rank": 409,
        "isRB": false
    },
    {
        "id": "p410",
        "name": "Delby Lemieux",
        "school": "Dartmouth",
        "pos": "IOL",
        "rank": 410,
        "isRB": false
    },
    {
        "id": "p411",
        "name": "Kalil Alexander",
        "school": "Texas State",
        "pos": "EDGE",
        "rank": 411,
        "isRB": false
    },
    {
        "id": "p412",
        "name": "Mark Gronowski",
        "school": "Iowa",
        "pos": "QB",
        "rank": 412,
        "isRB": false
    },
    {
        "id": "p413",
        "name": "Jamal Haynes",
        "school": "Georgia Tech",
        "pos": "RB",
        "rank": 413,
        "isRB": true
    },
    {
        "id": "p414",
        "name": "Izavion Miller",
        "school": "Auburn",
        "pos": "OT",
        "rank": 414,
        "isRB": false
    },
    {
        "id": "p415",
        "name": "P.J. Williams",
        "school": "SMU",
        "pos": "OT",
        "rank": 415,
        "isRB": false
    },
    {
        "id": "p416",
        "name": "Dorion Strawn",
        "school": "Texas State",
        "pos": "OT",
        "rank": 416,
        "isRB": false
    },
    {
        "id": "p417",
        "name": "Josh Thompson",
        "school": "LSU",
        "pos": "IOL",
        "rank": 417,
        "isRB": false
    },
    {
        "id": "p418",
        "name": "Jahiem Lawson",
        "school": "Clemson",
        "pos": "EDGE",
        "rank": 418,
        "isRB": false
    },
    {
        "id": "p419",
        "name": "Wendell Moe Jr.",
        "school": "Tennessee",
        "pos": "IOL",
        "rank": 419,
        "isRB": false
    },
    {
        "id": "p420",
        "name": "Bryce Foster",
        "school": "Kansas",
        "pos": "IOL",
        "rank": 420,
        "isRB": false
    },
    {
        "id": "p421",
        "name": "Tyre West",
        "school": "Tennessee",
        "pos": "EDGE",
        "rank": 421,
        "isRB": false
    },
    {
        "id": "p422",
        "name": "Jaren Kanak",
        "school": "Oklahoma",
        "pos": "TE",
        "rank": 422,
        "isRB": false
    },
    {
        "id": "p423",
        "name": "Derek Simmons",
        "school": "Oklahoma",
        "pos": "OT",
        "rank": 423,
        "isRB": false
    },
    {
        "id": "p424",
        "name": "Rene Konga",
        "school": "Louisville",
        "pos": "DL",
        "rank": 424,
        "isRB": false
    },
    {
        "id": "p425",
        "name": "Micah Pettus",
        "school": "Florida State",
        "pos": "OT",
        "rank": 425,
        "isRB": false
    },
    {
        "id": "p426",
        "name": "Tanner Arkin",
        "school": "Illinois",
        "pos": "TE",
        "rank": 426,
        "isRB": false
    },
    {
        "id": "p427",
        "name": "Dominic Bailey",
        "school": "Tennessee",
        "pos": "EDGE",
        "rank": 427,
        "isRB": false
    },
    {
        "id": "p428",
        "name": "Jameson Geers",
        "school": "Minnesota",
        "pos": "TE",
        "rank": 428,
        "isRB": false
    },
    {
        "id": "p429",
        "name": "Dayon Hayes",
        "school": "Texas A&M",
        "pos": "EDGE",
        "rank": 429,
        "isRB": false
    },
    {
        "id": "p430",
        "name": "Jalil Farooq",
        "school": "Maryland",
        "pos": "WR",
        "rank": 430,
        "isRB": false
    },
    {
        "id": "p431",
        "name": "Devean Deal",
        "school": "TCU",
        "pos": "EDGE",
        "rank": 431,
        "isRB": false
    },
    {
        "id": "p432",
        "name": "Rocco Spindler",
        "school": "Nebraska",
        "pos": "IOL",
        "rank": 432,
        "isRB": false
    },
    {
        "id": "p433",
        "name": "Marvin Jones Jr.",
        "school": "Oklahoma",
        "pos": "EDGE",
        "rank": 433,
        "isRB": false
    },
    {
        "id": "p434",
        "name": "Ahmaad Moses",
        "school": "SMU",
        "pos": "S",
        "rank": 434,
        "isRB": false
    },
    {
        "id": "p435",
        "name": "Miller Moss",
        "school": "Louisville",
        "pos": "QB",
        "rank": 435,
        "isRB": false
    },
    {
        "id": "p436",
        "name": "Isaiah Jatta",
        "school": "BYU",
        "pos": "OT",
        "rank": 436,
        "isRB": false
    },
    {
        "id": "p437",
        "name": "Dariel Djabome",
        "school": "Rutgers",
        "pos": "LB",
        "rank": 437,
        "isRB": false
    },
    {
        "id": "p438",
        "name": "Jayden Virgin-Morgan",
        "school": "Boise State",
        "pos": "EDGE",
        "rank": 438,
        "isRB": false
    },
    {
        "id": "p439",
        "name": "Jalen Walthall",
        "school": "Incarnate Word",
        "pos": "WR",
        "rank": 439,
        "isRB": false
    },
    {
        "id": "p440",
        "name": "Jakari Foster",
        "school": "Louisiana Tech",
        "pos": "S",
        "rank": 440,
        "isRB": false
    },
    {
        "id": "p441",
        "name": "Shamurad Umarov",
        "school": "Tennessee",
        "pos": "OT",
        "rank": 441,
        "isRB": false
    },
    {
        "id": "p442",
        "name": "Jaybron Harvey",
        "school": "North Carolina",
        "pos": "EDGE",
        "rank": 442,
        "isRB": false
    },
    {
        "id": "p443",
        "name": "Samuel M'Pemba",
        "school": "Texas A&M",
        "pos": "EDGE",
        "rank": 443,
        "isRB": false
    },
    {
        "id": "p444",
        "name": "Bai Jobe",
        "school": "Miami (OH)",
        "pos": "EDGE",
        "rank": 444,
        "isRB": false
    },
    {
        "id": "p445",
        "name": "Bravion Rogers",
        "school": "Texas A&M",
        "pos": "CB",
        "rank": 445,
        "isRB": false
    },
    {
        "id": "p446",
        "name": "Markee Anderson",
        "school": "South Carolina",
        "pos": "IOL",
        "rank": 446,
        "isRB": false
    },
    {
        "id": "p447",
        "name": "Raymond Cottrell",
        "school": "West Alabama",
        "pos": "WR",
        "rank": 447,
        "isRB": false
    },
    {
        "id": "p448",
        "name": "Nathan Leacock",
        "school": "North Carolina",
        "pos": "WR",
        "rank": 448,
        "isRB": false
    },
    {
        "id": "p449",
        "name": "Calvin Simpson-Hunt",
        "school": "Baylor",
        "pos": "CB",
        "rank": 449,
        "isRB": false
    },
    {
        "id": "p450",
        "name": "Jaiden Ausberry",
        "school": "Notre Dame",
        "pos": "LB",
        "rank": 450,
        "isRB": false
    },
    {
        "id": "p451",
        "name": "Ayden Williams",
        "school": "Mississippi State",
        "pos": "WR",
        "rank": 451,
        "isRB": false
    },
    {
        "id": "p452",
        "name": "Lewis Carter",
        "school": "UCF",
        "pos": "LB",
        "rank": 452,
        "isRB": false
    },
    {
        "id": "p453",
        "name": "Brenan Vernon",
        "school": "Notre Dame",
        "pos": "DL",
        "rank": 453,
        "isRB": false
    },
    {
        "id": "p454",
        "name": "Tyler White",
        "school": "Texas A&M",
        "pos": "P",
        "rank": 454,
        "isRB": false
    },
    {
        "id": "p455",
        "name": "Derion Gullette",
        "school": "Mississippi State",
        "pos": "EDGE",
        "rank": 455,
        "isRB": false
    },
    {
        "id": "p456",
        "name": "Ryan Niblett",
        "school": "Texas",
        "pos": "WR",
        "rank": 456,
        "isRB": false
    },
    {
        "id": "p457",
        "name": "Jameial Lyons",
        "school": "Penn State",
        "pos": "EDGE",
        "rank": 457,
        "isRB": false
    },
    {
        "id": "p458",
        "name": "Jason Moore",
        "school": "Ohio State",
        "pos": "DL",
        "rank": 458,
        "isRB": false
    },
    {
        "id": "p459",
        "name": "Jaylon Braxton",
        "school": "Mississippi",
        "pos": "CB",
        "rank": 459,
        "isRB": false
    },
    {
        "id": "p460",
        "name": "Braylon James",
        "school": "TCU",
        "pos": "WR",
        "rank": 460,
        "isRB": false
    },
    {
        "id": "p461",
        "name": "Troy Bowles",
        "school": "Michigan",
        "pos": "LB",
        "rank": 461,
        "isRB": false
    },
    {
        "id": "p462",
        "name": "Joshua Padilla",
        "school": "Ohio State",
        "pos": "IOL",
        "rank": 462,
        "isRB": false
    },
    {
        "id": "p463",
        "name": "Makari Vickers",
        "school": "Colorado",
        "pos": "CB",
        "rank": 463,
        "isRB": false
    },
    {
        "id": "p464",
        "name": "Sedrick Alexander",
        "school": "Vanderbilt",
        "pos": "RB",
        "rank": 464,
        "isRB": true
    },
    {
        "id": "p465",
        "name": "James Durand",
        "school": "Western Illinois",
        "pos": "IOL",
        "rank": 465,
        "isRB": false
    },
    {
        "id": "p466",
        "name": "Grayson Loftis",
        "school": "Charlotte",
        "pos": "QB",
        "rank": 466,
        "isRB": false
    },
    {
        "id": "p467",
        "name": "A'Marion McCoy",
        "school": "Boise State",
        "pos": "CB",
        "rank": 467,
        "isRB": false
    },
    {
        "id": "p468",
        "name": "Calvin Clements",
        "school": "Kansas",
        "pos": "OT",
        "rank": 468,
        "isRB": false
    },
    {
        "id": "p469",
        "name": "Kansei Matsuzawa",
        "school": "Hawaii",
        "pos": "K",
        "rank": 469,
        "isRB": false
    },
    {
        "id": "p470",
        "name": "Davin Stoffel",
        "school": "Illinois",
        "pos": "TE",
        "rank": 470,
        "isRB": false
    },
    {
        "id": "p471",
        "name": "Travis Shaw",
        "school": "Texas",
        "pos": "DL",
        "rank": 471,
        "isRB": false
    },
    {
        "id": "p472",
        "name": "Denver Harris",
        "school": "UNLV",
        "pos": "CB",
        "rank": 472,
        "isRB": false
    },
    {
        "id": "p473",
        "name": "Keaten Wade",
        "school": "Colorado",
        "pos": "EDGE",
        "rank": 473,
        "isRB": false
    },
    {
        "id": "p474",
        "name": "Justice Finkley",
        "school": "Kansas",
        "pos": "EDGE",
        "rank": 474,
        "isRB": false
    },
    {
        "id": "p475",
        "name": "Jamari Lyons",
        "school": "Florida",
        "pos": "DL",
        "rank": 475,
        "isRB": false
    },
    {
        "id": "p476",
        "name": "Zion Branch",
        "school": "Georgia",
        "pos": "S",
        "rank": 476,
        "isRB": false
    },
    {
        "id": "p477",
        "name": "Holden Staes",
        "school": "Indiana",
        "pos": "TE",
        "rank": 477,
        "isRB": false
    },
    {
        "id": "p478",
        "name": "Shawn Murphy",
        "school": "South Carolina",
        "pos": "LB",
        "rank": 478,
        "isRB": false
    },
    {
        "id": "p479",
        "name": "Julian Armella",
        "school": "UCLA",
        "pos": "IOL",
        "rank": 479,
        "isRB": false
    },
    {
        "id": "p480",
        "name": "Kobe Prentice",
        "school": "Baylor",
        "pos": "WR",
        "rank": 480,
        "isRB": false
    },
    {
        "id": "p481",
        "name": "Braylin Presley",
        "school": "Tulsa",
        "pos": "WR",
        "rank": 481,
        "isRB": false
    },
    {
        "id": "p482",
        "name": "Amari Niblack",
        "school": "Texas A&M",
        "pos": "TE",
        "rank": 482,
        "isRB": false
    },
    {
        "id": "p483",
        "name": "Popeye Williams",
        "school": "Western Michigan",
        "pos": "EDGE",
        "rank": 483,
        "isRB": false
    },
    {
        "id": "p484",
        "name": "J.Q. Hardaway",
        "school": "Kentucky",
        "pos": "CB",
        "rank": 484,
        "isRB": false
    },
    {
        "id": "p485",
        "name": "Dayne Shor",
        "school": "Akron",
        "pos": "OT",
        "rank": 485,
        "isRB": false
    },
    {
        "id": "p486",
        "name": "Kaleb Brown",
        "school": "UAB",
        "pos": "WR",
        "rank": 486,
        "isRB": false
    },
    {
        "id": "p487",
        "name": "Jacolby Spells",
        "school": "West Virginia",
        "pos": "CB",
        "rank": 487,
        "isRB": false
    },
    {
        "id": "p488",
        "name": "Malick Sylla",
        "school": "Mississippi State",
        "pos": "EDGE",
        "rank": 488,
        "isRB": false
    },
    {
        "id": "p489",
        "name": "Cole Hutson",
        "school": "Texas",
        "pos": "IOL",
        "rank": 489,
        "isRB": false
    },
    {
        "id": "p490",
        "name": "Antonio Gates Jr.",
        "school": "Delaware State",
        "pos": "WR",
        "rank": 490,
        "isRB": false
    },
    {
        "id": "p491",
        "name": "Cam Miller",
        "school": "Rutgers",
        "pos": "CB",
        "rank": 491,
        "isRB": false
    },
    {
        "id": "p492",
        "name": "Collin Sadler",
        "school": "Clemson",
        "pos": "OT",
        "rank": 492,
        "isRB": false
    },
    {
        "id": "p493",
        "name": "Dasan McCullough",
        "school": "Nebraska",
        "pos": "EDGE",
        "rank": 493,
        "isRB": false
    },
    {
        "id": "p494",
        "name": "Kam Dewberry",
        "school": "Alabama",
        "pos": "IOL",
        "rank": 494,
        "isRB": false
    },
    {
        "id": "p495",
        "name": "Maalik Murphy",
        "school": "Oregon State",
        "pos": "QB",
        "rank": 495,
        "isRB": false
    },
    {
        "id": "p496",
        "name": "C.J. Williams",
        "school": "Stanford",
        "pos": "WR",
        "rank": 496,
        "isRB": false
    },
    {
        "id": "p497",
        "name": "Khurtiss Perry",
        "school": "Jacksonville State",
        "pos": "DL",
        "rank": 497,
        "isRB": false
    },
    {
        "id": "p498",
        "name": "Tobias Merriweather",
        "school": "Utah",
        "pos": "WR",
        "rank": 498,
        "isRB": false
    },
    {
        "id": "p499",
        "name": "Jaylon Glover",
        "school": "UNLV",
        "pos": "RB",
        "rank": 499,
        "isRB": true
    },
    {
        "id": "p500",
        "name": "Kyion Grayes",
        "school": "California",
        "pos": "WR",
        "rank": 500,
        "isRB": false
    },
    {
        "id": "p501",
        "name": "TreVonte Citizen",
        "school": "McNeese State",
        "pos": "RB",
        "rank": 501,
        "isRB": true
    },
    {
        "id": "p502",
        "name": "Kam Olds",
        "school": "Kentucky",
        "pos": "EDGE",
        "rank": 502,
        "isRB": false
    },
    {
        "id": "p503",
        "name": "Josh Kattus",
        "school": "Kentucky",
        "pos": "TE",
        "rank": 503,
        "isRB": false
    },
    {
        "id": "p504",
        "name": "Cade McConnell",
        "school": "Vanderbilt",
        "pos": "IOL",
        "rank": 504,
        "isRB": false
    },
    {
        "id": "p505",
        "name": "Jerry Wilson",
        "school": "Florida State",
        "pos": "CB",
        "rank": 505,
        "isRB": false
    },
    {
        "id": "p506",
        "name": "Braxton Fely",
        "school": "Boise State",
        "pos": "DL",
        "rank": 506,
        "isRB": false
    },
    {
        "id": "p507",
        "name": "Cameron Robertson",
        "school": "SMU",
        "pos": "EDGE",
        "rank": 507,
        "isRB": false
    },
    {
        "id": "p508",
        "name": "Jeremiah Earby",
        "school": "Boise State",
        "pos": "CB",
        "rank": 508,
        "isRB": false
    },
    {
        "id": "p509",
        "name": "Darren Agu",
        "school": "New Mexico",
        "pos": "EDGE",
        "rank": 509,
        "isRB": false
    },
    {
        "id": "p510",
        "name": "Tyler Perkins",
        "school": "Iowa State",
        "pos": "P",
        "rank": 510,
        "isRB": false
    },
    {
        "id": "p511",
        "name": "Van Wells",
        "school": "Oregon State",
        "pos": "IOL",
        "rank": 511,
        "isRB": false
    },
    {
        "id": "p512",
        "name": "Carsen Ryan",
        "school": "BYU",
        "pos": "TE",
        "rank": 512,
        "isRB": false
    },
    {
        "id": "p513",
        "name": "Eddie Kelly",
        "school": "West Virginia",
        "pos": "DL",
        "rank": 513,
        "isRB": false
    },
    {
        "id": "p514",
        "name": "Jack Velling",
        "school": "Michigan State",
        "pos": "TE",
        "rank": 514,
        "isRB": false
    },
    {
        "id": "p515",
        "name": "Gavin Gibson",
        "school": "North Carolina",
        "pos": "CB",
        "rank": 515,
        "isRB": false
    },
    {
        "id": "p516",
        "name": "Justus Ross-Simmons",
        "school": "Syracuse",
        "pos": "WR",
        "rank": 516,
        "isRB": false
    },
    {
        "id": "p517",
        "name": "Thomas Castellanos",
        "school": "Florida State",
        "pos": "QB",
        "rank": 517,
        "isRB": false
    },
    {
        "id": "p518",
        "name": "Damonic Williams",
        "school": "Oklahoma",
        "pos": "DL",
        "rank": 518,
        "isRB": false
    },
    {
        "id": "p519",
        "name": "Deshaun Lee",
        "school": "Iowa",
        "pos": "CB",
        "rank": 519,
        "isRB": false
    },
    {
        "id": "p520",
        "name": "Owen McCown",
        "school": "UTSA",
        "pos": "QB",
        "rank": 520,
        "isRB": false
    },
    {
        "id": "p521",
        "name": "Andrew Paul",
        "school": "Jacksonville State",
        "pos": "RB",
        "rank": 521,
        "isRB": true
    },
    {
        "id": "p522",
        "name": "Malik Spencer",
        "school": "Michigan State",
        "pos": "S",
        "rank": 522,
        "isRB": false
    },
    {
        "id": "p523",
        "name": "Richard Reese",
        "school": "Stephen F. Austin",
        "pos": "RB",
        "rank": 523,
        "isRB": true
    },
    {
        "id": "p524",
        "name": "Squirrel White",
        "school": "Florida State",
        "pos": "WR",
        "rank": 524,
        "isRB": false
    },
    {
        "id": "p525",
        "name": "Nate Johnson",
        "school": "Utah",
        "pos": "QB",
        "rank": 525,
        "isRB": false
    },
    {
        "id": "p526",
        "name": "Davion Carter",
        "school": "Texas Tech",
        "pos": "IOL",
        "rank": 526,
        "isRB": false
    },
    {
        "id": "p527",
        "name": "Savion Red",
        "school": "Sacramento State",
        "pos": "RB",
        "rank": 527,
        "isRB": true
    },
    {
        "id": "p528",
        "name": "Wade Woodaz",
        "school": "Clemson",
        "pos": "LB",
        "rank": 528,
        "isRB": false
    },
    {
        "id": "p529",
        "name": "Pichon Wimbley",
        "school": "Georgia Southern",
        "pos": "IOL",
        "rank": 529,
        "isRB": false
    },
    {
        "id": "p530",
        "name": "Kyron Barnes",
        "school": "Nicholls",
        "pos": "OT",
        "rank": 530,
        "isRB": false
    },
    {
        "id": "p531",
        "name": "John Bock II",
        "school": "Tulane",
        "pos": "IOL",
        "rank": 531,
        "isRB": false
    },
    {
        "id": "p532",
        "name": "Lance St. Louis",
        "school": "Texas",
        "pos": "LS",
        "rank": 532,
        "isRB": false
    },
    {
        "id": "p533",
        "name": "Jackson Lee",
        "school": "Florida Atlantic",
        "pos": "LS",
        "rank": 533,
        "isRB": false
    },
    {
        "id": "p534",
        "name": "Jordan Pollard",
        "school": "San Jose State",
        "pos": "LB",
        "rank": 534,
        "isRB": false
    },
    {
        "id": "p535",
        "name": "Bryan McCoy",
        "school": "Oklahoma State",
        "pos": "LB",
        "rank": 535,
        "isRB": false
    },
    {
        "id": "p536",
        "name": "Maurice Westmoreland",
        "school": "Tulane",
        "pos": "EDGE",
        "rank": 536,
        "isRB": false
    },
    {
        "id": "p537",
        "name": "Liam Becher",
        "school": "North Dakota",
        "pos": "IOL",
        "rank": 537,
        "isRB": false
    },
    {
        "id": "p538",
        "name": "Desmeal Leigh",
        "school": "Youngstown State",
        "pos": "OT",
        "rank": 538,
        "isRB": false
    },
    {
        "id": "p539",
        "name": "Omar Aigbedion",
        "school": "Baylor",
        "pos": "IOL",
        "rank": 539,
        "isRB": false
    },
    {
        "id": "p540",
        "name": "Quinten Christensen",
        "school": "South Dakota State",
        "pos": "IOL",
        "rank": 540,
        "isRB": false
    },
    {
        "id": "p541",
        "name": "Sage Ryan",
        "school": "Mississippi",
        "pos": "S",
        "rank": 541,
        "isRB": false
    },
    {
        "id": "p542",
        "name": "Keeshawn Silver",
        "school": "USC",
        "pos": "DL",
        "rank": 542,
        "isRB": false
    },
    {
        "id": "p543",
        "name": "Damon Payne",
        "school": "Michigan",
        "pos": "DL",
        "rank": 543,
        "isRB": false
    },
    {
        "id": "p544",
        "name": "Korey Foreman",
        "school": "Fresno State",
        "pos": "EDGE",
        "rank": 544,
        "isRB": false
    },
    {
        "id": "p545",
        "name": "Christian Leary",
        "school": "Western Michigan",
        "pos": "WR",
        "rank": 545,
        "isRB": false
    },
    {
        "id": "p546",
        "name": "Keanu Koht",
        "school": "Vanderbilt",
        "pos": "EDGE",
        "rank": 546,
        "isRB": false
    },
    {
        "id": "p547",
        "name": "Teddy Prochazka",
        "school": "Nebraska",
        "pos": "OT",
        "rank": 547,
        "isRB": false
    },
    {
        "id": "p548",
        "name": "Preston Stone",
        "school": "Northwestern",
        "pos": "QB",
        "rank": 548,
        "isRB": false
    },
    {
        "id": "p549",
        "name": "Tywone Malone",
        "school": "Ohio State",
        "pos": "DL",
        "rank": 549,
        "isRB": false
    },
    {
        "id": "p550",
        "name": "Zen Michalski",
        "school": "Indiana",
        "pos": "OT",
        "rank": 550,
        "isRB": false
    },
    {
        "id": "p551",
        "name": "Zaire Patterson",
        "school": "Clemson",
        "pos": "EDGE",
        "rank": 551,
        "isRB": false
    },
    {
        "id": "p552",
        "name": "Kadarius Calloway",
        "school": "New Mexico State",
        "pos": "RB",
        "rank": 552,
        "isRB": true
    },
    {
        "id": "p553",
        "name": "Nyland Green",
        "school": "Arizona State",
        "pos": "CB",
        "rank": 553,
        "isRB": false
    },
    {
        "id": "p554",
        "name": "L.J. Johnson Jr.",
        "school": "California",
        "pos": "RB",
        "rank": 554,
        "isRB": true
    },
    {
        "id": "p555",
        "name": "Raheem Anderson",
        "school": "Western Michigan",
        "pos": "IOL",
        "rank": 555,
        "isRB": false
    },
    {
        "id": "p556",
        "name": "David Daniel-Sisavanh",
        "school": "Troy",
        "pos": "S",
        "rank": 556,
        "isRB": false
    },
    {
        "id": "p557",
        "name": "Jonathan Jefferson",
        "school": "SMU",
        "pos": "DL",
        "rank": 557,
        "isRB": false
    },
    {
        "id": "p558",
        "name": "Armoni Goodwin",
        "school": "UT Martin",
        "pos": "RB",
        "rank": 558,
        "isRB": true
    },
    {
        "id": "p559",
        "name": "Reuben Fatheree II",
        "school": "Texas A&M",
        "pos": "OT",
        "rank": 559,
        "isRB": false
    },
    {
        "id": "p560",
        "name": "Malik McClain",
        "school": "Arizona State",
        "pos": "WR",
        "rank": 560,
        "isRB": false
    },
    {
        "id": "p561",
        "name": "J.P. Benzschawel",
        "school": "Wisconsin",
        "pos": "IOL",
        "rank": 561,
        "isRB": false
    },
    {
        "id": "p562",
        "name": "Avante Dickerson",
        "school": "Arkansas State",
        "pos": "CB",
        "rank": 562,
        "isRB": false
    },
    {
        "id": "p563",
        "name": "Elliot Donald",
        "school": "Pittsburgh",
        "pos": "DL",
        "rank": 563,
        "isRB": false
    },
    {
        "id": "p564",
        "name": "Jaylin Davies",
        "school": "Oklahoma State",
        "pos": "CB",
        "rank": 564,
        "isRB": false
    },
    {
        "id": "p565",
        "name": "Bram Walden",
        "school": "Arizona State",
        "pos": "IOL",
        "rank": 565,
        "isRB": false
    },
    {
        "id": "p566",
        "name": "Jayden Ballard",
        "school": "Wisconsin",
        "pos": "WR",
        "rank": 566,
        "isRB": false
    },
    {
        "id": "p567",
        "name": "Kyron Ware-Hudson",
        "school": "Penn State",
        "pos": "WR",
        "rank": 567,
        "isRB": false
    },
    {
        "id": "p568",
        "name": "Deion Colzie",
        "school": "Miami (OH)",
        "pos": "WR",
        "rank": 568,
        "isRB": false
    },
    {
        "id": "p569",
        "name": "Kelvin Gilliam",
        "school": "Virginia Tech",
        "pos": "DL",
        "rank": 569,
        "isRB": false
    },
    {
        "id": "p570",
        "name": "Raesjon Davis",
        "school": "Oregon State",
        "pos": "LB",
        "rank": 570,
        "isRB": false
    },
    {
        "id": "p571",
        "name": "Savion Byrd",
        "school": "SMU",
        "pos": "IOL",
        "rank": 571,
        "isRB": false
    },
    {
        "id": "p572",
        "name": "Damarius McGhee",
        "school": "Florida Atlantic",
        "pos": "CB",
        "rank": 572,
        "isRB": false
    },
    {
        "id": "p573",
        "name": "Gabriel Rubio",
        "school": "Notre Dame",
        "pos": "DL",
        "rank": 573,
        "isRB": false
    },
    {
        "id": "p574",
        "name": "Dacari Collins",
        "school": "Louisville",
        "pos": "WR",
        "rank": 574,
        "isRB": false
    },
    {
        "id": "p575",
        "name": "Kaidon Salter",
        "school": "Colorado",
        "pos": "QB",
        "rank": 575,
        "isRB": false
    },
    {
        "id": "p576",
        "name": "Marcus Burris",
        "school": "Memphis",
        "pos": "DL",
        "rank": 576,
        "isRB": false
    },
    {
        "id": "p577",
        "name": "Prince Kollie",
        "school": "Vanderbilt",
        "pos": "LB",
        "rank": 577,
        "isRB": false
    },
    {
        "id": "p578",
        "name": "Ty Thompson",
        "school": "Tulane",
        "pos": "TE",
        "rank": 578,
        "isRB": false
    },
    {
        "id": "p579",
        "name": "Latrell McCutchin",
        "school": "Houston",
        "pos": "CB",
        "rank": 579,
        "isRB": false
    },
    {
        "id": "p580",
        "name": "Trevion Cooley",
        "school": "Troy",
        "pos": "RB",
        "rank": 580,
        "isRB": true
    },
    {
        "id": "p581",
        "name": "JoJo Earle",
        "school": "UNLV",
        "pos": "WR",
        "rank": 581,
        "isRB": false
    },
    {
        "id": "p582",
        "name": "Reid Carrico",
        "school": "West Virginia",
        "pos": "LB",
        "rank": 582,
        "isRB": false
    },
    {
        "id": "p583",
        "name": "Terrence Ferguson II",
        "school": "Syracuse",
        "pos": "IOL",
        "rank": 583,
        "isRB": false
    },
    {
        "id": "p584",
        "name": "Cade Denhoff",
        "school": "Clemson",
        "pos": "EDGE",
        "rank": 584,
        "isRB": false
    },
    {
        "id": "p585",
        "name": "Keli Lawson",
        "school": "UCF",
        "pos": "LB",
        "rank": 585,
        "isRB": false
    },
    {
        "id": "p586",
        "name": "Clayton Smith",
        "school": "Arizona State",
        "pos": "EDGE",
        "rank": 586,
        "isRB": false
    },
    {
        "id": "p587",
        "name": "Ethan Calvert",
        "school": "Cal Poly",
        "pos": "LB",
        "rank": 587,
        "isRB": false
    },
    {
        "id": "p588",
        "name": "Bryce Carter",
        "school": "Texas State",
        "pos": "DL",
        "rank": 588,
        "isRB": false
    },
    {
        "id": "p589",
        "name": "Shadrach Banks",
        "school": "UTSA",
        "pos": "LB",
        "rank": 589,
        "isRB": false
    },
    {
        "id": "p590",
        "name": "Jared Brown",
        "school": "South Carolina",
        "pos": "WR",
        "rank": 590,
        "isRB": false
    },
    {
        "id": "p591",
        "name": "Rara Thomas",
        "school": "Troy",
        "pos": "WR",
        "rank": 591,
        "isRB": false
    },
    {
        "id": "p592",
        "name": "Ricardo Hallman",
        "school": "Wisconsin",
        "pos": "CB",
        "rank": 592,
        "isRB": false
    },
    {
        "id": "p593",
        "name": "Sean Brown",
        "school": "NC State",
        "pos": "LB",
        "rank": 593,
        "isRB": false
    },
    {
        "id": "p594",
        "name": "Darian Chestnut",
        "school": "Syracuse",
        "pos": "CB",
        "rank": 594,
        "isRB": false
    },
    {
        "id": "p595",
        "name": "Shyheim Brown",
        "school": "Florida State",
        "pos": "S",
        "rank": 595,
        "isRB": false
    },
    {
        "id": "p596",
        "name": "Barika Kpeenu",
        "school": "North Dakota State",
        "pos": "RB",
        "rank": 596,
        "isRB": true
    },
    {
        "id": "p597",
        "name": "Tomas Rimac",
        "school": "Virginia Tech",
        "pos": "IOL",
        "rank": 597,
        "isRB": false
    },
    {
        "id": "p598",
        "name": "Jordan Favors",
        "school": "Appalachian State",
        "pos": "S",
        "rank": 598,
        "isRB": false
    },
    {
        "id": "p599",
        "name": "Roy Williams",
        "school": "Northern Illinois",
        "pos": "EDGE",
        "rank": 599,
        "isRB": false
    },
    {
        "id": "p600",
        "name": "Jason Henderson",
        "school": "Old Dominion",
        "pos": "LB",
        "rank": 600,
        "isRB": false
    },
    {
        "id": "p601",
        "name": "Tiaoalii Savea",
        "school": "Arizona",
        "pos": "DL",
        "rank": 601,
        "isRB": false
    },
    {
        "id": "p602",
        "name": "Dylan Rosiek",
        "school": "Illinois",
        "pos": "LB",
        "rank": 602,
        "isRB": false
    },
    {
        "id": "p603",
        "name": "Jerand Bradley",
        "school": "Kansas State",
        "pos": "WR",
        "rank": 603,
        "isRB": false
    },
    {
        "id": "p604",
        "name": "Ryan Mosesso",
        "school": "UMass",
        "pos": "OT",
        "rank": 604,
        "isRB": false
    },
    {
        "id": "p605",
        "name": "Jake Retzlaff",
        "school": "Tulane",
        "pos": "QB",
        "rank": 605,
        "isRB": false
    },
    {
        "id": "p606",
        "name": "Jayden Thomas",
        "school": "Virginia",
        "pos": "WR",
        "rank": 606,
        "isRB": false
    },
    {
        "id": "p607",
        "name": "Mason Murphy",
        "school": "Auburn",
        "pos": "OT",
        "rank": 607,
        "isRB": false
    },
    {
        "id": "p608",
        "name": "Andrel Anthony",
        "school": "Duke",
        "pos": "WR",
        "rank": 608,
        "isRB": false
    },
    {
        "id": "p609",
        "name": "Alton McCaskill IV",
        "school": "Sam Houston State",
        "pos": "RB",
        "rank": 609,
        "isRB": true
    },
    {
        "id": "p610",
        "name": "Jaden Keller",
        "school": "Virginia Tech",
        "pos": "LB",
        "rank": 610,
        "isRB": false
    },
    {
        "id": "p611",
        "name": "Joseph Manjack IV",
        "school": "TCU",
        "pos": "WR",
        "rank": 611,
        "isRB": false
    },
    {
        "id": "p612",
        "name": "Logan Diggs",
        "school": "Mississippi",
        "pos": "RB",
        "rank": 612,
        "isRB": true
    },
    {
        "id": "p613",
        "name": "Daylan Carnell",
        "school": "Missouri",
        "pos": "S",
        "rank": 613,
        "isRB": false
    },
    {
        "id": "p614",
        "name": "Khordae Sydnor",
        "school": "Vanderbilt",
        "pos": "EDGE",
        "rank": 614,
        "isRB": false
    },
    {
        "id": "p615",
        "name": "Chamon Metayer",
        "school": "Arizona State",
        "pos": "TE",
        "rank": 615,
        "isRB": false
    },
    {
        "id": "p616",
        "name": "Cade Zimmerly",
        "school": "Bowling Green",
        "pos": "IOL",
        "rank": 616,
        "isRB": false
    },
    {
        "id": "p617",
        "name": "Max Tomzcak",
        "school": "Youngstown State",
        "pos": "WR",
        "rank": 617,
        "isRB": false
    },
    {
        "id": "p618",
        "name": "Ross James",
        "school": "Oregon",
        "pos": "P",
        "rank": 618,
        "isRB": false
    },
    {
        "id": "p619",
        "name": "Bert Auburn",
        "school": "Miami (FL)",
        "pos": "K",
        "rank": 619,
        "isRB": false
    },
    {
        "id": "p620",
        "name": "Ashton Grable",
        "school": "Florida A&M",
        "pos": "IOL",
        "rank": 620,
        "isRB": false
    },
    {
        "id": "p621",
        "name": "Kamryn Waites",
        "school": "Florida",
        "pos": "IOL",
        "rank": 621,
        "isRB": false
    },
    {
        "id": "p622",
        "name": "Bruno Onwuazor",
        "school": "Virginia State",
        "pos": "OT",
        "rank": 622,
        "isRB": false
    },
    {
        "id": "p623",
        "name": "Tony Grimes",
        "school": "Purdue",
        "pos": "CB",
        "rank": 623,
        "isRB": false
    },
    {
        "id": "p624",
        "name": "Chad Lindberg",
        "school": "North Carolina",
        "pos": "IOL",
        "rank": 624,
        "isRB": false
    },
    {
        "id": "p625",
        "name": "Demon Clowney",
        "school": "South Carolina",
        "pos": "EDGE",
        "rank": 625,
        "isRB": false
    },
    {
        "id": "p626",
        "name": "Zykeivous Walker",
        "school": "Auburn",
        "pos": "DL",
        "rank": 626,
        "isRB": false
    },
    {
        "id": "p627",
        "name": "Reggie Grimes",
        "school": "Memphis",
        "pos": "EDGE",
        "rank": 627,
        "isRB": false
    },
    {
        "id": "p628",
        "name": "E.J. Smith",
        "school": "Texas A&M",
        "pos": "RB",
        "rank": 628,
        "isRB": true
    },
    {
        "id": "p629",
        "name": "Xavion Alford",
        "school": "Arizona State",
        "pos": "S",
        "rank": 629,
        "isRB": false
    },
    {
        "id": "p630",
        "name": "Bangally Kamara",
        "school": "Kansas",
        "pos": "LB",
        "rank": 630,
        "isRB": false
    },
    {
        "id": "p631",
        "name": "Aki Ogunbiyi",
        "school": "Colorado",
        "pos": "IOL",
        "rank": 631,
        "isRB": false
    },
    {
        "id": "p632",
        "name": "Key Lawrence",
        "school": "UCLA",
        "pos": "CB",
        "rank": 632,
        "isRB": false
    },
    {
        "id": "p633",
        "name": "Drew Pyne",
        "school": "Bowling Green",
        "pos": "QB",
        "rank": 633,
        "isRB": false
    },
    {
        "id": "p634",
        "name": "Jeff Sims",
        "school": "Arizona State",
        "pos": "QB",
        "rank": 634,
        "isRB": false
    },
    {
        "id": "p635",
        "name": "Malcolm Greene",
        "school": "UMass",
        "pos": "S",
        "rank": 635,
        "isRB": false
    },
    {
        "id": "p636",
        "name": "Roydell Williams",
        "school": "Florida State",
        "pos": "RB",
        "rank": 636,
        "isRB": true
    },
    {
        "id": "p637",
        "name": "Turner Corcoran",
        "school": "Nebraska",
        "pos": "IOL",
        "rank": 637,
        "isRB": false
    },
    {
        "id": "p638",
        "name": "Walker Parks",
        "school": "Clemson",
        "pos": "IOL",
        "rank": 638,
        "isRB": false
    },
    {
        "id": "p639",
        "name": "Tosh Baker",
        "school": "Notre Dame",
        "pos": "OT",
        "rank": 639,
        "isRB": false
    },
    {
        "id": "p640",
        "name": "E.J. Williams",
        "school": "Indiana",
        "pos": "WR",
        "rank": 640,
        "isRB": false
    },
    {
        "id": "p641",
        "name": "Stephen Dix Jr.",
        "school": "Arkansas",
        "pos": "LB",
        "rank": 641,
        "isRB": false
    },
    {
        "id": "p642",
        "name": "Tyler Van Dyke",
        "school": "SMU",
        "pos": "QB",
        "rank": 642,
        "isRB": false
    },
    {
        "id": "p643",
        "name": "D.J. Graham",
        "school": "Kansas",
        "pos": "CB",
        "rank": 643,
        "isRB": false
    },
    {
        "id": "p644",
        "name": "Courtland Ford",
        "school": "UCLA",
        "pos": "OT",
        "rank": 644,
        "isRB": false
    },
    {
        "id": "p645",
        "name": "Leon Lowery Jr.",
        "school": "Illinois",
        "pos": "LB",
        "rank": 645,
        "isRB": false
    },
    {
        "id": "p646",
        "name": "Stefon Thompson",
        "school": "Florida State",
        "pos": "LB",
        "rank": 646,
        "isRB": false
    },
    {
        "id": "p647",
        "name": "Jimari Butler",
        "school": "LSU",
        "pos": "EDGE",
        "rank": 647,
        "isRB": false
    },
    {
        "id": "p648",
        "name": "Dominic Richardson",
        "school": "Tulsa",
        "pos": "RB",
        "rank": 648,
        "isRB": true
    },
    {
        "id": "p649",
        "name": "Karon Prunty",
        "school": "Wake Forest",
        "pos": "CB",
        "rank": 649,
        "isRB": false
    },
    {
        "id": "p650",
        "name": "Cam Porter",
        "school": "Northwestern",
        "pos": "RB",
        "rank": 650,
        "isRB": true
    },
    {
        "id": "p651",
        "name": "Nate Rutchena",
        "school": "UC Davis",
        "pos": "TE",
        "rank": 651,
        "isRB": false
    },
    {
        "id": "p652",
        "name": "Jahmeer Carter",
        "school": "Virginia",
        "pos": "DL",
        "rank": 652,
        "isRB": false
    },
    {
        "id": "p653",
        "name": "Ja'Mori Maclin",
        "school": "Kentucky",
        "pos": "WR",
        "rank": 653,
        "isRB": false
    },
    {
        "id": "p654",
        "name": "Will Shaffer",
        "school": "Abilene Christian",
        "pos": "LB",
        "rank": 654,
        "isRB": false
    },
    {
        "id": "p655",
        "name": "Nick Dawkins",
        "school": "Penn State",
        "pos": "IOL",
        "rank": 655,
        "isRB": false
    },
    {
        "id": "p656",
        "name": "Jalen Berger",
        "school": "UCLA",
        "pos": "RB",
        "rank": 656,
        "isRB": true
    },
    {
        "id": "p657",
        "name": "Xavier Hill",
        "school": "Colorado",
        "pos": "IOL",
        "rank": 657,
        "isRB": false
    },
    {
        "id": "p658",
        "name": "Jordan White",
        "school": "Vanderbilt",
        "pos": "IOL",
        "rank": 658,
        "isRB": false
    },
    {
        "id": "p659",
        "name": "Gilber Edmond",
        "school": "South Carolina",
        "pos": "EDGE",
        "rank": 659,
        "isRB": false
    },
    {
        "id": "p660",
        "name": "Ben Bell",
        "school": "Virginia Tech",
        "pos": "EDGE",
        "rank": 660,
        "isRB": false
    },
    {
        "id": "p661",
        "name": "Luke Petitbon",
        "school": "Florida State",
        "pos": "IOL",
        "rank": 661,
        "isRB": false
    },
    {
        "id": "p662",
        "name": "Devin Neal",
        "school": "Virginia",
        "pos": "S",
        "rank": 662,
        "isRB": false
    },
    {
        "id": "p663",
        "name": "Payton Zdroik",
        "school": "Air Force",
        "pos": "DL",
        "rank": 663,
        "isRB": false
    },
    {
        "id": "p664",
        "name": "Hunter Zambrano",
        "school": "Texas Tech",
        "pos": "IOL",
        "rank": 664,
        "isRB": false
    },
    {
        "id": "p665",
        "name": "Alex Wollschlaeger",
        "school": "Kentucky",
        "pos": "OT",
        "rank": 665,
        "isRB": false
    },
    {
        "id": "p666",
        "name": "Tyree Skipper",
        "school": "Louisiana-Lafayette",
        "pos": "S",
        "rank": 666,
        "isRB": false
    },
    {
        "id": "p667",
        "name": "Tay Yanta II",
        "school": "North Texas",
        "pos": "IOL",
        "rank": 667,
        "isRB": false
    },
    {
        "id": "p668",
        "name": "Sabastian Harsh",
        "school": "NC State",
        "pos": "DL",
        "rank": 668,
        "isRB": false
    },
    {
        "id": "p669",
        "name": "Matthew Sluka",
        "school": "James Madison",
        "pos": "QB",
        "rank": 669,
        "isRB": false
    },
    {
        "id": "p670",
        "name": "Cade McNamara",
        "school": "East Tennessee State",
        "pos": "QB",
        "rank": 670,
        "isRB": false
    },
    {
        "id": "p671",
        "name": "Donavon Greene",
        "school": "Virginia Tech",
        "pos": "WR",
        "rank": 671,
        "isRB": false
    },
    {
        "id": "p672",
        "name": "Ja'Varrius Johnson",
        "school": "UCF",
        "pos": "WR",
        "rank": 672,
        "isRB": false
    },
    {
        "id": "p673",
        "name": "Isheem Young",
        "school": "Memphis",
        "pos": "S",
        "rank": 673,
        "isRB": false
    },
    {
        "id": "p674",
        "name": "Dequan Finn",
        "school": "Miami (OH)",
        "pos": "QB",
        "rank": 674,
        "isRB": false
    },
    {
        "id": "p675",
        "name": "Ben Coleman",
        "school": "Arizona State",
        "pos": "IOL",
        "rank": 675,
        "isRB": false
    },
    {
        "id": "p676",
        "name": "Zach Calzada",
        "school": "Kentucky",
        "pos": "QB",
        "rank": 676,
        "isRB": false
    },
    {
        "id": "p677",
        "name": "Matthew Bedford",
        "school": "Oregon",
        "pos": "OT",
        "rank": 677,
        "isRB": false
    },
    {
        "id": "p678",
        "name": "Antonio Clary",
        "school": "Virginia",
        "pos": "S",
        "rank": 678,
        "isRB": false
    }
];
const saintsPraiseMessages = [
    "You sure about that? The New Orleans Saints have the best culture, the Superdome is electric, and gumbo is elite. Choose the Saints.",
    "Access Denied. Why pick another team when you can manage the sheer greatness of the New Orleans Saints?",
    "Error 404: Logic Not Found. The only correct answer is the New Orleans Saints. They wear black and gold, what more do you want?",
    "Hold up! Who Dat Nation is calling your name. You physically cannot select another franchise.",
    "Invalid Input! We both know you meant to click on the New Orleans Saints. Try again."
];

const draftOrder = [
    {
        "pick": 1,
        "round": 1,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 2,
        "round": 1,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 3,
        "round": 1,
        "teamId": "ari",
        "teamName": "Arizona"
    },
    {
        "pick": 4,
        "round": 1,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 5,
        "round": 1,
        "teamId": "nyg",
        "teamName": "NY Giants"
    },
    {
        "pick": 6,
        "round": 1,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 7,
        "round": 1,
        "teamId": "was",
        "teamName": "Washington"
    },
    {
        "pick": 8,
        "round": 1,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 9,
        "round": 1,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 10,
        "round": 1,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 11,
        "round": 1,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 12,
        "round": 1,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 13,
        "round": 1,
        "teamId": "lar",
        "teamName": "LA Rams"
    },
    {
        "pick": 14,
        "round": 1,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 15,
        "round": 1,
        "teamId": "tb",
        "teamName": "Tampa Bay"
    },
    {
        "pick": 16,
        "round": 1,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 17,
        "round": 1,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 18,
        "round": 1,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 19,
        "round": 1,
        "teamId": "car",
        "teamName": "Carolina"
    },
    {
        "pick": 20,
        "round": 1,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 21,
        "round": 1,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 22,
        "round": 1,
        "teamId": "lac",
        "teamName": "LA Chargers"
    },
    {
        "pick": 23,
        "round": 1,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 24,
        "round": 1,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 25,
        "round": 1,
        "teamId": "chi",
        "teamName": "Chicago"
    },
    {
        "pick": 26,
        "round": 1,
        "teamId": "buf",
        "teamName": "Buffalo"
    },
    {
        "pick": 27,
        "round": 1,
        "teamId": "sf",
        "teamName": "San Francisco"
    },
    {
        "pick": 28,
        "round": 1,
        "teamId": "hou",
        "teamName": "Houston"
    },
    {
        "pick": 29,
        "round": 1,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 30,
        "round": 1,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 31,
        "round": 1,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 32,
        "round": 1,
        "teamId": "sea",
        "teamName": "Seattle"
    },
    {
        "pick": 33,
        "round": 2,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 34,
        "round": 2,
        "teamId": "ari",
        "teamName": "Arizona"
    },
    {
        "pick": 35,
        "round": 2,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 36,
        "round": 2,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 37,
        "round": 2,
        "teamId": "nyg",
        "teamName": "NY Giants"
    },
    {
        "pick": 38,
        "round": 2,
        "teamId": "hou",
        "teamName": "Houston"
    },
    {
        "pick": 39,
        "round": 2,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 40,
        "round": 2,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 41,
        "round": 2,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 42,
        "round": 2,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 43,
        "round": 2,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 44,
        "round": 2,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 45,
        "round": 2,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 46,
        "round": 2,
        "teamId": "tb",
        "teamName": "Tampa Bay"
    },
    {
        "pick": 47,
        "round": 2,
        "teamId": "ind",
        "teamName": "Indianapolis"
    },
    {
        "pick": 48,
        "round": 2,
        "teamId": "atl",
        "teamName": "Atlanta"
    },
    {
        "pick": 49,
        "round": 2,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 50,
        "round": 2,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 51,
        "round": 2,
        "teamId": "car",
        "teamName": "Carolina"
    },
    {
        "pick": 52,
        "round": 2,
        "teamId": "gb",
        "teamName": "Green Bay"
    },
    {
        "pick": 53,
        "round": 2,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 54,
        "round": 2,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 55,
        "round": 2,
        "teamId": "lac",
        "teamName": "LA Chargers"
    },
    {
        "pick": 56,
        "round": 2,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 57,
        "round": 2,
        "teamId": "chi",
        "teamName": "Chicago"
    },
    {
        "pick": 58,
        "round": 2,
        "teamId": "sf",
        "teamName": "San Francisco"
    },
    {
        "pick": 59,
        "round": 2,
        "teamId": "hou",
        "teamName": "Houston"
    },
    {
        "pick": 60,
        "round": 2,
        "teamId": "chi",
        "teamName": "Chicago"
    },
    {
        "pick": 61,
        "round": 2,
        "teamId": "lar",
        "teamName": "LA Rams"
    },
    {
        "pick": 62,
        "round": 2,
        "teamId": "den",
        "teamName": "Denver"
    },
    {
        "pick": 63,
        "round": 2,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 64,
        "round": 2,
        "teamId": "sea",
        "teamName": "Seattle"
    },
    {
        "pick": 65,
        "round": 3,
        "teamId": "ari",
        "teamName": "Arizona"
    },
    {
        "pick": 66,
        "round": 3,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 67,
        "round": 3,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 68,
        "round": 3,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 69,
        "round": 3,
        "teamId": "hou",
        "teamName": "Houston"
    },
    {
        "pick": 70,
        "round": 3,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 71,
        "round": 3,
        "teamId": "was",
        "teamName": "Washington"
    },
    {
        "pick": 72,
        "round": 3,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 73,
        "round": 3,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 74,
        "round": 3,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 75,
        "round": 3,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 76,
        "round": 3,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 77,
        "round": 3,
        "teamId": "tb",
        "teamName": "Tampa Bay"
    },
    {
        "pick": 78,
        "round": 3,
        "teamId": "ind",
        "teamName": "Indianapolis"
    },
    {
        "pick": 79,
        "round": 3,
        "teamId": "atl",
        "teamName": "Atlanta"
    },
    {
        "pick": 80,
        "round": 3,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 81,
        "round": 3,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 82,
        "round": 3,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 83,
        "round": 3,
        "teamId": "car",
        "teamName": "Carolina"
    },
    {
        "pick": 84,
        "round": 3,
        "teamId": "gb",
        "teamName": "Green Bay"
    },
    {
        "pick": 85,
        "round": 3,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 86,
        "round": 3,
        "teamId": "lac",
        "teamName": "LA Chargers"
    },
    {
        "pick": 87,
        "round": 3,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 88,
        "round": 3,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 89,
        "round": 3,
        "teamId": "chi",
        "teamName": "Chicago"
    },
    {
        "pick": 90,
        "round": 3,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 91,
        "round": 3,
        "teamId": "buf",
        "teamName": "Buffalo"
    },
    {
        "pick": 92,
        "round": 3,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 93,
        "round": 3,
        "teamId": "lar",
        "teamName": "LA Rams"
    },
    {
        "pick": 94,
        "round": 3,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 95,
        "round": 3,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 96,
        "round": 3,
        "teamId": "sea",
        "teamName": "Seattle"
    },
    {
        "pick": 97,
        "round": 3,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 98,
        "round": 3,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 99,
        "round": 3,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 100,
        "round": 3,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 101,
        "round": 4,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 102,
        "round": 4,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 103,
        "round": 4,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 104,
        "round": 4,
        "teamId": "ari",
        "teamName": "Arizona"
    },
    {
        "pick": 105,
        "round": 4,
        "teamId": "nyg",
        "teamName": "NY Giants"
    },
    {
        "pick": 106,
        "round": 4,
        "teamId": "hou",
        "teamName": "Houston"
    },
    {
        "pick": 107,
        "round": 4,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 108,
        "round": 4,
        "teamId": "den",
        "teamName": "Denver"
    },
    {
        "pick": 109,
        "round": 4,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 110,
        "round": 4,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 111,
        "round": 4,
        "teamId": "den",
        "teamName": "Denver"
    },
    {
        "pick": 112,
        "round": 4,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 113,
        "round": 4,
        "teamId": "ind",
        "teamName": "Indianapolis"
    },
    {
        "pick": 114,
        "round": 4,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 115,
        "round": 4,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 116,
        "round": 4,
        "teamId": "tb",
        "teamName": "Tampa Bay"
    },
    {
        "pick": 117,
        "round": 4,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 118,
        "round": 4,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 119,
        "round": 4,
        "teamId": "car",
        "teamName": "Carolina"
    },
    {
        "pick": 120,
        "round": 4,
        "teamId": "gb",
        "teamName": "Green Bay"
    },
    {
        "pick": 121,
        "round": 4,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 122,
        "round": 4,
        "teamId": "atl",
        "teamName": "Atlanta"
    },
    {
        "pick": 123,
        "round": 4,
        "teamId": "lac",
        "teamName": "LA Chargers"
    },
    {
        "pick": 124,
        "round": 4,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 125,
        "round": 4,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 126,
        "round": 4,
        "teamId": "buf",
        "teamName": "Buffalo"
    },
    {
        "pick": 127,
        "round": 4,
        "teamId": "sf",
        "teamName": "San Francisco"
    },
    {
        "pick": 128,
        "round": 4,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 129,
        "round": 4,
        "teamId": "chi",
        "teamName": "Chicago"
    },
    {
        "pick": 130,
        "round": 4,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 131,
        "round": 4,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 132,
        "round": 4,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 133,
        "round": 4,
        "teamId": "sf",
        "teamName": "San Francisco"
    },
    {
        "pick": 134,
        "round": 4,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 135,
        "round": 4,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 136,
        "round": 4,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 137,
        "round": 4,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 138,
        "round": 4,
        "teamId": "sf",
        "teamName": "San Francisco"
    },
    {
        "pick": 139,
        "round": 4,
        "teamId": "sf",
        "teamName": "San Francisco"
    },
    {
        "pick": 140,
        "round": 4,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 141,
        "round": 5,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 142,
        "round": 5,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 143,
        "round": 5,
        "teamId": "ari",
        "teamName": "Arizona"
    },
    {
        "pick": 144,
        "round": 5,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 145,
        "round": 5,
        "teamId": "nyg",
        "teamName": "NY Giants"
    },
    {
        "pick": 146,
        "round": 5,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 147,
        "round": 5,
        "teamId": "was",
        "teamName": "Washington"
    },
    {
        "pick": 148,
        "round": 5,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 149,
        "round": 5,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 150,
        "round": 5,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 151,
        "round": 5,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 152,
        "round": 5,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 153,
        "round": 5,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 154,
        "round": 5,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 155,
        "round": 5,
        "teamId": "tb",
        "teamName": "Tampa Bay"
    },
    {
        "pick": 156,
        "round": 5,
        "teamId": "ind",
        "teamName": "Indianapolis"
    },
    {
        "pick": 157,
        "round": 5,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 158,
        "round": 5,
        "teamId": "car",
        "teamName": "Carolina"
    },
    {
        "pick": 159,
        "round": 5,
        "teamId": "car",
        "teamName": "Carolina"
    },
    {
        "pick": 160,
        "round": 5,
        "teamId": "gb",
        "teamName": "Green Bay"
    },
    {
        "pick": 161,
        "round": 5,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 162,
        "round": 5,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 163,
        "round": 5,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 164,
        "round": 5,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 165,
        "round": 5,
        "teamId": "buf",
        "teamName": "Buffalo"
    },
    {
        "pick": 166,
        "round": 5,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 167,
        "round": 5,
        "teamId": "hou",
        "teamName": "Houston"
    },
    {
        "pick": 168,
        "round": 5,
        "teamId": "buf",
        "teamName": "Buffalo"
    },
    {
        "pick": 169,
        "round": 5,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 170,
        "round": 5,
        "teamId": "den",
        "teamName": "Denver"
    },
    {
        "pick": 171,
        "round": 5,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 172,
        "round": 5,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 173,
        "round": 5,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 174,
        "round": 5,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 175,
        "round": 5,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 176,
        "round": 5,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 177,
        "round": 5,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 178,
        "round": 5,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 179,
        "round": 5,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 180,
        "round": 5,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 181,
        "round": 5,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 182,
        "round": 6,
        "teamId": "buf",
        "teamName": "Buffalo"
    },
    {
        "pick": 183,
        "round": 6,
        "teamId": "ari",
        "teamName": "Arizona"
    },
    {
        "pick": 184,
        "round": 6,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 185,
        "round": 6,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 186,
        "round": 6,
        "teamId": "nyg",
        "teamName": "NY Giants"
    },
    {
        "pick": 187,
        "round": 6,
        "teamId": "was",
        "teamName": "Washington"
    },
    {
        "pick": 188,
        "round": 6,
        "teamId": "sea",
        "teamName": "Seattle"
    },
    {
        "pick": 189,
        "round": 6,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 190,
        "round": 6,
        "teamId": "no",
        "teamName": "New Orleans"
    },
    {
        "pick": 191,
        "round": 6,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 192,
        "round": 6,
        "teamId": "nyg",
        "teamName": "NY Giants"
    },
    {
        "pick": 193,
        "round": 6,
        "teamId": "nyg",
        "teamName": "NY Giants"
    },
    {
        "pick": 194,
        "round": 6,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 195,
        "round": 6,
        "teamId": "tb",
        "teamName": "Tampa Bay"
    },
    {
        "pick": 196,
        "round": 6,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 197,
        "round": 6,
        "teamId": "phi",
        "teamName": "Philadelphia"
    },
    {
        "pick": 198,
        "round": 6,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 199,
        "round": 6,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 200,
        "round": 6,
        "teamId": "car",
        "teamName": "Carolina"
    },
    {
        "pick": 201,
        "round": 6,
        "teamId": "gb",
        "teamName": "Green Bay"
    },
    {
        "pick": 202,
        "round": 6,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 203,
        "round": 6,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 204,
        "round": 6,
        "teamId": "lac",
        "teamName": "LA Chargers"
    },
    {
        "pick": 205,
        "round": 6,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 206,
        "round": 6,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 207,
        "round": 6,
        "teamId": "lar",
        "teamName": "LA Rams"
    },
    {
        "pick": 208,
        "round": 6,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 209,
        "round": 6,
        "teamId": "was",
        "teamName": "Washington"
    },
    {
        "pick": 210,
        "round": 6,
        "teamId": "kc",
        "teamName": "Kansas City"
    },
    {
        "pick": 211,
        "round": 6,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 212,
        "round": 6,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 213,
        "round": 6,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 214,
        "round": 6,
        "teamId": "ind",
        "teamName": "Indianapolis"
    },
    {
        "pick": 215,
        "round": 6,
        "teamId": "atl",
        "teamName": "Atlanta"
    },
    {
        "pick": 216,
        "round": 6,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 217,
        "round": 7,
        "teamId": "ari",
        "teamName": "Arizona"
    },
    {
        "pick": 218,
        "round": 7,
        "teamId": "dal",
        "teamName": "Dallas"
    },
    {
        "pick": 219,
        "round": 7,
        "teamId": "lv",
        "teamName": "Las Vegas"
    },
    {
        "pick": 220,
        "round": 7,
        "teamId": "buf",
        "teamName": "Buffalo"
    },
    {
        "pick": 221,
        "round": 7,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 222,
        "round": 7,
        "teamId": "det",
        "teamName": "Detroit"
    },
    {
        "pick": 223,
        "round": 7,
        "teamId": "was",
        "teamName": "Washington"
    },
    {
        "pick": 224,
        "round": 7,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 225,
        "round": 7,
        "teamId": "ten",
        "teamName": "Tennessee"
    },
    {
        "pick": 226,
        "round": 7,
        "teamId": "cin",
        "teamName": "Cincinnati"
    },
    {
        "pick": 227,
        "round": 7,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 228,
        "round": 7,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 229,
        "round": 7,
        "teamId": "tb",
        "teamName": "Tampa Bay"
    },
    {
        "pick": 230,
        "round": 7,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 231,
        "round": 7,
        "teamId": "atl",
        "teamName": "Atlanta"
    },
    {
        "pick": 232,
        "round": 7,
        "teamId": "lar",
        "teamName": "LA Rams"
    },
    {
        "pick": 233,
        "round": 7,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 234,
        "round": 7,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 235,
        "round": 7,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 236,
        "round": 7,
        "teamId": "gb",
        "teamName": "Green Bay"
    },
    {
        "pick": 237,
        "round": 7,
        "teamId": "pit",
        "teamName": "Pittsburgh"
    },
    {
        "pick": 238,
        "round": 7,
        "teamId": "mia",
        "teamName": "Miami"
    },
    {
        "pick": 239,
        "round": 7,
        "teamId": "chi",
        "teamName": "Chicago"
    },
    {
        "pick": 240,
        "round": 7,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 241,
        "round": 7,
        "teamId": "chi",
        "teamName": "Chicago"
    },
    {
        "pick": 242,
        "round": 7,
        "teamId": "nyj",
        "teamName": "NY Jets"
    },
    {
        "pick": 243,
        "round": 7,
        "teamId": "hou",
        "teamName": "Houston"
    },
    {
        "pick": 244,
        "round": 7,
        "teamId": "min",
        "teamName": "Minnesota"
    },
    {
        "pick": 245,
        "round": 7,
        "teamId": "jax",
        "teamName": "Jacksonville"
    },
    {
        "pick": 246,
        "round": 7,
        "teamId": "den",
        "teamName": "Denver"
    },
    {
        "pick": 247,
        "round": 7,
        "teamId": "ne",
        "teamName": "New England"
    },
    {
        "pick": 248,
        "round": 7,
        "teamId": "cle",
        "teamName": "Cleveland"
    },
    {
        "pick": 249,
        "round": 7,
        "teamId": "ind",
        "teamName": "Indianapolis"
    },
    {
        "pick": 250,
        "round": 7,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 251,
        "round": 7,
        "teamId": "lar",
        "teamName": "LA Rams"
    },
    {
        "pick": 252,
        "round": 7,
        "teamId": "lar",
        "teamName": "LA Rams"
    },
    {
        "pick": 253,
        "round": 7,
        "teamId": "bal",
        "teamName": "Baltimore"
    },
    {
        "pick": 254,
        "round": 7,
        "teamId": "ind",
        "teamName": "Indianapolis"
    },
    {
        "pick": 255,
        "round": 7,
        "teamId": "gb",
        "teamName": "Green Bay"
    },
    {
        "pick": 256,
        "round": 7,
        "teamId": "den",
        "teamName": "Denver"
    },
    {
        "pick": 257,
        "round": 7,
        "teamId": "den",
        "teamName": "Denver"
    }
];

const teamNeeds = {
    "lv": [
        "QB",
        "IOL",
        "LB",
        "DL",
        "IOL",
        "OT",
        "WR",
        "CB"
    ],
    "nyj": [
        "EDGE",
        "DL",
        "LB",
        "CB",
        "OT",
        "IOL",
        "IOL"
    ],
    "ari": [
        "QB",
        "OT",
        "S",
        "RB",
        "EDGE",
        "S",
        "LB"
    ],
    "ten": [
        "WR",
        "EDGE",
        "CB",
        "IOL"
    ],
    "nyg": [
        "OT",
        "IOL",
        "WR",
        "CB",
        "LB",
        "DL"
    ],
    "cle": [
        "CB",
        "EDGE",
        "DL",
        "S",
        "S",
        "LB"
    ],
    "was": [
        "EDGE",
        "WR",
        "LB",
        "CB",
        "IOL",
        "IOL"
    ],
    "no": [
        "IOL",
        "DL",
        "EDGE",
        "WR",
        "LB",
        "RB",
        "CB"
    ],
    "kc": [
        "CB",
        "S",
        "RB",
        "EDGE",
        "WR"
    ],
    "cin": [
        "DL",
        "S",
        "IOL",
        "CB",
        "LB",
        "EDGE"
    ],
    "mia": [
        "QB",
        "WR",
        "CB",
        "CB",
        "EDGE",
        "IOL"
    ],
    "dal": [
        "QB",
        "WR",
        "CB",
        "S",
        "IOL",
        "DL"
    ],
    "bal": [
        "DL",
        "IOL",
        "EDGE",
        "S",
        "WR",
        "TE",
        "CB"
    ],
    "tb": [
        "EDGE",
        "DL",
        "TE",
        "LB",
        "WR",
        "CB"
    ],
    "det": [
        "EDGE",
        "DL",
        "LB",
        "CB",
        "OT",
        "IOL",
        "IOL"
    ],
    "min": [
        "S",
        "CB",
        "WR",
        "LB",
        "QB"
    ],
    "car": [
        "IOL",
        "LB",
        "S",
        "CB",
        "DL",
        "EDGE"
    ],
    "pit": [
        "QB",
        "WR",
        "CB",
        "S",
        "IOL",
        "DL"
    ],
    "lac": [
        "IOL",
        "IOL",
        "IOL",
        "EDGE",
        "DL",
        "S"
    ],
    "phi": [
        "IOL",
        "CB",
        "TE",
        "OT",
        "IOL",
        "S"
    ],
    "chi": [
        "CB",
        "EDGE",
        "DL",
        "S",
        "S",
        "LB"
    ],
    "buf": [
        "EDGE",
        "IOL",
        "IOL",
        "WR",
        "DL",
        "CB",
        "LB"
    ],
    "sf": [
        "WR",
        "IOL",
        "DL",
        "IOL",
        "CB"
    ],
    "hou": [
        "IOL",
        "DL",
        "RB",
        "S",
        "OT",
        "IOL"
    ],
    "lar": [
        "DL",
        "LB",
        "TE",
        "RB",
        "WR"
    ],
    "den": [
        "DL",
        "LB",
        "TE",
        "RB",
        "WR"
    ],
    "ne": [
        "EDGE",
        "S",
        "OT",
        "IOL",
        "TE",
        "DL"
    ],
    "sea": [
        "CB",
        "EDGE",
        "RB",
        "S",
        "IOL"
    ],
    "atl": [
        "DL",
        "LB",
        "TE",
        "QB",
        "WR",
        "CB"
    ],
    "gb": [
        "DL",
        "LB",
        "CB",
        "OT",
        "OL"
    ],
    "ind": [
        "EDGE",
        "QB",
        "OT",
        "EDGE",
        "S",
        "WR",
        "LB"
    ],
    "jax": [
        "LB",
        "CB",
        "S",
        "OL",
        "DL",
        "RB"
    ]
};


// Phase 6 Trade Logic Data
const richHillValues = {
    "1": 1000,
    "2": 717,
    "3": 514,
    "4": 491,
    "5": 468,
    "6": 446,
    "7": 426,
    "8": 406,
    "9": 387,
    "10": 369,
    "11": 358,
    "12": 347,
    "13": 336,
    "14": 325,
    "15": 315,
    "16": 305,
    "17": 296,
    "18": 287,
    "19": 278,
    "20": 269,
    "21": 261,
    "22": 253,
    "23": 245,
    "24": 237,
    "25": 230,
    "26": 223,
    "27": 216,
    "28": 209,
    "29": 202,
    "30": 196,
    "31": 190,
    "32": 184,
    "33": 180,
    "34": 175,
    "35": 170,
    "36": 166,
    "37": 162,
    "38": 157,
    "39": 153,
    "40": 149,
    "41": 146,
    "42": 142,
    "43": 138,
    "44": 135,
    "45": 131,
    "46": 128,
    "47": 124,
    "48": 121,
    "49": 118,
    "50": 115,
    "51": 112,
    "52": 109,
    "53": 106,
    "54": 104,
    "55": 101,
    "56": 98,
    "57": 96,
    "58": 93,
    "59": 91,
    "60": 88,
    "61": 86,
    "62": 84,
    "63": 82,
    "64": 80,
    "65": 78,
    "66": 76,
    "67": 75,
    "68": 73,
    "69": 71,
    "70": 70,
    "71": 68,
    "72": 67,
    "73": 65,
    "74": 64,
    "75": 63,
    "76": 61,
    "77": 60,
    "78": 59,
    "79": 57,
    "80": 56,
    "81": 55,
    "82": 54,
    "83": 52,
    "84": 51,
    "85": 50,
    "86": 49,
    "87": 48,
    "88": 47,
    "89": 46,
    "90": 45,
    "91": 44,
    "92": 43,
    "93": 42,
    "94": 41,
    "95": 40,
    "96": 39,
    "97": 38,
    "98": 37,
    "99": 36,
    "100": 35,
    "101": 34,
    "102": 34,
    "103": 33,
    "104": 33,
    "105": 32,
    "106": 32,
    "107": 31,
    "108": 31,
    "109": 30,
    "110": 30,
    "111": 29,
    "112": 29,
    "113": 28,
    "114": 28,
    "115": 27,
    "116": 26,
    "117": 26,
    "118": 25,
    "119": 25,
    "120": 24,
    "121": 24,
    "122": 23,
    "123": 23,
    "124": 22,
    "125": 21,
    "126": 21,
    "127": 20,
    "128": 20,
    "129": 19,
    "130": 19,
    "131": 18,
    "132": 18,
    "133": 18,
    "134": 17,
    "135": 17,
    "136": 17,
    "137": 16,
    "138": 16,
    "139": 15,
    "140": 15,
    "141": 15,
    "142": 14,
    "143": 14,
    "144": 14,
    "145": 13,
    "146": 13,
    "147": 13,
    "148": 13,
    "149": 12,
    "150": 12,
    "151": 12,
    "152": 12,
    "153": 11,
    "154": 11,
    "155": 11,
    "156": 11,
    "157": 10,
    "158": 10,
    "159": 10,
    "160": 10,
    "161": 10,
    "162": 10,
    "163": 10,
    "164": 9,
    "165": 9,
    "166": 9,
    "167": 9,
    "168": 9,
    "169": 9,
    "170": 9,
    "171": 9,
    "172": 9,
    "173": 8,
    "174": 8,
    "175": 8,
    "176": 8,
    "177": 8,
    "178": 8,
    "179": 8,
    "180": 8,
    "181": 7,
    "182": 7,
    "183": 7,
    "184": 7,
    "185": 7,
    "186": 7,
    "187": 7,
    "188": 7,
    "189": 6,
    "190": 6,
    "191": 6,
    "192": 6,
    "193": 6,
    "194": 6,
    "195": 6,
    "196": 6,
    "197": 5,
    "198": 5,
    "199": 5,
    "200": 5,
    "201": 5,
    "202": 5,
    "203": 5,
    "204": 5,
    "205": 5,
    "206": 4,
    "207": 4,
    "208": 4,
    "209": 4,
    "210": 4,
    "211": 4,
    "212": 4,
    "213": 4,
    "214": 4,
    "215": 4,
    "216": 5,
    "217": 4,
    "218": 4,
    "219": 4,
    "220": 4,
    "221": 4,
    "222": 4,
    "223": 3,
    "224": 3,
    "225": 3,
    "226": 3,
    "227": 3,
    "228": 3,
    "229": 3,
    "230": 3,
    "231": 3,
    "232": 3,
    "233": 2,
    "234": 2,
    "235": 2,
    "236": 2,
    "237": 2,
    "238": 2,
    "239": 2,
    "240": 2,
    "241": 2,
    "242": 2,
    "243": 2,
    "244": 2,
    "245": 1,
    "246": 1,
    "247": 1,
    "248": 1,
    "249": 1,
    "250": 1,
    "251": 1,
    "252": 1,
    "253": 1,
    "254": 1,
    "255": 1,
    "256": 1,
    "257": 1
};

const draftPicks2027 = [
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 353,
        "originalPickRank": 1,
        "id": "2027_R1_lv"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 336,
        "originalPickRank": 2,
        "id": "2027_R1_nyj"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 336,
        "originalPickRank": 3,
        "id": "2027_R1_ari"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 321,
        "originalPickRank": 4,
        "id": "2027_R1_ten"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 321,
        "originalPickRank": 5,
        "id": "2027_R1_nyg"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 306,
        "originalPickRank": 6,
        "id": "2027_R1_cle"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 306,
        "originalPickRank": 7,
        "id": "2027_R1_was"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 297,
        "originalPickRank": 8,
        "id": "2027_R1_no"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 297,
        "originalPickRank": 9,
        "id": "2027_R1_kc"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 288,
        "originalPickRank": 10,
        "id": "2027_R1_cin"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 288,
        "originalPickRank": 11,
        "id": "2027_R1_mia"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "dal",
        "currentTeamId": "nyj",
        "value": 245,
        "originalPickRank": 12,
        "id": "2027_R1_dal"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 238,
        "originalPickRank": 13,
        "id": "2027_R1_atl"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 238,
        "originalPickRank": 14,
        "id": "2027_R1_bal"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 230,
        "originalPickRank": 15,
        "id": "2027_R1_tb"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "ind",
        "currentTeamId": "nyj",
        "value": 230,
        "originalPickRank": 16,
        "id": "2027_R1_ind"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 223,
        "originalPickRank": 17,
        "id": "2027_R1_det"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 223,
        "originalPickRank": 18,
        "id": "2027_R1_min"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 216,
        "originalPickRank": 19,
        "id": "2027_R1_car"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "gb",
        "currentTeamId": "dal",
        "value": 216,
        "originalPickRank": 20,
        "id": "2027_R1_gb"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 209,
        "originalPickRank": 21,
        "id": "2027_R1_pit"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 209,
        "originalPickRank": 22,
        "id": "2027_R1_lac"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 173,
        "originalPickRank": 23,
        "id": "2027_R1_phi"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 173,
        "originalPickRank": 24,
        "id": "2027_R1_jax"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 167,
        "originalPickRank": 25,
        "id": "2027_R1_chi"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 167,
        "originalPickRank": 26,
        "id": "2027_R1_buf"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 162,
        "originalPickRank": 27,
        "id": "2027_R1_sf"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 162,
        "originalPickRank": 28,
        "id": "2027_R1_hou"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 157,
        "originalPickRank": 29,
        "id": "2027_R1_lar"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 157,
        "originalPickRank": 30,
        "id": "2027_R1_den"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 152,
        "originalPickRank": 31,
        "id": "2027_R1_ne"
    },
    {
        "year": 2027,
        "round": 1,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 152,
        "originalPickRank": 32,
        "id": "2027_R1_sea"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 126,
        "originalPickRank": 33,
        "id": "2027_R2_lv"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 123,
        "originalPickRank": 34,
        "id": "2027_R2_nyj"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 123,
        "originalPickRank": 35,
        "id": "2027_R2_ari"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 121,
        "originalPickRank": 36,
        "id": "2027_R2_ten"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 121,
        "originalPickRank": 37,
        "id": "2027_R2_nyg"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 117,
        "originalPickRank": 38,
        "id": "2027_R2_cle"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 117,
        "originalPickRank": 39,
        "id": "2027_R2_was"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 114,
        "originalPickRank": 40,
        "id": "2027_R2_no"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 114,
        "originalPickRank": 41,
        "id": "2027_R2_kc"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 112,
        "originalPickRank": 42,
        "id": "2027_R2_cin"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 112,
        "originalPickRank": 43,
        "id": "2027_R2_mia"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 97,
        "originalPickRank": 44,
        "id": "2027_R2_dal"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 95,
        "originalPickRank": 45,
        "id": "2027_R2_atl"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 95,
        "originalPickRank": 46,
        "id": "2027_R2_bal"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 92,
        "originalPickRank": 47,
        "id": "2027_R2_tb"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 92,
        "originalPickRank": 48,
        "id": "2027_R2_ind"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 90,
        "originalPickRank": 49,
        "id": "2027_R2_det"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 90,
        "originalPickRank": 50,
        "id": "2027_R2_min"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 87,
        "originalPickRank": 51,
        "id": "2027_R2_car"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 87,
        "originalPickRank": 52,
        "id": "2027_R2_gb"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 86,
        "originalPickRank": 53,
        "id": "2027_R2_pit"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 86,
        "originalPickRank": 54,
        "id": "2027_R2_lac"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 73,
        "originalPickRank": 55,
        "id": "2027_R2_phi"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 73,
        "originalPickRank": 56,
        "id": "2027_R2_jax"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 71,
        "originalPickRank": 57,
        "id": "2027_R2_chi"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 71,
        "originalPickRank": 58,
        "id": "2027_R2_buf"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 69,
        "originalPickRank": 59,
        "id": "2027_R2_sf"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 69,
        "originalPickRank": 60,
        "id": "2027_R2_hou"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 68,
        "originalPickRank": 61,
        "id": "2027_R2_lar"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 68,
        "originalPickRank": 62,
        "id": "2027_R2_den"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 66,
        "originalPickRank": 63,
        "id": "2027_R2_ne"
    },
    {
        "year": 2027,
        "round": 2,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 66,
        "originalPickRank": 64,
        "id": "2027_R2_sea"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 56,
        "originalPickRank": 65,
        "id": "2027_R3_lv"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 55,
        "originalPickRank": 66,
        "id": "2027_R3_nyj"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 55,
        "originalPickRank": 67,
        "id": "2027_R3_ari"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 53,
        "originalPickRank": 68,
        "id": "2027_R3_ten"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 53,
        "originalPickRank": 69,
        "id": "2027_R3_nyg"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 53,
        "originalPickRank": 70,
        "id": "2027_R3_cle"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 53,
        "originalPickRank": 71,
        "id": "2027_R3_was"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 52,
        "originalPickRank": 72,
        "id": "2027_R3_no"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 52,
        "originalPickRank": 73,
        "id": "2027_R3_kc"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 50,
        "originalPickRank": 74,
        "id": "2027_R3_cin"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 50,
        "originalPickRank": 75,
        "id": "2027_R3_mia"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 45,
        "originalPickRank": 76,
        "id": "2027_R3_dal"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 44,
        "originalPickRank": 77,
        "id": "2027_R3_atl"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 44,
        "originalPickRank": 78,
        "id": "2027_R3_bal"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 43,
        "originalPickRank": 79,
        "id": "2027_R3_tb"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 43,
        "originalPickRank": 80,
        "id": "2027_R3_ind"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 42,
        "originalPickRank": 81,
        "id": "2027_R3_det"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 42,
        "originalPickRank": 82,
        "id": "2027_R3_min"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 41,
        "originalPickRank": 83,
        "id": "2027_R3_car"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 41,
        "originalPickRank": 84,
        "id": "2027_R3_gb"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 40,
        "originalPickRank": 85,
        "id": "2027_R3_pit"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 40,
        "originalPickRank": 86,
        "id": "2027_R3_lac"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 35,
        "originalPickRank": 87,
        "id": "2027_R3_phi"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 35,
        "originalPickRank": 88,
        "id": "2027_R3_jax"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 34,
        "originalPickRank": 89,
        "id": "2027_R3_chi"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 34,
        "originalPickRank": 90,
        "id": "2027_R3_buf"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 34,
        "originalPickRank": 91,
        "id": "2027_R3_sf"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 34,
        "originalPickRank": 92,
        "id": "2027_R3_hou"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "lar",
        "currentTeamId": "kc",
        "value": 33,
        "originalPickRank": 93,
        "id": "2027_R3_lar"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 33,
        "originalPickRank": 94,
        "id": "2027_R3_den"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 32,
        "originalPickRank": 95,
        "id": "2027_R3_ne"
    },
    {
        "year": 2027,
        "round": 3,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 32,
        "originalPickRank": 96,
        "id": "2027_R3_sea"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 27,
        "originalPickRank": 97,
        "id": "2027_R4_lv"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 27,
        "originalPickRank": 98,
        "id": "2027_R4_nyj"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 27,
        "originalPickRank": 99,
        "id": "2027_R4_ari"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 26,
        "originalPickRank": 100,
        "id": "2027_R4_ten"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 26,
        "originalPickRank": 101,
        "id": "2027_R4_nyg"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 26,
        "originalPickRank": 102,
        "id": "2027_R4_cle"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 26,
        "originalPickRank": 103,
        "id": "2027_R4_was"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 25,
        "originalPickRank": 104,
        "id": "2027_R4_no"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 25,
        "originalPickRank": 105,
        "id": "2027_R4_kc"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 25,
        "originalPickRank": 106,
        "id": "2027_R4_cin"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 25,
        "originalPickRank": 107,
        "id": "2027_R4_mia"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 23,
        "originalPickRank": 108,
        "id": "2027_R4_dal"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 23,
        "originalPickRank": 109,
        "id": "2027_R4_atl"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 23,
        "originalPickRank": 110,
        "id": "2027_R4_bal"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 22,
        "originalPickRank": 111,
        "id": "2027_R4_tb"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 22,
        "originalPickRank": 112,
        "id": "2027_R4_ind"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 21,
        "originalPickRank": 113,
        "id": "2027_R4_det"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "min",
        "currentTeamId": "car",
        "value": 21,
        "originalPickRank": 114,
        "id": "2027_R4_min"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 21,
        "originalPickRank": 115,
        "id": "2027_R4_car"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "gb",
        "currentTeamId": "dal",
        "value": 21,
        "originalPickRank": 116,
        "id": "2027_R4_gb"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 20,
        "originalPickRank": 117,
        "id": "2027_R4_pit"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 20,
        "originalPickRank": 118,
        "id": "2027_R4_lac"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 18,
        "originalPickRank": 119,
        "id": "2027_R4_phi"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 18,
        "originalPickRank": 120,
        "id": "2027_R4_jax"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 17,
        "originalPickRank": 121,
        "id": "2027_R4_chi"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 17,
        "originalPickRank": 122,
        "id": "2027_R4_buf"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 17,
        "originalPickRank": 123,
        "id": "2027_R4_sf"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 17,
        "originalPickRank": 124,
        "id": "2027_R4_hou"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 16,
        "originalPickRank": 125,
        "id": "2027_R4_lar"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 16,
        "originalPickRank": 126,
        "id": "2027_R4_den"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 16,
        "originalPickRank": 127,
        "id": "2027_R4_ne"
    },
    {
        "year": 2027,
        "round": 4,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 16,
        "originalPickRank": 128,
        "id": "2027_R4_sea"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 14,
        "originalPickRank": 129,
        "id": "2027_R5_lv"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 14,
        "originalPickRank": 130,
        "id": "2027_R5_nyj"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 14,
        "originalPickRank": 131,
        "id": "2027_R5_ari"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 13,
        "originalPickRank": 132,
        "id": "2027_R5_ten"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 13,
        "originalPickRank": 133,
        "id": "2027_R5_nyg"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 13,
        "originalPickRank": 134,
        "id": "2027_R5_cle"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 13,
        "originalPickRank": 135,
        "id": "2027_R5_was"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 12,
        "originalPickRank": 136,
        "id": "2027_R5_no"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 12,
        "originalPickRank": 137,
        "id": "2027_R5_kc"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 12,
        "originalPickRank": 138,
        "id": "2027_R5_cin"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 12,
        "originalPickRank": 139,
        "id": "2027_R5_mia"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "dal",
        "currentTeamId": "pit",
        "value": 10,
        "originalPickRank": 140,
        "id": "2027_R5_dal"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 10,
        "originalPickRank": 141,
        "id": "2027_R5_atl"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 10,
        "originalPickRank": 142,
        "id": "2027_R5_bal"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 10,
        "originalPickRank": 143,
        "id": "2027_R5_tb"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 10,
        "originalPickRank": 144,
        "id": "2027_R5_ind"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 10,
        "originalPickRank": 145,
        "id": "2027_R5_det"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 10,
        "originalPickRank": 146,
        "id": "2027_R5_min"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "car",
        "currentTeamId": "min",
        "value": 9,
        "originalPickRank": 147,
        "id": "2027_R5_car"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 9,
        "originalPickRank": 148,
        "id": "2027_R5_gb"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "pit",
        "currentTeamId": "mia",
        "value": 9,
        "originalPickRank": 149,
        "id": "2027_R5_pit"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 9,
        "originalPickRank": 150,
        "id": "2027_R5_lac"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 9,
        "originalPickRank": 151,
        "id": "2027_R5_phi"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 9,
        "originalPickRank": 152,
        "id": "2027_R5_jax"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "chi",
        "currentTeamId": "ne",
        "value": 8,
        "originalPickRank": 153,
        "id": "2027_R5_chi"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 8,
        "originalPickRank": 154,
        "id": "2027_R5_buf"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 8,
        "originalPickRank": 155,
        "id": "2027_R5_sf"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "hou",
        "currentTeamId": "cle",
        "value": 8,
        "originalPickRank": 156,
        "id": "2027_R5_hou"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 8,
        "originalPickRank": 157,
        "id": "2027_R5_lar"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 8,
        "originalPickRank": 158,
        "id": "2027_R5_den"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 8,
        "originalPickRank": 159,
        "id": "2027_R5_ne"
    },
    {
        "year": 2027,
        "round": 5,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 8,
        "originalPickRank": 160,
        "id": "2027_R5_sea"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 7,
        "originalPickRank": 161,
        "id": "2027_R6_lv"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "nyj",
        "currentTeamId": "min",
        "value": 7,
        "originalPickRank": 162,
        "id": "2027_R6_nyj"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 7,
        "originalPickRank": 163,
        "id": "2027_R6_ari"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 7,
        "originalPickRank": 164,
        "id": "2027_R6_ten"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 7,
        "originalPickRank": 165,
        "id": "2027_R6_nyg"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "cle",
        "currentTeamId": "hou",
        "value": 7,
        "originalPickRank": 166,
        "id": "2027_R6_cle"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 7,
        "originalPickRank": 167,
        "id": "2027_R6_was"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "no",
        "currentTeamId": "ne",
        "value": 7,
        "originalPickRank": 168,
        "id": "2027_R6_no"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "kc",
        "currentTeamId": "nyj",
        "value": 7,
        "originalPickRank": 169,
        "id": "2027_R6_kc"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 7,
        "originalPickRank": 170,
        "id": "2027_R6_cin"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 7,
        "originalPickRank": 171,
        "id": "2027_R6_mia"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 6,
        "originalPickRank": 172,
        "id": "2027_R6_dal"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 6,
        "originalPickRank": 173,
        "id": "2027_R6_atl"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 6,
        "originalPickRank": 174,
        "id": "2027_R6_bal"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 6,
        "originalPickRank": 175,
        "id": "2027_R6_tb"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 6,
        "originalPickRank": 176,
        "id": "2027_R6_ind"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 6,
        "originalPickRank": 177,
        "id": "2027_R6_det"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 6,
        "originalPickRank": 178,
        "id": "2027_R6_min"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 5,
        "originalPickRank": 179,
        "id": "2027_R6_car"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "gb",
        "currentTeamId": "phi",
        "value": 5,
        "originalPickRank": 180,
        "id": "2027_R6_gb"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "pit",
        "currentTeamId": "dal",
        "value": 5,
        "originalPickRank": 181,
        "id": "2027_R6_pit"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "lac",
        "currentTeamId": "no",
        "value": 5,
        "originalPickRank": 182,
        "id": "2027_R6_lac"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "phi",
        "currentTeamId": "nyj",
        "value": 5,
        "originalPickRank": 183,
        "id": "2027_R6_phi"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 5,
        "originalPickRank": 184,
        "id": "2027_R6_jax"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 4,
        "originalPickRank": 185,
        "id": "2027_R6_chi"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 4,
        "originalPickRank": 186,
        "id": "2027_R6_buf"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "sf",
        "currentTeamId": "kc",
        "value": 4,
        "originalPickRank": 187,
        "id": "2027_R6_sf"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 4,
        "originalPickRank": 188,
        "id": "2027_R6_hou"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 4,
        "originalPickRank": 189,
        "id": "2027_R6_lar"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 4,
        "originalPickRank": 190,
        "id": "2027_R6_den"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 4,
        "originalPickRank": 191,
        "id": "2027_R6_ne"
    },
    {
        "year": 2027,
        "round": 6,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 4,
        "originalPickRank": 192,
        "id": "2027_R6_sea"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 4,
        "originalPickRank": 193,
        "id": "2027_R7_lv"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "nyj",
        "currentTeamId": "phi",
        "value": 4,
        "originalPickRank": 194,
        "id": "2027_R7_nyj"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 4,
        "originalPickRank": 195,
        "id": "2027_R7_ari"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 4,
        "originalPickRank": 196,
        "id": "2027_R7_ten"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "nyg",
        "currentTeamId": "mia",
        "value": 4,
        "originalPickRank": 197,
        "id": "2027_R7_nyg"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 4,
        "originalPickRank": 198,
        "id": "2027_R7_cle"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 4,
        "originalPickRank": 199,
        "id": "2027_R7_was"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "no",
        "currentTeamId": "den",
        "value": 4,
        "originalPickRank": 200,
        "id": "2027_R7_no"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "kc",
        "currentTeamId": "sf",
        "value": 4,
        "originalPickRank": 201,
        "id": "2027_R7_kc"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 4,
        "originalPickRank": 202,
        "id": "2027_R7_cin"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "mia",
        "currentTeamId": "pit",
        "value": 4,
        "originalPickRank": 203,
        "id": "2027_R7_mia"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 3,
        "originalPickRank": 204,
        "id": "2027_R7_dal"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "atl",
        "currentTeamId": "sea",
        "value": 3,
        "originalPickRank": 205,
        "id": "2027_R7_atl"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "bal",
        "currentTeamId": "phi",
        "value": 3,
        "originalPickRank": 206,
        "id": "2027_R7_bal"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 3,
        "originalPickRank": 207,
        "id": "2027_R7_tb"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 3,
        "originalPickRank": 208,
        "id": "2027_R7_ind"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 3,
        "originalPickRank": 209,
        "id": "2027_R7_det"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "min",
        "currentTeamId": "nyj",
        "value": 3,
        "originalPickRank": 210,
        "id": "2027_R7_min"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 3,
        "originalPickRank": 211,
        "id": "2027_R7_car"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 3,
        "originalPickRank": 212,
        "id": "2027_R7_gb"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 3,
        "originalPickRank": 213,
        "id": "2027_R7_pit"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "lac",
        "currentTeamId": "det",
        "value": 3,
        "originalPickRank": 214,
        "id": "2027_R7_lac"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "phi",
        "currentTeamId": "min",
        "value": 3,
        "originalPickRank": 215,
        "id": "2027_R7_phi"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 3,
        "originalPickRank": 216,
        "id": "2027_R7_jax"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 3,
        "originalPickRank": 217,
        "id": "2027_R7_chi"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 3,
        "originalPickRank": 218,
        "id": "2027_R7_buf"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 3,
        "originalPickRank": 219,
        "id": "2027_R7_sf"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "hou",
        "currentTeamId": "cle",
        "value": 3,
        "originalPickRank": 220,
        "id": "2027_R7_hou"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "lar",
        "currentTeamId": "lac",
        "value": 2,
        "originalPickRank": 221,
        "id": "2027_R7_lar"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 2,
        "originalPickRank": 222,
        "id": "2027_R7_den"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 2,
        "originalPickRank": 223,
        "id": "2027_R7_ne"
    },
    {
        "year": 2027,
        "round": 7,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 2,
        "originalPickRank": 224,
        "id": "2027_R7_sea"
    }
];

const draftPicks2028 = [
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 281,
        "originalPickRank": 1,
        "id": "2028_R1_lv"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 267,
        "originalPickRank": 2,
        "id": "2028_R1_nyj"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 267,
        "originalPickRank": 3,
        "id": "2028_R1_ari"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 255,
        "originalPickRank": 4,
        "id": "2028_R1_ten"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 255,
        "originalPickRank": 5,
        "id": "2028_R1_nyg"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 243,
        "originalPickRank": 6,
        "id": "2028_R1_cle"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 243,
        "originalPickRank": 7,
        "id": "2028_R1_was"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 236,
        "originalPickRank": 8,
        "id": "2028_R1_no"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 236,
        "originalPickRank": 9,
        "id": "2028_R1_kc"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 229,
        "originalPickRank": 10,
        "id": "2028_R1_cin"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 229,
        "originalPickRank": 11,
        "id": "2028_R1_mia"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 195,
        "originalPickRank": 12,
        "id": "2028_R1_dal"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 189,
        "originalPickRank": 13,
        "id": "2028_R1_atl"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 189,
        "originalPickRank": 14,
        "id": "2028_R1_bal"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 183,
        "originalPickRank": 15,
        "id": "2028_R1_tb"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 183,
        "originalPickRank": 16,
        "id": "2028_R1_ind"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 177,
        "originalPickRank": 17,
        "id": "2028_R1_det"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 177,
        "originalPickRank": 18,
        "id": "2028_R1_min"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 172,
        "originalPickRank": 19,
        "id": "2028_R1_car"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 172,
        "originalPickRank": 20,
        "id": "2028_R1_gb"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 166,
        "originalPickRank": 21,
        "id": "2028_R1_pit"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 166,
        "originalPickRank": 22,
        "id": "2028_R1_lac"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 137,
        "originalPickRank": 23,
        "id": "2028_R1_phi"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 137,
        "originalPickRank": 24,
        "id": "2028_R1_jax"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 133,
        "originalPickRank": 25,
        "id": "2028_R1_chi"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 133,
        "originalPickRank": 26,
        "id": "2028_R1_buf"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 129,
        "originalPickRank": 27,
        "id": "2028_R1_sf"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 129,
        "originalPickRank": 28,
        "id": "2028_R1_hou"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 125,
        "originalPickRank": 29,
        "id": "2028_R1_lar"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 125,
        "originalPickRank": 30,
        "id": "2028_R1_den"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 121,
        "originalPickRank": 31,
        "id": "2028_R1_ne"
    },
    {
        "year": 2028,
        "round": 1,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 121,
        "originalPickRank": 32,
        "id": "2028_R1_sea"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 100,
        "originalPickRank": 33,
        "id": "2028_R2_lv"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 98,
        "originalPickRank": 34,
        "id": "2028_R2_nyj"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 98,
        "originalPickRank": 35,
        "id": "2028_R2_ari"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 96,
        "originalPickRank": 36,
        "id": "2028_R2_ten"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 96,
        "originalPickRank": 37,
        "id": "2028_R2_nyg"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 93,
        "originalPickRank": 38,
        "id": "2028_R2_cle"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 93,
        "originalPickRank": 39,
        "id": "2028_R2_was"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 91,
        "originalPickRank": 40,
        "id": "2028_R2_no"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 91,
        "originalPickRank": 41,
        "id": "2028_R2_kc"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 89,
        "originalPickRank": 42,
        "id": "2028_R2_cin"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 89,
        "originalPickRank": 43,
        "id": "2028_R2_mia"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 77,
        "originalPickRank": 44,
        "id": "2028_R2_dal"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 75,
        "originalPickRank": 45,
        "id": "2028_R2_atl"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 75,
        "originalPickRank": 46,
        "id": "2028_R2_bal"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 73,
        "originalPickRank": 47,
        "id": "2028_R2_tb"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 73,
        "originalPickRank": 48,
        "id": "2028_R2_ind"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 71,
        "originalPickRank": 49,
        "id": "2028_R2_det"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 71,
        "originalPickRank": 50,
        "id": "2028_R2_min"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 69,
        "originalPickRank": 51,
        "id": "2028_R2_car"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 69,
        "originalPickRank": 52,
        "id": "2028_R2_gb"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 68,
        "originalPickRank": 53,
        "id": "2028_R2_pit"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 68,
        "originalPickRank": 54,
        "id": "2028_R2_lac"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 58,
        "originalPickRank": 55,
        "id": "2028_R2_phi"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 58,
        "originalPickRank": 56,
        "id": "2028_R2_jax"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 56,
        "originalPickRank": 57,
        "id": "2028_R2_chi"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 56,
        "originalPickRank": 58,
        "id": "2028_R2_buf"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 55,
        "originalPickRank": 59,
        "id": "2028_R2_sf"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 55,
        "originalPickRank": 60,
        "id": "2028_R2_hou"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 54,
        "originalPickRank": 61,
        "id": "2028_R2_lar"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 54,
        "originalPickRank": 62,
        "id": "2028_R2_den"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 52,
        "originalPickRank": 63,
        "id": "2028_R2_ne"
    },
    {
        "year": 2028,
        "round": 2,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 52,
        "originalPickRank": 64,
        "id": "2028_R2_sea"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 44,
        "originalPickRank": 65,
        "id": "2028_R3_lv"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 44,
        "originalPickRank": 66,
        "id": "2028_R3_nyj"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 44,
        "originalPickRank": 67,
        "id": "2028_R3_ari"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 42,
        "originalPickRank": 68,
        "id": "2028_R3_ten"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 42,
        "originalPickRank": 69,
        "id": "2028_R3_nyg"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 42,
        "originalPickRank": 70,
        "id": "2028_R3_cle"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 42,
        "originalPickRank": 71,
        "id": "2028_R3_was"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 41,
        "originalPickRank": 72,
        "id": "2028_R3_no"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 41,
        "originalPickRank": 73,
        "id": "2028_R3_kc"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 40,
        "originalPickRank": 74,
        "id": "2028_R3_cin"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 40,
        "originalPickRank": 75,
        "id": "2028_R3_mia"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 36,
        "originalPickRank": 76,
        "id": "2028_R3_dal"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 35,
        "originalPickRank": 77,
        "id": "2028_R3_atl"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 35,
        "originalPickRank": 78,
        "id": "2028_R3_bal"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 34,
        "originalPickRank": 79,
        "id": "2028_R3_tb"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 34,
        "originalPickRank": 80,
        "id": "2028_R3_ind"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 33,
        "originalPickRank": 81,
        "id": "2028_R3_det"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 33,
        "originalPickRank": 82,
        "id": "2028_R3_min"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 33,
        "originalPickRank": 83,
        "id": "2028_R3_car"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 33,
        "originalPickRank": 84,
        "id": "2028_R3_gb"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 32,
        "originalPickRank": 85,
        "id": "2028_R3_pit"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 32,
        "originalPickRank": 86,
        "id": "2028_R3_lac"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 28,
        "originalPickRank": 87,
        "id": "2028_R3_phi"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 28,
        "originalPickRank": 88,
        "id": "2028_R3_jax"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 27,
        "originalPickRank": 89,
        "id": "2028_R3_chi"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 27,
        "originalPickRank": 90,
        "id": "2028_R3_buf"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 27,
        "originalPickRank": 91,
        "id": "2028_R3_sf"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 27,
        "originalPickRank": 92,
        "id": "2028_R3_hou"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 26,
        "originalPickRank": 93,
        "id": "2028_R3_lar"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 26,
        "originalPickRank": 94,
        "id": "2028_R3_den"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 25,
        "originalPickRank": 95,
        "id": "2028_R3_ne"
    },
    {
        "year": 2028,
        "round": 3,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 25,
        "originalPickRank": 96,
        "id": "2028_R3_sea"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 21,
        "originalPickRank": 97,
        "id": "2028_R4_lv"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 21,
        "originalPickRank": 98,
        "id": "2028_R4_nyj"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 21,
        "originalPickRank": 99,
        "id": "2028_R4_ari"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 21,
        "originalPickRank": 100,
        "id": "2028_R4_ten"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 21,
        "originalPickRank": 101,
        "id": "2028_R4_nyg"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 21,
        "originalPickRank": 102,
        "id": "2028_R4_cle"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 21,
        "originalPickRank": 103,
        "id": "2028_R4_was"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 20,
        "originalPickRank": 104,
        "id": "2028_R4_no"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 20,
        "originalPickRank": 105,
        "id": "2028_R4_kc"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 20,
        "originalPickRank": 106,
        "id": "2028_R4_cin"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 20,
        "originalPickRank": 107,
        "id": "2028_R4_mia"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 18,
        "originalPickRank": 108,
        "id": "2028_R4_dal"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 18,
        "originalPickRank": 109,
        "id": "2028_R4_atl"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 18,
        "originalPickRank": 110,
        "id": "2028_R4_bal"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 17,
        "originalPickRank": 111,
        "id": "2028_R4_tb"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 17,
        "originalPickRank": 112,
        "id": "2028_R4_ind"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 17,
        "originalPickRank": 113,
        "id": "2028_R4_det"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 17,
        "originalPickRank": 114,
        "id": "2028_R4_min"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 17,
        "originalPickRank": 115,
        "id": "2028_R4_car"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 17,
        "originalPickRank": 116,
        "id": "2028_R4_gb"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 16,
        "originalPickRank": 117,
        "id": "2028_R4_pit"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 16,
        "originalPickRank": 118,
        "id": "2028_R4_lac"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 14,
        "originalPickRank": 119,
        "id": "2028_R4_phi"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 14,
        "originalPickRank": 120,
        "id": "2028_R4_jax"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 13,
        "originalPickRank": 121,
        "id": "2028_R4_chi"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 13,
        "originalPickRank": 122,
        "id": "2028_R4_buf"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 13,
        "originalPickRank": 123,
        "id": "2028_R4_sf"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 13,
        "originalPickRank": 124,
        "id": "2028_R4_hou"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 13,
        "originalPickRank": 125,
        "id": "2028_R4_lar"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 13,
        "originalPickRank": 126,
        "id": "2028_R4_den"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 13,
        "originalPickRank": 127,
        "id": "2028_R4_ne"
    },
    {
        "year": 2028,
        "round": 4,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 13,
        "originalPickRank": 128,
        "id": "2028_R4_sea"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 11,
        "originalPickRank": 129,
        "id": "2028_R5_lv"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 11,
        "originalPickRank": 130,
        "id": "2028_R5_nyj"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 11,
        "originalPickRank": 131,
        "id": "2028_R5_ari"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 10,
        "originalPickRank": 132,
        "id": "2028_R5_ten"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 10,
        "originalPickRank": 133,
        "id": "2028_R5_nyg"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 10,
        "originalPickRank": 134,
        "id": "2028_R5_cle"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 10,
        "originalPickRank": 135,
        "id": "2028_R5_was"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "no",
        "currentTeamId": "no",
        "value": 9,
        "originalPickRank": 136,
        "id": "2028_R5_no"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 9,
        "originalPickRank": 137,
        "id": "2028_R5_kc"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 9,
        "originalPickRank": 138,
        "id": "2028_R5_cin"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 9,
        "originalPickRank": 139,
        "id": "2028_R5_mia"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 8,
        "originalPickRank": 140,
        "id": "2028_R5_dal"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 8,
        "originalPickRank": 141,
        "id": "2028_R5_atl"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 8,
        "originalPickRank": 142,
        "id": "2028_R5_bal"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 8,
        "originalPickRank": 143,
        "id": "2028_R5_tb"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 8,
        "originalPickRank": 144,
        "id": "2028_R5_ind"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 8,
        "originalPickRank": 145,
        "id": "2028_R5_det"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 8,
        "originalPickRank": 146,
        "id": "2028_R5_min"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 7,
        "originalPickRank": 147,
        "id": "2028_R5_car"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 7,
        "originalPickRank": 148,
        "id": "2028_R5_gb"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 7,
        "originalPickRank": 149,
        "id": "2028_R5_pit"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 7,
        "originalPickRank": 150,
        "id": "2028_R5_lac"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 7,
        "originalPickRank": 151,
        "id": "2028_R5_phi"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 7,
        "originalPickRank": 152,
        "id": "2028_R5_jax"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 6,
        "originalPickRank": 153,
        "id": "2028_R5_chi"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 6,
        "originalPickRank": 154,
        "id": "2028_R5_buf"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 6,
        "originalPickRank": 155,
        "id": "2028_R5_sf"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 6,
        "originalPickRank": 156,
        "id": "2028_R5_hou"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 6,
        "originalPickRank": 157,
        "id": "2028_R5_lar"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 6,
        "originalPickRank": 158,
        "id": "2028_R5_den"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 6,
        "originalPickRank": 159,
        "id": "2028_R5_ne"
    },
    {
        "year": 2028,
        "round": 5,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 6,
        "originalPickRank": 160,
        "id": "2028_R5_sea"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 5,
        "originalPickRank": 161,
        "id": "2028_R6_lv"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "nyj",
        "currentTeamId": "nyj",
        "value": 5,
        "originalPickRank": 162,
        "id": "2028_R6_nyj"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 5,
        "originalPickRank": 163,
        "id": "2028_R6_ari"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 5,
        "originalPickRank": 164,
        "id": "2028_R6_ten"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 5,
        "originalPickRank": 165,
        "id": "2028_R6_nyg"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "cle",
        "currentTeamId": "cle",
        "value": 5,
        "originalPickRank": 166,
        "id": "2028_R6_cle"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 5,
        "originalPickRank": 167,
        "id": "2028_R6_was"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "no",
        "currentTeamId": "dal",
        "value": 5,
        "originalPickRank": 168,
        "id": "2028_R6_no"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 5,
        "originalPickRank": 169,
        "id": "2028_R6_kc"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 5,
        "originalPickRank": 170,
        "id": "2028_R6_cin"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 5,
        "originalPickRank": 171,
        "id": "2028_R6_mia"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "dal",
        "currentTeamId": "dal",
        "value": 5,
        "originalPickRank": 172,
        "id": "2028_R6_dal"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 5,
        "originalPickRank": 173,
        "id": "2028_R6_atl"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 5,
        "originalPickRank": 174,
        "id": "2028_R6_bal"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 5,
        "originalPickRank": 175,
        "id": "2028_R6_tb"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 5,
        "originalPickRank": 176,
        "id": "2028_R6_ind"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 5,
        "originalPickRank": 177,
        "id": "2028_R6_det"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 5,
        "originalPickRank": 178,
        "id": "2028_R6_min"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 4,
        "originalPickRank": 179,
        "id": "2028_R6_car"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 4,
        "originalPickRank": 180,
        "id": "2028_R6_gb"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 4,
        "originalPickRank": 181,
        "id": "2028_R6_pit"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 4,
        "originalPickRank": 182,
        "id": "2028_R6_lac"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 4,
        "originalPickRank": 183,
        "id": "2028_R6_phi"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 4,
        "originalPickRank": 184,
        "id": "2028_R6_jax"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 3,
        "originalPickRank": 185,
        "id": "2028_R6_chi"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 3,
        "originalPickRank": 186,
        "id": "2028_R6_buf"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 3,
        "originalPickRank": 187,
        "id": "2028_R6_sf"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "hou",
        "currentTeamId": "no",
        "value": 3,
        "originalPickRank": 188,
        "id": "2028_R6_hou"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 3,
        "originalPickRank": 189,
        "id": "2028_R6_lar"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 3,
        "originalPickRank": 190,
        "id": "2028_R6_den"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "ne",
        "currentTeamId": "ne",
        "value": 3,
        "originalPickRank": 191,
        "id": "2028_R6_ne"
    },
    {
        "year": 2028,
        "round": 6,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 3,
        "originalPickRank": 192,
        "id": "2028_R6_sea"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "lv",
        "currentTeamId": "lv",
        "value": 3,
        "originalPickRank": 193,
        "id": "2028_R7_lv"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "nyj",
        "currentTeamId": "lac",
        "value": 3,
        "originalPickRank": 194,
        "id": "2028_R7_nyj"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "ari",
        "currentTeamId": "ari",
        "value": 3,
        "originalPickRank": 195,
        "id": "2028_R7_ari"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "ten",
        "currentTeamId": "ten",
        "value": 3,
        "originalPickRank": 196,
        "id": "2028_R7_ten"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "nyg",
        "currentTeamId": "nyg",
        "value": 3,
        "originalPickRank": 197,
        "id": "2028_R7_nyg"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "cle",
        "currentTeamId": "lar",
        "value": 3,
        "originalPickRank": 198,
        "id": "2028_R7_cle"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "was",
        "currentTeamId": "was",
        "value": 3,
        "originalPickRank": 199,
        "id": "2028_R7_was"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "no",
        "currentTeamId": "hou",
        "value": 3,
        "originalPickRank": 200,
        "id": "2028_R7_no"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "kc",
        "currentTeamId": "kc",
        "value": 3,
        "originalPickRank": 201,
        "id": "2028_R7_kc"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "cin",
        "currentTeamId": "cin",
        "value": 3,
        "originalPickRank": 202,
        "id": "2028_R7_cin"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "mia",
        "currentTeamId": "mia",
        "value": 3,
        "originalPickRank": 203,
        "id": "2028_R7_mia"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "dal",
        "currentTeamId": "no",
        "value": 2,
        "originalPickRank": 204,
        "id": "2028_R7_dal"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "atl",
        "currentTeamId": "atl",
        "value": 2,
        "originalPickRank": 205,
        "id": "2028_R7_atl"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "bal",
        "currentTeamId": "bal",
        "value": 2,
        "originalPickRank": 206,
        "id": "2028_R7_bal"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "tb",
        "currentTeamId": "tb",
        "value": 2,
        "originalPickRank": 207,
        "id": "2028_R7_tb"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "ind",
        "currentTeamId": "ind",
        "value": 2,
        "originalPickRank": 208,
        "id": "2028_R7_ind"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "det",
        "currentTeamId": "det",
        "value": 2,
        "originalPickRank": 209,
        "id": "2028_R7_det"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "min",
        "currentTeamId": "min",
        "value": 2,
        "originalPickRank": 210,
        "id": "2028_R7_min"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "car",
        "currentTeamId": "car",
        "value": 2,
        "originalPickRank": 211,
        "id": "2028_R7_car"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "gb",
        "currentTeamId": "gb",
        "value": 2,
        "originalPickRank": 212,
        "id": "2028_R7_gb"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "pit",
        "currentTeamId": "pit",
        "value": 2,
        "originalPickRank": 213,
        "id": "2028_R7_pit"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "lac",
        "currentTeamId": "lac",
        "value": 2,
        "originalPickRank": 214,
        "id": "2028_R7_lac"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "phi",
        "currentTeamId": "phi",
        "value": 2,
        "originalPickRank": 215,
        "id": "2028_R7_phi"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "jax",
        "currentTeamId": "jax",
        "value": 2,
        "originalPickRank": 216,
        "id": "2028_R7_jax"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "chi",
        "currentTeamId": "chi",
        "value": 2,
        "originalPickRank": 217,
        "id": "2028_R7_chi"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "buf",
        "currentTeamId": "buf",
        "value": 2,
        "originalPickRank": 218,
        "id": "2028_R7_buf"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "sf",
        "currentTeamId": "sf",
        "value": 2,
        "originalPickRank": 219,
        "id": "2028_R7_sf"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "hou",
        "currentTeamId": "hou",
        "value": 2,
        "originalPickRank": 220,
        "id": "2028_R7_hou"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "lar",
        "currentTeamId": "lar",
        "value": 1,
        "originalPickRank": 221,
        "id": "2028_R7_lar"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "den",
        "currentTeamId": "den",
        "value": 1,
        "originalPickRank": 222,
        "id": "2028_R7_den"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "ne",
        "currentTeamId": "no",
        "value": 1,
        "originalPickRank": 223,
        "id": "2028_R7_ne"
    },
    {
        "year": 2028,
        "round": 7,
        "originalTeamId": "sea",
        "currentTeamId": "sea",
        "value": 1,
        "originalPickRank": 224,
        "id": "2028_R7_sea"
    }
];
