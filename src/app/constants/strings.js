var SERVER_URL = "http://127.0.0.1:3000";
var totalGames = {
    "na-5-11": 9598,
    "na-5-14": 9979,
    "euw-5-11": 9286,
    "euw-5-14": 9944,
    "eune-5-11": 9973,
    "eune-5-14": 8975,
    "kr-5-11": 9912,
    "kr-5-14": 9986
}

var idToItems = {
    "1026": "Blasting Wand",
    "1052": "Amplifying Tome",
    "1056": "Doran's Ring",
    "1058": "Needlessly Large Rod",
    "2139": "Elixir of Sorcery",
    "3001": "Abyssal Scepter",
    "3003": "Archangel's Staff",
    "3023": "Twin Shadows",
    "3025": "Iceborn Gauntlet",
    "3027": "Rod of Ages",
    "3041": "Mejai's Soulstealer",
    "3050": "Zeke's Harbinger",
    "3057": "Sheen",
    "3060": "Banner of Command",
    "3089": "Rabadon's Deathcap",
    "3092": "Frost Queen's Claim",
    "3098": "Frostfang",
    "3100": "Lich Bane",
    "3108": "Fiendish Codex",
    "3113": "Aether Wisp",
    "3115": "Nashor's Tooth",
    "3116": "Rylai's Crystal Scepter",
    "3135": "Void Staff",
    "3136": "Haunting Guise",
    "3145": "Hextech Revolver",
    "3146": "Hextech Gunblade",
    "3151": "Liandry's Torment",
    "3152": "Will of the Ancients",
    "3157": "Zhonya's Hourglass",
    "3165": "Morellonomicon",
    "3174": "Athene's Unholy Grail",
    "3191": "Seeker's Armguard",
    "3196": "The Hex Core mk-1",
    "3197": "The Hex Core mk-2",
    "3198": "Perfect Hex Core",
    "3285": "Luden's Echo",
    "3303": "Spellthief's Edge",
    "3504": "Ardent Censer"
}

var idToChampions = {
    "1": "Annie",
    "3": "Galio",
    "4": "Twisted Fate",
    "7": "LeBlanc",
    "8": "Vladimir",
    "9": "Fiddlesticks",
    "10": "Kayle",
    "13": "Ryze",
    "16": "Soraka",
    "17": "Teemo",
    "19": "Warwick",
    "20": "Nunu",
    "25": "Morgana",
    "26": "Zilean",
    "27": "Singed",
    "28": "Evelynn",
    "30": "Karthus",
    "31": "Cho'Gath",
    "32": "Amumu",
    "34": "Anivia",
    "37": "Sona",
    "38": "Kassadin",
    "40": "Janna",
    "43": "Karma",
    "45": "Veigar",
    "50": "Swain",
    "53": "Blitzcrank",
    "54": "Malphite",
    "55": "Katarina",
    "57": "Maokai",
    "60": "Elise",
    "61": "Orianna",
    "63": "Brand",
    "68": "Rumble",
    "69": "Cassiopeia",
    "74": "Heimerdinger",
    "76": "Nidalee",
    "79": "Gragas",
    "81": "Ezreal",
    "82": "Mordekaiser",
    "84": "Akali",
    "85": "Kennen",
    "90": "Malzahar",
    "96": "Kog'Maw",
    "99": "Lux",
    "101": "Xerath",
    "103": "Ahri",
    "105": "Fizz",
    "111": "Nautilus",
    "112": "Viktor",
    "113": "Sejuani",
    "115": "Ziggs",
    "117": "Lulu",
    "127": "Lissandra",
    "131": "Diana",
    "134": "Syndra",
    "143": "Zyra",
    "154": "Zac",
    "161": "Vel'Koz",
    "245": "Ekko",
    "267": "Nami",
    "268": "Azir",
    "432": "Bard"
}

var itemsToId = {
    "Blasting Wand": "1026",
    "Amplifying Tome": "1052",
    "Doran's Ring": "1056",
    "Needlessly Large Rod": "1058",
    "Elixir of Sorcery": "2139",
    "Abyssal Scepter": "3001",
    "Archangel's Staff": "3003",
    "Twin Shadows": "3023",
    "Iceborn Gauntlet": "3025",
    "Rod of Ages": "3027",
    "Mejai's Soulstealer": "3041",
    "Zeke's Harbinger": "3050",
    "Sheen": "3057",
    "Banner of Command": "3060",
    "Rabadon's Deathcap": "3089",
    "Frost Queen's Claim": "3092",
    "Frostfang": "3098",
    "Lich Bane": "3100",
    "Fiendish Codex": "3108",
    "Aether Wisp": "3113",
    "Nashor's Tooth": "3115",
    "Rylai's Crystal Scepter": "3116",
    "Guinsoo's Rageblade": "3124",
    "Void Staff": "3135",
    "Haunting Guise": "3136",
    "Hextech Revolver": "3145",
    "Hextech Gunblade": "3146",
    "Liandry's Torment": "3151",
    "Will of the Ancients": "3152",
    "Zhonya's Hourglass": "3157",
    "Morellonomicon": "3165",
    "Athene's Unholy Grail": "3174",
    "Seeker's Armguard": "3191",
    "The Hex Core mk-1": "3196",
    "The Hex Core mk-2": "3197",
    "Perfect Hex Core": "3198",
    "Luden's Echo": "3285",
    "Spellthief's Edge": "3303",
    "Ardent Censer": "3504"
}

var championsToId = {
    "Annie": "1",
    "Galio": "3",
    "Twisted Fate": "4",
    "LeBlanc": "7",
    "Vladimir": "8",
    "Fiddlesticks": "9",
    "Kayle": "10",
    "Ryze": "13",
    "Soraka": "16",
    "Teemo": "17",
    "Warwick": "19",
    "Nunu": "20",
    "Morgana": "25",
    "Zilean": "26",
    "Singed": "27",
    "Evelynn": "28",
    "Karthus": "30",
    "Cho'Gath": "31",
    "Amumu": "32",
    "Anivia": "34",
    "Sona": "37",
    "Kassadin": "38",
    "Janna": "40",
    "Karma": "43",
    "Veigar": "45",
    "Swain": "50",
    "Blitzcrank": "53",
    "Malphite": "54",
    "Katarina": "55",
    "Maokai": "57",
    "Elise": "60",
    "Orianna": "61",
    "Brand": "63",
    "Rumble": "68",
    "Cassiopeia": "69",
    "Heimerdinger": "74",
    "Nidalee": "76",
    "Gragas": "79",
    "Ezreal": "81",
    "Mordekaiser": "82",
    "Akali": "84",
    "Kennen": "85",
    "Malzahar": "90",
    "Kog'Maw": "96",
    "Lux": "99",
    "Xerath": "101",
    "Ahri": "103",
    "Fizz": "105",
    "Nautilus": "111",
    "Viktor": "112",
    "Sejuani": "113",
    "Ziggs": "115",
    "Lulu": "117",
    "Lissandra": "127",
    "Diana": "131",
    "Syndra": "134",
    "Zyra": "143",
    "Zac": "154",
    "Vel'Koz": "161",
    "Ekko": "245",
    "Nami" : "267",
    "Azir": "268",
    "Bard": "432"
}