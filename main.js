function calculateBuild() {
    let characters = [
        [1,5,2,4,4,1,1,1,1,8,8,8,8],
        [6,2,5,1,2,6,6,6,6,5,5,5,5],
        [2,4,1,5,4,2,2,2,2,8,8,8,8],
        [10,1,8,1,1,8,8,8,8,3,3,3,3],
        [6,2,4,2,2,6,6,6,6,4,4,4,4],
        [4,3,3,3,3,5,5,5,5,5,5,5,5],
        [0,4,3,5,5,0,0,0,0,10,10,10,10],
        [10,0,6,0,0,10,10,10,10,0,0,0,0],
        [2,5,4,2,4,2,2,2,2,7,7,7,7],
        [8,1,10,0,1,9,9,9,9,2,2,2,2],
        [5,3,7,1,3,5,5,5,5,5,5,5,5],
        [0,5,4,3,5,0,0,0,0,9,9,9,9],
        [3,4,2,3,3,4,4,4,4,6,6,6,6],
        [7,1,9,3,2,7,7,7,7,3,3,3,3],
        [9,0,5,1,0,10,10,10,10,1,1,1,1],
        [3,4,3,4,3,3,3,3,3,7,7,7,7]
    ];

    let bodies = [
        [0,6,0,6,6,1,5,0,2,4,5,2,3],
        [3,1,3,1,1,5,1,4,2,1,1,2,0],
        [4,1,1,3,2,4,5,2,0,1,5,1,1],
        [4,0,2,5,0,5,2,3,1,0,1,1,0],
        [2,4,3,3,4,3,3,3,3,3,2,3,3],
        [1,2,1,2,3,4,3,3,3,3,3,2,3],
        [3,3,2,4,4,3,3,5,4,2,2,4,2],
        [1,5,3,5,5,2,2,4,3,4,3,4,3],
        [3,2,4,7,3,2,4,3,3,4,4,3,3],
        [2,5,4,3,5,2,2,3,4,4,2,3,4],
        [1,6,3,4,6,1,3,1,1,5,4,4,2],
        [0,7,1,4,7,0,1,2,1,5,4,5,4],
        [2,2,1,0,3,4,2,3,3,3,2,3,2],
        [0,3,1,3,3,4,2,4,3,2,3,5,1]
    ];

    let tires = [
        [0,5,1,3,5,1,2,2,2,3,3,4,2],
        [4,2,3,7,2,2,2,2,1,0,1,0,1],
        [2,2,4,1,2,3,2,4,2,4,4,3,4],
        [2,4,2,5,3,2,3,2,3,3,3,3,3],
        [1,4,2,6,4,1,1,1,4,2,1,2,3],
        [3,3,3,6,1,3,4,2,1,1,1,2,2],
        [0,6,0,4,6,0,3,0,3,4,4,4,4],
        [4,0,1,2,0,4,3,1,2,2,2,1,0],
        [3,1,4,0,0,4,0,4,0,2,0,2,1]
    ];

    let gliders = [
        [2,1,2,0,1,1,0,1,2,1,1,0,1],
        [1,1,1,1,1,1,1,0,2,1,0,1,1],
        [0,2,1,1,2,0,1,1,1,1,0,1,2],
        [1,2,2,0,2,0,0,1,1,1,1,0,2]
    ];

    let weights = [
        document.getElementById("weight").value,
        document.getElementById("acceleration").value,
        document.getElementById("onRoadTraction").value,
        document.getElementById("offRoadTraction").value,
        document.getElementById("miniTurbo").value,
        document.getElementById("groundSpeed").value,
        document.getElementById("waterSpeed").value,
        document.getElementById("antiGravitySpeed").value,
        document.getElementById("airSpeed").value,
        document.getElementById("groundHandling").value,
        document.getElementById("waterHandling").value,
        document.getElementById("antiGravityHandling").value,
        document.getElementById("airHandling").value,
    ];

    let character_map = [
        ["Baby Mario", "Baby Luigi", "Dry Bones"],
        ["Luigi", "Iggy"],
        ["Koopa Troopa", "Lakitu"],
        ["Metal Mario", "Pink Gold Peach", "Gold Mario"],
        ["Mario", "Ludwig", "Mii (medium)"],
        ["Peach", "Daisy", "Yoshi"],
        ["Baby Peach", "Baby Daisy"],
        ["Bowser", "Morton"],
        ["Toadette", "Wendy", "Isabelle"],
        ["Donkey Kong", "Waluigi", "Roy"],
        ["Tanooki Mario", "Villager (male)", "Inking Boy"],
        ["Baby Rosalina", "Lemmy"],
        ["Cat Peach", "Villager (female)", "Inking Girl"],
        ["Rosalina", "Link", "King Boo", "Link (BotW)"],
        ["Wario", "Dry Bowser"],
        ["Toad", "Shy Guy", "Larry"]
    ];

    let body_map = [
        ["Landship", "Streetle"],
        ["Circuit Special", "B Dasher", "P-Wing"],
        ["Steel Driver", "Tri-Speeder", "Bone Rattler"],
        ["Badwagon", "Standard ATV", "GLA"],
        ["Standard Kart", "The Duke", "300 SL Roadster"],
        ["Prancer", "Sport Bike", "Jet Bike"],
        ["Mach 8", "Sports Coupe", "Inkstriker"],
        ["Standard Bike", "Flame Rider", "Wild Wiggler", "W-25 Silver Arrow"],
        ["Tanooki Kart", "Koopa Clown", "Master Cycle Zero"],
        ["Cat Cruiser", "Comet", "Yoshi Bike", "Teddy Buggy"],
        ["Pipe Frame", "Varmint", "City Tripper"],
        ["BiddyBuggy", "Mr. Scooty"],
        ["Sneeker", "Gold Standard", "Master Cycle"],
        ["Blue Falcon", "Splat Buggy"]
    ];

    let tire_map = [
        ["Button", "Leaf Tires"],
        ["Monster", "Hot Monster", "Ancient Tires"],
        ["Slim", "Wood", "Crimson Slim"],
        ["Standard", "Blue Standard", "GLA Tires"],
        ["Sponge", "Cusion"],
        ["Off-Road", "Retro Off-Road", "Triforce Tires"],
        ["Roller", "Azure Roller"],
        ["Metal", "Gold Tires"],
        ["Slick", "Cyber Slicker"]
    ]

    let glider_map = [
        ["Wario Wing", "Plane Glider", "Gold Glider", "Paraglider"],
        ["Super Glider", "Waddle Wing", "Hylian Kite"],
        ["Cloud Glider", "Parachute", "Flower Glider", "Paper Glider"],
        ["Peach Parasol", "Parafoil", "Bowser Kite", "MKTV Parafoil"]
    ]

    let best_score = 0;
    let best_build = [0, 0, 0, 0]; // Character, body, tire, glider
    for (const [c_index, c_stats] of characters.entries()) {
        for (const [b_index, b_stats] of bodies.entries()) {
            for (const [t_index, t_stats] of tires.entries()) {
                for (const [g_index, g_stats] of gliders.entries()) {
                    let this_score = 0;
                    for (let i=0; i<c_stats.length; i++) {
                        this_score += weights[i] * (c_stats[i] + b_stats[i] + t_stats[i] + g_stats[i]);
                    }
                    if (this_score > best_score) {
                        best_score = this_score;
                        best_build = [c_index, b_index, t_index, g_index];
                    }
                }
            }
        }
    }

    document.getElementById("characters").value = character_map[best_build[0]].join("\r\n");
    document.getElementById("characters").setAttribute("rows", character_map[best_build[0]].length);
    document.getElementById("karts").value = body_map[best_build[1]].join("\r\n");
    document.getElementById("karts").setAttribute("rows", character_map[best_build[1]].length);
    document.getElementById("tires").value = tire_map[best_build[2]].join("\r\n");
    document.getElementById("tires").setAttribute("rows", character_map[best_build[2]].length);
    document.getElementById("gliders").value = glider_map[best_build[3]].join("\r\n");
    document.getElementById("gliders").setAttribute("rows", character_map[best_build[3]].length);

    document.getElementById("wStat").value = "#".repeat(characters[best_build[0]][0] + bodies[best_build[1]][0] + tires[best_build[2]][0] + gliders[best_build[3]][0]);
    document.getElementById("accStat").value = "#".repeat(characters[best_build[0]][1] + bodies[best_build[1]][1] + tires[best_build[2]][1] + gliders[best_build[3]][1]);
    document.getElementById("ontStat").value = "#".repeat(characters[best_build[0]][2] + bodies[best_build[1]][2] + tires[best_build[2]][2] + gliders[best_build[3]][2]);
    document.getElementById("offtStat").value = "#".repeat(characters[best_build[0]][3] + bodies[best_build[1]][3] + tires[best_build[2]][3] + gliders[best_build[3]][3]);
    document.getElementById("mtStat").value = "#".repeat(characters[best_build[0]][4] + bodies[best_build[1]][4] + tires[best_build[2]][4] + gliders[best_build[3]][4]);
    document.getElementById("gsStat").value = "#".repeat(characters[best_build[0]][5] + bodies[best_build[1]][5] + tires[best_build[2]][5] + gliders[best_build[3]][5]);
    document.getElementById("wsStat").value = "#".repeat(characters[best_build[0]][6] + bodies[best_build[1]][6] + tires[best_build[2]][6] + gliders[best_build[3]][6]);
    document.getElementById("agsStat").value = "#".repeat(characters[best_build[0]][7] + bodies[best_build[1]][7] + tires[best_build[2]][7] + gliders[best_build[3]][7]);
    document.getElementById("asStat").value = "#".repeat(characters[best_build[0]][8] + bodies[best_build[1]][8] + tires[best_build[2]][8] + gliders[best_build[3]][8]);
    document.getElementById("ghStat").value = "#".repeat(characters[best_build[0]][9] + bodies[best_build[1]][9] + tires[best_build[2]][9] + gliders[best_build[3]][9]);
    document.getElementById("whStat").value = "#".repeat(characters[best_build[0]][10] + bodies[best_build[1]][10] + tires[best_build[2]][10] + gliders[best_build[3]][10]);
    document.getElementById("aghStat").value = "#".repeat(characters[best_build[0]][11] + bodies[best_build[1]][11] + tires[best_build[2]][11] + gliders[best_build[3]][11]);
    document.getElementById("ahStat").value = "#".repeat(characters[best_build[0]][12] + bodies[best_build[1]][12] + tires[best_build[2]][12] + gliders[best_build[3]][12]);

}