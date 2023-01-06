"""
WG: Weight
AC: Acceleration
ON: On-Road traction
OF: (Off-Road) Traction
MT: Mini-Turbo
SL: Ground Speed
SW: Water Speed
SA: Anti-Gravity Speed
SG: Air Speed
TL: Ground Handling
TW: Water Handling
TA: Anti-Gravity Handling
TG: Air Handling
"""
import csv
from pprint import pprint


def get_total_stats(body, character, glider, tire):
    stats_sum = dict()
    for stat in body.keys():
        if stat != "Name":
            stats_sum[stat] = (
                int(body[stat])
                + int(character[stat])
                + int(glider[stat])
                + int(tire[stat])
            )
        else:
            stats_sum[
                stat
            ] = f"{character[stat]}//{body[stat]}//{tire[stat]}//{glider[stat]}"
    return stats_sum


if __name__ == "__main__":
    with open("stats/unique_bodies.csv", "r") as f:
        reader = csv.DictReader(f, delimiter=",")
        bodies = [body for body in reader]
    with open("stats/unique_characters.csv", "r") as f:
        reader = csv.DictReader(f, delimiter=",")
        characters = [character for character in reader]
    with open("stats/unique_gliders.csv", "r") as f:
        reader = csv.DictReader(f, delimiter=",")
        gliders = [glider for glider in reader]
    with open("stats/unique_tires.csv", "r") as f:
        reader = csv.DictReader(f, delimiter=",")
        tires = [tire for tire in reader]

    weights = {
        "WG": 1,
        "AC": 80,
        "ON": 20,
        "OF": 10,
        "MT": 90,
        "SL": 100,
        "SW": 5,
        "SA": 5,
        "SG": 5,
        "TL": 0,
        "TW": 5,
        "TA": 5,
        "TG": 5,
    }

    scores = {}
    for body in bodies:
        for character in characters:
            for glider in gliders:
                for tire in tires:
                    kart_stats = get_total_stats(body, character, glider, tire)
                    total_score = 0
                    for stat in kart_stats:
                        if stat != "Name":
                            total_score += weights[stat] * kart_stats[stat]
                    scores[kart_stats["Name"]] = total_score
    sorted_builds = dict(sorted(scores.items(), key=lambda item: item[1], reverse=True))
    best_builds = [tuple(b) for b in sorted_builds.items()]
    pprint(best_builds[:5])