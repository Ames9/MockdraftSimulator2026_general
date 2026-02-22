import json

team_map = {
    "Las Vegas": "lv",
    "NY Jets": "nyj",
    "Arizona": "ari",
    "Tennessee": "ten",
    "NY Giants": "nyg",
    "Cleveland": "cle",
    "Washington": "was",
    "New Orleans": "no",
    "Kansas City": "kc",
    "Cincinnati": "cin",
    "Miami": "mia",
    "Dallas": "dal",
    "LA Rams": "lar",
    "Baltimore": "bal",
    "Tampa Bay": "tb",
    "Detroit": "det",
    "Minnesota": "min",
    "Carolina": "car",
    "Green Bay": "gb",
    "Pittsburgh": "pit",
    "LA Chargers": "lac",
    "Philadelphia": "phi",
    "Jacksonville": "jax",
    "Chicago": "chi",
    "Buffalo": "buf",
    "San Francisco": "sf",
    "Houston": "hou",
    "Denver": "den",
    "New England": "ne",
    "Seattle": "sea",
    "Indianapolis": "ind",
    "Atlanta": "atl"
}

picks = []

with open("raw_order.txt") as f:
    lines = [l.strip() for l in f.readlines()]

current_pick = None
current_round = 1

for i, line in enumerate(lines):
    if "Round" in line:
        current_round = int(line[0])
        continue
    
    if line.isdigit():
        current_pick = int(line)
        team_name = None
        for j in range(1, 4): # scan next 3 lines for a valid team name
            if i + j < len(lines) and lines[i+j] in team_map:
                team_name = lines[i+j]
                break
        
        if team_name:
            picks.append({
                "pick": current_pick,
                "round": current_round,
                "teamId": team_map[team_name],
                "teamName": team_name
            })

# Read data.js up to "const draftOrder"
with open("data.js", "r") as f:
    content = f.read()

split_idx = content.find("const draftOrder = [")
if split_idx != -1:
    content = content[:split_idx]

# Append the new pure list
content = content.strip() + "\n\nconst draftOrder = " + json.dumps(picks, indent=4) + ";\n"

with open("data.js", "w") as f:
    f.write(content)
