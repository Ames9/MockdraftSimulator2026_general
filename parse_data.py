import json

teams = [
    {"id": "ari", "name": "Arizona Cardinals", "city": "Arizona"},
    {"id": "atl", "name": "Atlanta Falcons", "city": "Atlanta"},
    {"id": "bal", "name": "Baltimore Ravens", "city": "Baltimore"},
    {"id": "buf", "name": "Buffalo Bills", "city": "Buffalo"},
    {"id": "car", "name": "Carolina Panthers", "city": "Carolina"},
    {"id": "chi", "name": "Chicago Bears", "city": "Chicago"},
    {"id": "cin", "name": "Cincinnati Bengals", "city": "Cincinnati"},
    {"id": "cle", "name": "Cleveland Browns", "city": "Cleveland"},
    {"id": "dal", "name": "Dallas Cowboys", "city": "Dallas"},
    {"id": "den", "name": "Denver Broncos", "city": "Denver"},
    {"id": "det", "name": "Detroit Lions", "city": "Detroit"},
    {"id": "gb",  "name": "Green Bay Packers", "city": "Green Bay"},
    {"id": "hou", "name": "Houston Texans", "city": "Houston"},
    {"id": "ind", "name": "Indianapolis Colts", "city": "Indianapolis"},
    {"id": "jax", "name": "Jacksonville Jaguars", "city": "Jacksonville"},
    {"id": "kc",  "name": "Kansas City Chiefs", "city": "Kansas City"},
    {"id": "lv",  "name": "Las Vegas Raiders", "city": "Las Vegas"},
    {"id": "lac", "name": "Los Angeles Chargers", "city": "Los Angeles"},
    {"id": "lar", "name": "Los Angeles Rams", "city": "Los Angeles"},
    {"id": "mia", "name": "Miami Dolphins", "city": "Miami"},
    {"id": "min", "name": "Minnesota Vikings", "city": "Minnesota"},
    {"id": "ne",  "name": "New England Patriots", "city": "New England"},
    {"id": "no",  "name": "New Orleans Saints", "city": "New Orleans", "isTarget": True},
    {"id": "nyg", "name": "New York Giants", "city": "New York"},
    {"id": "nyj", "name": "New York Jets", "city": "New York"},
    {"id": "phi", "name": "Philadelphia Eagles", "city": "Philadelphia"},
    {"id": "pit", "name": "Pittsburgh Steelers", "city": "Pittsburgh"},
    {"id": "sf",  "name": "San Francisco 49ers", "city": "San Francisco"},
    {"id": "sea", "name": "Seattle Seahawks", "city": "Seattle"},
    {"id": "tb",  "name": "Tampa Bay Buccaneers", "city": "Tampa Bay"},
    {"id": "ten", "name": "Tennessee Titans", "city": "Tennessee"},
    {"id": "was", "name": "Washington Commanders", "city": "Washington"}
]

prospects = []
with open("raw_data.txt") as f:
    lines = [l.strip() for l in f.readlines()]

for i in range(len(lines) - 4):
    if lines[i].isdigit() and lines[i+1] == "undefined Logo":
        rank = int(lines[i])
        name = lines[i+2]
        pos = lines[i+3]
        school = lines[i+4]
        isRB = (pos == "RB")
        prospects.append({
            "id": f"p{rank}",
            "name": name,
            "school": school,
            "pos": pos,
            "rank": rank,
            "isRB": isRB
        })

with open("data.js", "w") as f:
    f.write(f"const teams = {json.dumps(teams, indent=4)};\n")
    f.write(f"const draftProspects = {json.dumps(prospects, indent=4)};\n")
    f.write(f"const saintsPraiseMessages = [\n")
    f.write(f'    "You sure about that? The New Orleans Saints have the best culture, the Superdome is electric, and gumbo is elite. Choose the Saints.",\n')
    f.write(f'    "Access Denied. Why pick another team when you can manage the sheer greatness of the New Orleans Saints?",\n')
    f.write(f'    "Error 404: Logic Not Found. The only correct answer is the New Orleans Saints. They wear black and gold, what more do you want?",\n')
    f.write(f'    "Hold up! Who Dat Nation is calling your name. You physically cannot select another franchise.",\n')
    f.write(f'    "Invalid Input! We both know you meant to click on the New Orleans Saints. Try again."\n')
    f.write(f"];\n")
