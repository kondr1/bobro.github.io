const IMAGE = "./photo_2025-11-10_21-02-06.png";

const CATEGORIES = [
    { id: "choice-buldzhat", name: "Выбор Булджать", nominees: [
        "Grand Theft Auto VI", "The Blood of Dawnwalker", "PRAGMATA",
        "Resident Evil Requiem", "Control: Resonant", "007: First Light"] },

    { id: "game-of-the-year", name: "Игра Года", nominees: [
        "Grand Theft Auto VI", "The Blood of Dawnwalker", "PRAGMATA",
        "Resident Evil Requiem", "Control: Resonant", "007: First Light", "Forza Horizon 6", "Onimusha: Way of the Sword",
        "ACE COMBAT 8: WINGS OF THEVE","Nioh 3","Mewgenics", "Resonance: A Plague Tale Legacy", "Lego Batman: Legacy of the Dark Knight"] },


    { id: "single-player", name: "Single-Player Года", nominees: [
        "PRAGMATA", "Resident Evil Requiem", "007: First Light", "Control: Resonant",
        "The Blood of Dawnwalker", "Gears of War: E-Day", "Grand Theft Auto VI",
        "ACE COMBAT 8: WINGS OF THEVE", "Onimusha: Way of the Sword", "Resonance: A Plague Tale Legacy",
        "Crimson Desert", "Mortal Shell II", "Lego Batman: Legacy of the Dark Knight"] },

    { id: "multiplayer", name: "Multiplayer Года", cards: true, ratio: "2 / 3",
        images: {
        "Call of Duty: Modern Warfare 4": "Pictures/call.webp", "Marathon": "Pictures/marathon.webp",
        "Gears of War: E-Day": "Pictures/gears.webp", "Star Wars: Galactic Racer": "Pictures/star.webp",
        "Forza Horizon 6": "Pictures/forza.webp", "Marvel Tōkon: Fighting Souls": "Pictures/marvel.webp",
        "2XKO": "Pictures/2xko.webp", "Avatar Legends: The Fighting Game": "Pictures/avatar.webp" },
        nominees: [
        "Call of Duty: Modern Warfare 4", "Marathon", "Gears of War: E-Day",
        "Star Wars: Galactic Racer", "Forza Horizon 6", "Marvel Tōkon: Fighting Souls",
        "2XKO", "Avatar Legends: The Fighting Game"] },

    { id: "friend-slop", name: "Френдслоп Года", cards: true, ratio: "2 / 3",
        images: {
        "Big Walk": "Pictures/big.webp", "How to Fish": "Pictures/fish.webp", "Bombanana": "Pictures/bomb.webp",
        "Grain Rot": "Pictures/grain.webp", "Crashout Crew": "Pictures/crashout.webp", "Dumb Ways to Build": "Pictures/dumb.webp",
        "YAPYAP": "Pictures/yapyap.webp", "MECCHA CHAMELEON": "Pictures/mecha.webp" }, 
        
        nominees: [
        "Big Walk", "How to Fish", "Bombanana", "Grain Rot",
        "Crashout Crew", "Dumb Ways to Build", "YAPYAP", "MECCHA CHAMELEON"] },

    { id: "indie", name: "Инди Года", nominees: [
        "Mewgenics", "Pathologic 3", "Valheim", "MECCHA CHAMELEON", "Windrose",
        "Big Walk", "How to Fish", "Bombanana", "MOUSE: P.I. For Hire",
        "ReStory: Chill Electronics Repairs", "REPLACED", "Dressmaker", "Grain Rot",
        "Of Ash and Steel", "Palworld", "shapez 2 - Factory", "Nivalis Nights", "Mina the Hollower"] },

    { id: "shooter", name: "Шутер Года", cards: true, ratio: "2 / 3",
        images: {
        "Marathon": "Pictures/marathon.webp", "Call of Duty: Modern Warfare 4": "Pictures/call.webp",
        "PRAGMATA": "Pictures/pragmata.webp", "Gears of War: E-Day": "Pictures/gears.webp",
        "High on Life 2": "Pictures/high.webp", "Highguard": "Pictures/highguard.webp",
        "MOUSE: P.I. For Hire": "Pictures/mouse.webp", "No More Room in Hell 2": "Pictures/no.webp" },  
        nominees: [
        "Marathon", "Call of Duty: Modern Warfare 4", "PRAGMATA", "Gears of War: E-Day",
        "High on Life 2", "Highguard", "MOUSE: P.I. For Hire", "No More Room in Hell 2"] },

    { id: "strategy", name: "Стратегия Года", cards: true, ratio: "2 / 3",
        images: {
        "Star Wars: Zero Company": "Pictures/zero.webp", "Mewgenics": "Pictures/mewgenics.webp", "Anno 117: Pax Romana": "Pictures/anno.webp",
        "Going Medieval": "Pictures/medieval.webp", "Terra Invicta": "Pictures/terra.webp", "Pioneers of Pagonia": "Pictures/pioneers.webp" },  
        nominees: [
        "Star Wars: Zero Company", "Mewgenics", "Anno 117: Pax Romana",
        "Going Medieval", "Terra Invicta", "Pioneers of Pagonia"] },

    { id: "rpg", name: "RPG Года", nominees: [
        "The Blood of Dawnwalker", "Phantom Blade Zero", "Nioh 3", "Crimson Desert",
        "Code Vein 2", "RPG Of Ash and Steel", "Mortal Shell II",
        "Minecraft Dungeons II", "Monster Hunter Stories 3: Twisted Reflection"] },

    { id: "simulator", name: "Симулятор Года", cards: true, ratio: "2 / 3",
        images: { "Maid Cafe Simulator": "Pictures/maid.webp", "Low-Budget Repairs": "Pictures/low.webp",
        "Cheap Car Repair": "Pictures/cheap.webp", "Scrap Mechanic": "Pictures/scrap.webp",
        "IRON NEST: Heavy Turret Simulator": "Pictures/iron.webp", "TCG Card Shop Simulator": "Pictures/tcg.webp",
        "ReStory: Chill Electronics Repairs": "Pictures/restory.webp", "Nivalis Nights": "Pictures/nivalis.webp"
         }, 
        
        nominees: [
        "Maid Cafe Simulator", "Low-Budget Repairs", "Cheap Car Repair", "Scrap Mechanic",
        "IRON NEST: Heavy Turret Simulator", "TCG Card Shop Simulator",
        "ReStory: Chill Electronics Repairs", "Nivalis Nights"] },

    { id: "horror", name: "Хоррор Года", cards: true, ratio: "2 / 3",
        images: {
        "Resident Evil Requiem": "Pictures/resident.webp", "Silent Hill: Townfall": "Pictures/silent.webp",
        "Reanimal": "Pictures/reanimal.webp", "Pathologic 3": "Pictures/pathologic.webp",
        "Halloween: The Game": "Pictures/halloween.webp", "Clive Barker's Hellraiser: Revival": "Pictures/hellraiser.webp" }, 
        nominees: [
        "Resident Evil Requiem", "Silent Hill: Townfall", "Reanimal",
        "Pathologic 3", "Halloween: The Game", "Clive Barker's Hellraiser: Revival"] },

    { id: "f2p", name: "F2P Года", cards: true, ratio: "2 / 3",
        images: {
        "AION 2": "Pictures/aion.webp", "2XKO": "Pictures/2xko.webp", "Neverness to Everness": "Pictures/nte.webp",
        "Aniimo": "Pictures/animo.webp", "Pokemon Champions": "Pictures/pokemon.webp",
        "Arknights: Endfield": "Pictures/arknights.webp", "Duet Night Abyss": "Pictures/duet.webp"  }, 
        
        nominees: [
        "AION 2", "2XKO", "Neverness to Everness", "Aniimo",
        "Pokemon Champions", "Arknights: Endfield", "Duet Night Abyss"] },

    { id: "remaster-remake", name: "Remaster/Remake Года", cards: true, ratio: "2 / 3",
        images: {
        "The Witcher 3: Wild Hunt Remastered": "Pictures/witcher.webp", "Gothic 1 Remake": "Pictures/gothic.webp",
        "Assassin's Creed IV: Black Flag Resynced": "Pictures/assassin.webp", "Trails in the Sky 2nd Chapter": "Pictures/trails.webp",
        "Dynasty Warriors 3: Complete Edition Remastered": "Pictures/dynasty.webp", "Halo: Campaign Evolved": "Pictures/halo.webp", "The Legend of Zelda: Ocarina of Time": "Pictures/zelda.webp",
        "METAL GEAR SOLID: MASTER COLLECTION Vol.2": "Pictures/mgs.webp" },
        nominees: [
        "The Witcher 3: Wild Hunt Remastered", "Gothic 1 Remake",
        "Assassin's Creed IV: Black Flag Resynced", "Trails in the Sky 2nd Chapter",
        "Dynasty Warriors 3: Complete Edition Remastered", "Halo: Campaign Evolved", "The Legend of Zelda: Ocarina of Time",
        "METAL GEAR SOLID: MASTER COLLECTION Vol.2"] },

    { id: "early-access", name: "Ранний Доступ Года", cards: true, ratio: "2 / 3",
        images: {
        "Roadside Research": "Pictures/roadside.webp", "Slay the Spire 2": "Pictures/slay.webp",
        "Subnautica 2": "Pictures/subnautica.webp", "Dead as Disco": "Pictures/dead.webp",
        "Solasta II": "Pictures/solasta.webp", "Paralives": "Pictures/paralives.webp",
        "WARDOGS": "Pictures/wardogs.webp", "Hytale": "Pictures/hytale.webp",
        "Deep Rock Galactic: Rogue Core": "Pictures/deep.webp" },
        nominees: [
        "Roadside Research", "Slay the Spire 2", "Subnautica 2", "Dead as Disco",
        "Solasta II", "Paralives", "WARDOGS", "Deep Rock Galactic: Rogue Core"] },

    { id: "dlc", name: "DLC Года", cards: true, ratio: "2 / 3",
        images: {
        "Elden Ring Nightreign - The Forsaken Hollows": "Pictures/elden.webp", "Frostpunk 2 - Fractured Utopias": "Pictures/frostpunk.webp",
        "Dragon's Dogma 2 - Dark Arisen": "Pictures/dragons.webp", "Crimson Desert Enhanced: Charting the Unknown": "Pictures/crimsonc.webp",
        "DOOM: The Dark Ages Revelations": "Pictures/doom.webp", "Ghost of Yotei: Echos of Sekigahara": "Pictures/ghost.webp" },

        nominees: [
        "Elden Ring Nightreign - The Forsaken Hollows", "Frostpunk 2 - Fractured Utopias",
        "Dragon's Dogma 2 - Dark Arisen", "Crimson Desert Enhanced: Charting the Unknown",
        "DOOM: The Dark Ages Revelations", "Ghost of Yotei: Echos of Sekigahara"] },

    { id: "shame", name: "Позор Года", cards: true, ratio: "2 / 3",
        images: {
         "Tiny Bunny": "Pictures/tiny.webp", "s&box": "Pictures/s&box.webp", "Highguard": "Pictures/highguard.webp",
         "Ashes of Creation": "Pictures/ashes.webp", "Life is Strange: Reunion": "Pictures/life.webp",
         "Mixtape": "Pictures/mixtape.webp"  },
        
        nominees: [
        "Tiny Bunny", "s&box", "Highguard", "Ashes of Creation",
        "Life is Strange: Reunion", "Mixtape"] },

    
        { id: "soundtrack", name: "Лучший Саундтрек", cards: true, ratio: "2 / 3",
        images: {
        "Resident Evil Requiem": "Pictures/resident.webp", "Trails in the Sky 2nd Chapter": "Pictures/trails.webp",
        "Control Resonant": "Pictures/control.webp", "Onimusha: Way of the Sword": "Pictures/onimusha.webp",
        "007: First Light": "Pictures/007.webp" },

        nominees: [
        "Resident Evil Requiem", "Trails in the Sky 2nd Chapter",
        "Onimusha: Way of the Sword", "Control Resonant", "007: First Light"] },

    { id: "most-anticipated", name: "Ожидание Года", nominees: [
        "Persona 6", "Tides of Annihilation", "Stellar Blade Blood Rain", "Ananta",
        "Final Fantasy VII Revelation", "Fable", "God of War: Laufey",
        "Stranger Than Heaven", "The Witcher 4", "Squadron 42", "Star Citizen"] },

    { id: "man-of-the-year", name: "Мужчина Года",cards: true,
        images: { "Миямото Мусаси - Onimusha: Way of the Sword": "Characters/miamoto.webp", "Джеймс Бонд - 007: First Light": "Characters/007.webp",
                "Дилан Фейден - Control Resonant": "Characters/Dilan.webp", "Леон Кеннеди - Resident Evil Requiem": "Characters/leon.png",
                "Логан - Wolverine": "Characters/logan.webp", "Джейсон Дюваль - GTA VI": "Characters/jason.webp",
                "Хью - Pragmata": "Characters/hugh.webp" },
        nominees: [
        "Миямото Мусаси - Onimusha: Way of the Sword", "Джеймс Бонд - 007: First Light",
        "Дилан Фейден - Control Resonant", "Леон Кеннеди - Resident Evil Requiem",
        "Логан - Wolverine", "Джейсон Дюваль - GTA VI", "Хью - Pragmata"] },

    { id: "woman-of-the-year", name: "Женщина Года",cards: true, 
        images: { "Грейс Эшкрофт - Resident Evil Requiem": "Characters/grace.webp", "Диана - PRAGMATA": "Characters/diana.webp",
                "Люсия Кэминос - GTA VI": "Characters/Lucia.webp", "Мистик - Wolverine": "Characters/mystique.webp",
                "Таша Северская - Ace Combat 8": "Characters/tasha.webp", "Эмма - Beast of Reincarnation": "Characters/emma.webp",
                "Лакра - The Blood of Dawnwalker": "Characters/lakra.webp", "Тереза Лорка - 007: First Light": "Characters/teresa.webp" },
        nominees: [
        "Грейс Эшкрофт - Resident Evil Requiem", "Диана - PRAGMATA",
        "Люсия Кэминос - GTA VI", "Мистик - Wolverine", "Таша Северская - Ace Combat 8", 
        "Эмма - Beast of Reincarnation", "Лакра - The Blood of Dawnwalker", "Тереза Лорка - 007: First Light"] },

    { id: "sort-10000-shit", name: "Отсортируй 10000 ГОВНА!", cards: true, ratio: "2 / 3",
        images: {
        "Librarian: Tidy Up the Arcane Library!": "Pictures/librarian.webp", "Never Sort By Color": "Pictures/never.webp",
        "Cellar Keeper": "Pictures/cellar.webp", "Storehand": "Pictures/storehand.webp", "Sort Them Ducks": "Pictures/ducks.webp"     },
        
        nominees: [
        "Librarian: Tidy Up the Arcane Library!", "Never Sort By Color",
        "Cellar Keeper", "Storehand", "Sort Them Ducks"] },

    { id: "pw2-date", name: "Дата Выхода ПВ2", nominees: [
        "31 декабря 2027", "«Надо бы этого чела забанить» - Булджать",
        "3 сентября (вставить число) года", "Когда забудут про нее", "Когда руки дотянутся", "67 Августа"] }
        
];
