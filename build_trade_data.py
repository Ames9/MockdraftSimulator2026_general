# Data Source Citation:
# Trade Pick Values are based on the DraftTek Rich Hill Trade Value Chart
# https://www.drafttek.com/NFL-Trade-Value-Chart-Rich-Hill.asp

import csv
import json

# 1. Parse Rich Hill
rh_values = {}
with open('rich_hill_2026_trade_value_chart_drafttek.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        rh_values[str(row['pick'])] = int(row['rich_hill_points'])

# Base Order (1 to 32)
base_order = ["lv", "nyj", "ari", "ten", "nyg", "cle", "was", "no", "kc", "cin", "mia", "dal", "atl", "bal", "tb", "ind", "det", "min", "car", "gb", "pit", "lac", "phi", "jax", "chi", "buf", "sf", "hou", "lar", "den", "ne", "sea"]

# Initial Future Picks setup
draftPicks2027 = []
draftPicks2028 = []

for r in range(1, 8):
    for i, t in enumerate(base_order):
        # Zone-based value smoothing for future picks (Centered around 10th, 20th, 30th picks + mild slope)
        base_pick_for_value = i + 1
        if base_pick_for_value <= 11:
            base_pick_for_value = 10 + ((base_pick_for_value - 6) // 2)
        elif base_pick_for_value <= 22:
            base_pick_for_value = 20 + ((base_pick_for_value - 17) // 2)
        else:
            base_pick_for_value = 30 + ((base_pick_for_value - 27) // 2)
            
        eq_pick_for_value = (r - 1) * 32 + base_pick_for_value
        base_val = rh_values.get(str(eq_pick_for_value), 0)
        
        # Keep the original rank ID accurate to the base order, but use the eq_pick_for_value for the points
        eq_pick = (r - 1) * 32 + (i + 1)
        
        draftPicks2027.append({
            "year": 2027,
            "round": r,
            "originalTeamId": t,
            "currentTeamId": t,
            "value": int(base_val * 0.83),
            "originalPickRank": eq_pick,
            "id": f"2027_R{r}_{t}"
        })
        draftPicks2028.append({
            "year": 2028,
            "round": r,
            "originalTeamId": t,
            "currentTeamId": t,
            "value": int(base_val * 0.66),
            "originalPickRank": eq_pick,
            "id": f"2028_R{r}_{t}"
        })

# Now apply 2027 Trades
def execute_trade(year, rd, orig_team, new_team, picks_list):
    for p in picks_list:
        if p['round'] == rd and p['originalTeamId'] == orig_team:
            p['currentTeamId'] = new_team
            return

def get_pick(rd, orig_team, picks_list):
    for p in picks_list:
        if p['round'] == rd and p['originalTeamId'] == orig_team:
            return p
    return None

# TRADE 1: GB 1st -> DAL
execute_trade(2027, 1, "gb", "dal", draftPicks2027)
# TRADE 2: IND 1st -> NYJ
execute_trade(2027, 1, "ind", "nyj", draftPicks2027)
# TRADE 3: DAL 1st -> NYJ (NYJ gets earlier of DAL or DAL's from GB)
dal_orig = get_pick(1, "dal", draftPicks2027)
gb_orig = get_pick(1, "gb", draftPicks2027)
if dal_orig['originalPickRank'] < gb_orig['originalPickRank']: 
    dal_orig['currentTeamId'] = "nyj"
else:
    gb_orig['currentTeamId'] = "nyj"
# TRADE 4: MIN 4th -> CAR
execute_trade(2027, 4, "min", "car", draftPicks2027)
# TRADE 5: HOU 5th -> CLE
execute_trade(2027, 5, "hou", "cle", draftPicks2027)
# TRADE 6: DAL 5th -> PIT
execute_trade(2027, 5, "dal", "pit", draftPicks2027)
# TRADE 7: PIT 5th -> MIA
execute_trade(2027, 5, "pit", "mia", draftPicks2027)
# TRADE 8: SF 6th -> KC
execute_trade(2027, 6, "sf", "kc", draftPicks2027)
# TRADE 9: NYJ 6th -> MIN
execute_trade(2027, 6, "nyj", "min", draftPicks2027)
# TRADE 10: GB 6th -> PHI
execute_trade(2027, 6, "gb", "phi", draftPicks2027)
# TRADE 11: NO 6th -> NE
execute_trade(2027, 6, "no", "ne", draftPicks2027)
# TRADE 12: CLE 6th -> HOU
execute_trade(2027, 6, "cle", "hou", draftPicks2027)
# TRADE 13: PHI 6th -> NYJ
execute_trade(2027, 6, "phi", "nyj", draftPicks2027)
# TRADE 14: LAC 6th -> NO
execute_trade(2027, 6, "lac", "no", draftPicks2027)
# TRADE 15: LAR 7th -> BAL
execute_trade(2027, 7, "lar", "bal", draftPicks2027)
# TRADE 16: BAL 7th (which was LAR 7th) -> LAC
lar_7 = get_pick(7, "lar", draftPicks2027)
lar_7['currentTeamId'] = "lac"
# TRADE 17: NO 7th -> DEN
execute_trade(2027, 7, "no", "den", draftPicks2027)
# TRADE 18: PHI 7th -> MIN
execute_trade(2027, 7, "phi", "min", draftPicks2027)
# TRADE 19: LAC 7th (conditional) -> HOU
execute_trade(2027, 7, "lac", "hou", draftPicks2027)
# TRADE 20: ATL 7th (conditional) -> SEA
execute_trade(2027, 7, "atl", "sea", draftPicks2027)
# TRADE 21: NYG 7th (conditional) -> MIA
execute_trade(2027, 7, "nyg", "mia", draftPicks2027)
# TRADE 22: BAL 7th -> PHI
execute_trade(2027, 7, "bal", "phi", draftPicks2027)


out = f"const richHillValues = {json.dumps(rh_values, indent=4)};\n\n"
out += f"const draftPicks2027 = {json.dumps(draftPicks2027, indent=4)};\n\n"
out += f"const draftPicks2028 = {json.dumps(draftPicks2028, indent=4)};\n"

with open('data.js', 'a') as f:
    f.write("\n\n// Phase 6 Trade Logic Data\n")
    f.write(out)

print("Data successfully generated and appended to data.js!")
