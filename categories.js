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

    { id: "multiplayer", name: "Multiplayer Года", nominees: [
        "Call of Duty: Modern Warfare 4", "Marathon", "Gears of War: E-Day",
        "Star Wars: Galactic Racer", "Forza Horizon 6", "Marvel Tōkon: Fighting Souls",
        "2XKO", "Avatar Legends: The Fighting Game"] },

    { id: "friend-slop", name: "Френдслоп Года", nominees: [
        "Big Walk", "How to Fish", "Bombanana", "Grain Rot",
        "Crashout Crew", "Dumb Ways to Build", "YAPYAP", "MECCHA CHAMELEON"] },

    { id: "indie", name: "Инди Года", nominees: [
        "Mewgenics", "Pathologic 3", "Valheim", "MECCHA CHAMELEON", "Windrose",
        "Big Walk", "How to Fish", "Bombanana", "MOUSE: P.I. For Hire",
        "ReStory: Chill Electronics Repairs", "REPLACED", "Dressmaker", "Grain Rot",
        "Of Ash and Steel", "Palworld", "shapez 2 - Factory", "Nivalis Nights", "Mina the Hollower"] },

    { id: "shooter", name: "Шутер Года", nominees: [
        "Marathon", "Call of Duty: Modern Warfare 4", "PRAGMATA", "Gears of War: E-Day",
        "High on Life 2", "Highguard", "MOUSE: P.I. For Hire", "No More Room in Hell 2"] },

    { id: "strategy", name: "Стратегия Года", nominees: [
        "Star Wars: Zero Company", "Mewgenics", "Anno 117: Pax Romana",
        "Going Medieval", "Terra Invicta", "Pioneers of Pagonia"] },

    { id: "rpg", name: "RPG Года", nominees: [
        "The Blood of Dawnwalker", "Phantom Blade Zero", "Nioh 3", "Crimson Desert",
        "Code Vein 2", "RPG Of Ash and Steel", "Mortal Shell II",
        "Minecraft Dungeons II", "Monster Hunter Stories 3: Twisted Reflection"] },

    { id: "simulator", name: "Симулятор Года", nominees: [
        "Maid Cafe Simulator", "Low-Budget Repairs", "Cheap Car Repair", "Scrap Mechanic",
        "IRON NEST: Heavy Turret Simulator", "TCG Card Shop Simulator",
        "ReStory: Chill Electronics Repairs", "Nivalis Nights"] },

    { id: "horror", name: "Хоррор Года", nominees: [
        "Resident Evil Requiem", "Silent Hill: Townfall", "Reanimal",
        "Pathologic 3", "Halloween: The Game", "Clive Barker's Hellraiser: Revival"] },

    { id: "f2p", name: "F2P Года", nominees: [
        "AION 2", "2XKO", "Neverness to Everness", "Aniimo",
        "Pokemon Champions", "Arknights: Endfield", "Duet Night Abyss"] },

    { id: "remaster-remake", name: "Remaster/Remake Года", nominees: [
        "The Witcher 3: Wild Hunt — Remastered", "Gothic 1 Remake",
        "Assassin's Creed IV: Black Flag Resynced", "Trails in the Sky 2nd Chapter",
        "Dynasty Warriors 3: Complete Edition Remastered", "Halo: Campaign Evolved", "The Legend of Zelda: Ocarina of Time"] },

    { id: "early-access", name: "Ранний Доступ Года", nominees: [
        "Roadside Research", "Slay the Spire 2", "Subnautica 2", "Dead as Disco",
        "Solasta II", "Paralives", "WARDOGS", "Hytale", "Deep Rock Galactic: Rogue Core"] },

    { id: "dlc", name: "DLC Года", nominees: [
        "Elden Ring Nightreign - The Forsaken Hollows", "Frostpunk 2 - Fractured Utopias",
        "Dragon's Dogma 2 - Dark Arisen", "Crimson Desert Enhanced: Charting the Unknown",
        "DOOM: The Dark Ages Revelations", "Ghost of Yotei: Echos of Sekigahara", "Lego Batman: Legacy of the Dark Knight Mayhem Mode"] },

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
        "Control: Resonant": "Pictures/control.webp", "Onimusha: Way of the Sword": "Pictures/onimusha.webp",
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

    { id: "sort-10000-shit", name: "Отсортируй 10000 ГОВНА!", nominees: [
        "Librarian: Tidy Up the Arcane Library!", "Never Sort By Color",
        "Cellar Keeper", "Storehand", "LIMINAL SORTING"] },

    { id: "pw2-date", name: "Дата Выхода ПВ2", nominees: [
        "31 декабря 2027", "«Надо бы этого чела забанить» - Булджать",
        "3 сентября (вставить число) года", "Когда забудут про нее", "Когда руки дотянутся", "67 Августа"] }
        
];
