import json
import os

team_map = {
    "Las Vegas Raiders": "lv",
    "New York Jets": "nyj",
    "Arizona Cardinals": "ari",
    "Tennessee Titans": "ten",
    "New York Giants": "nyg",
    "Cleveland Browns": "cle",
    "Washington Commanders": "was",
    "New Orleans Saints": "no",
    "Kansas City Chiefs": "kc",
    "Cincinnati Bengals": "cin",
    "Miami Dolphins": "mia",
    "Dallas Cowboys": "dal",
    "Los Angeles Rams": "lar",
    "Baltimore Ravens": "bal",
    "Tampa Bay Buccaneers": "tb",
    "Detroit Lions": "det",
    "Minnesota Vikings": "min",
    "Carolina Panthers": "car",
    "Green Bay Packers": "gb",
    "Pittsburgh Steelers": "pit",
    "Los Angeles Chargers": "lac",
    "Philadelphia Eagles": "phi",
    "Jacksonville Jaguars": "jax",
    "Chicago Bears": "chi",
    "Buffalo Bills": "buf",
    "San Francisco 49ers": "sf",
    "Houston Texans": "hou",
    "Denver Broncos": "den",
    "New England Patriots": "ne",
    "Seattle Seahawks": "sea",
    "Indianapolis Colts": "ind",
    "Atlanta Falcons": "atl"
}

needs = {}

with open("raw_needs.txt", "r") as f:
    lines = [l.strip() for l in f.readlines()]

for i, line in enumerate(lines):
    for team, tid in team_map.items():
        if line == team:
            # Check upcoming lines for needs
            for j in range(1, 15):
                if i + j < len(lines) and lines[i+j].startswith("Biggest needs:"):
                    needs_str = lines[i+j].replace("Biggest needs:", "").strip()
                    needs_list = [n.strip().upper() for n in needs_str.split(",")]
                    
                    pos_map = {
                        "LG": "IOL", "RG": "IOL", "OG": "IOL", "C": "IOL",
                        "RT": "OT", "LT": "OT",
                        "DT": "DL",
                        "FS": "S", "SS": "S",
                        "EDGE": "EDGE", "Edge": "EDGE"
                    }
                    mapped_needs = [pos_map.get(n, n) for n in needs_list]
                    
                    needs[tid] = mapped_needs
                    break

# Read data.js up to previously added parts
with open("data.js", "r") as f:
    content = f.read()

# Try to remove an old teamNeeds chunk if it exists, to be idempotent
if "const teamNeeds =" in content:
    content = content[:content.find("const teamNeeds =")]

content = content.strip() + "\n\nconst teamNeeds = " + json.dumps(needs, indent=4) + ";\n"

with open("data.js", "w") as f:
    f.write(content)
