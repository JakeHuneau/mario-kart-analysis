import csv


def get_uniques(stats: dict) -> set:
    return set(tuple(s.values())[1:] for s in stats)


if __name__ == "__main__":
    with open("stats/bodies.csv") as f:
        reader = csv.DictReader(f, delimiter=",")
        bodies = [body for body in reader]
    with open("stats/characters.csv") as f:
        reader = csv.DictReader(f, delimiter=",")
        characters = [character for character in reader]
    with open("stats/gliders.csv") as f:
        reader = csv.DictReader(f, delimiter=",")
        gliders = [glider for glider in reader]
    with open("stats/tires.csv") as f:
        reader = csv.DictReader(f, delimiter=",")
        tires = [tire for tire in reader]

    unique_bodies = get_uniques(bodies)
    unique_characters = get_uniques(characters)
    unique_gliders = get_uniques(gliders)
    unique_tires = get_uniques(tires)

    with open("stats/unique_bodies.csv", "w") as f:
        writer = csv.writer(f, delimiter=",")
        writer.writerows(unique_bodies)
    with open("stats/unique_characters.csv", "w") as f:
        writer = csv.writer(f, delimiter=",")
        writer.writerows(unique_characters)
    with open("stats/unique_gliders.csv", "w") as f:
        writer = csv.writer(f, delimiter=",")
        writer.writerows(unique_gliders)
    with open("stats/unique_tires.csv", "w") as f:
        writer = csv.writer(f, delimiter=",")
        writer.writerows(unique_tires)
