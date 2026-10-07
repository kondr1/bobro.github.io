// Общий список номинаций для index.html и result.html.
// Редактировать нужно ТОЛЬКО здесь. Названия номинантов не менять после начала голосования:
// голоса в базе хранятся по тексту названия.

// Совет: сожми картинку в WebP (squoosh.app) и поменяй путь здесь и в HTML.
const IMAGE = "./photo_2025-11-10_21-02-06.png";

const CATEGORIES = [

    {
        id: "choice-buldzhat",
        name: "Выбор Булджать",
        image: TEMP_IMAGE,
        nominees: [
            "Grand Theft Auto VI",
            "The Blood of Dawnwalker",
            "PRAGMATA",
            "Resident Evil Requiem",
            "Control: Resonant",
            "007: First Light"
        ]
    },


    {
        id: "game-of-the-year",
        name: "Игра Года",
        image: TEMP_IMAGE,
        nominees: [
            "Grand Theft Auto VI",
            "The Blood of Dawnwalker",
            "PRAGMATA",
            "Resident Evil Requiem",
            "Control: Resonant",
            "007: First Light",
            "Forza Horizon 6"
        ]
    },

    {
        id: "game-of-the-year_2024",
        name: "Игра Года 2024",
        image: TEMP_IMAGE,
        nominees: [
            "Clair Obscur: Expedition 33"
        ]
    },



    {
        id: "single-player",
        name: "Single-Player Года",
        image: TEMP_IMAGE,
        nominees: [
            "PRAGMATA",
            "Resident Evil Requiem",
            "007: First Light",
            "Control: Resonant",
            "The Blood of Dawnwalker",
            "Gears of War: E-Day",
            "Grand Theft Auto VI",
            "ACE COMBAT 8: WINGS OF THEVE",
            "Onimusha: Way of the Sword",
            "Crimson Desert",
            "Mortal Shell II"
        ]
    },


    {
        id: "multiplayer",
        name: "Multiplayer Года",
        image: TEMP_IMAGE,
        nominees: [
            "Call of Duty: Modern Warfare 4",
            "Marathon",
            "Gears of War: E-Day",
            "Star Wars: Galactic Racer",
            "Forza Horizon 6",
            "Marvel Tōkon: Fighting Souls",
            "2XKO",
            "Avatar Legends: The Fighting Game"
        ]
    },


    {
        id: "friend-slop",
        name: "Френдслоп Года",
        image: TEMP_IMAGE,
        nominees: [
            "Big Walk",
            "How to Fish",
            "Bombanana",
            "Grain Rot",
            "Crashout Crew",
            "Dumb Ways to Build",
            "YAPYAP",
            "MECCHA CHAMELEON"
        ]
    },

    {
        id: "indie",
        name: "Инди Года",
        image: TEMP_IMAGE,
        nominees: [
            "Mewgenics",
            "Pathologic 3",
            "Valheim",
            "MECCHA CHAMELEON",
            "Windrose",
            "Big Walk",
            "How to Fish",
            "Bombanana",
            "MOUSE: P.I. For Hire",
            "ReStory: Chill Electronics Repairs",
            "REPLACED",
            "Dressmaker",
            "Grain Rot",
            "Of Ash and Steel",
            "Palworld",       
            "shapez 2 - Factory",
            "Nivalis Nights"     
        ]
    },

    {
        id: "shooter",
        name: "Шутер Года",
        image: TEMP_IMAGE,
        nominees: [
            "Marathon",
            "Call of Duty: Modern Warfare 4",
            "PRAGMATA",
            "Gears of War: E-Day",
            "High on Life 2",
            "Highguard",
            "MOUSE: P.I. For Hire",
            "No More Room in Hell 2"
        ]
    },

    {
        id: "strategy",
        name: "Стратегия Года",
        image: TEMP_IMAGE,
        nominees: [
            "Star Wars: Zero Company",
            "Mewgenics",
            " Anno 117: Pax Romana",
            "Going Medieval",
            "Terra Invicta",
            "Pioneers of Pagonia",
        ]
    },

    {
        id: "rpg",
        name: "RPG Года",
        image: TEMP_IMAGE,
        nominees: [
            "The Blood of Dawnwalker",
            "Phantom Blade Zero",
            "Nioh 3",
            "Crimson Desert",
            "Code Vein 2",
            "RPG Of Ash and Steel",
            "Mortal Shell II",
            "Minecraft Dungeons II",
            "Monster Hunter Stories 3: Twisted Reflection"
        ]
    },

    {
        id: "simulator",
        name: "Симулятор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Maid Cafe Simulator",
            "Low-Budget Repairs",
            "Cheap Car Repair",
            "Scrap Mechanic",
            "IRON NEST: Heavy Turret Simulator",
            "TCG Card Shop Simulator",
            "ReStory: Chill Electronics Repairs",
            "Nivalis Nights"
        ]
    },

    {
        id: "horror",
        name: "Хоррор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Resident Evil Requiem",
            "Silent Hill: Townfall",
            "Reanimal",
            "Pathologic 3",
            "Halloween: The Game"
        ]
    },

    {
        id: "f2p",
        name: "F2P Года",
        image: TEMP_IMAGE,
        nominees: [
            "AION 2",
            "2XKO",
            "Neverness to Everness",
            "Aniimo",
            "Pokemon Champions",
            "Arknights: Endfield",
            "Duet Night Abyss"
        ]
    },

    {
        id: "wolverine",
        name: "Росомаха Года",
        image: TEMP_IMAGE,
        nominees: [
            "Marvel's Wolverine"
        ]
    },

    {
        id: "remaster-remake",
        name: "Remaster/Remake Года",
        image: TEMP_IMAGE,
        nominees: [
            "The Witcher 3: Wild Hunt — Remastered",
            "Gothic 1 Remake",
            "Assassin's Creed IV: Black Flag Resynced",
            "Trails in the Sky 2nd Chapter",
            "Dynasty Warriors 3: Complete Edition Remastered",
            "Halo: Campaign Evolved"
        ]
    },

    {
        id: "early-access",
        name: "Ранний Доступ Года",
        image: TEMP_IMAGE,
        nominees: [
            "Roadside Research",
            "Slay the Spire 2",
            "Subnautica 2",
            "Dead as Disco",
            "Solasta II",
            "Paralives",
            "WARDOGS",
            "Hytale",
            "Deep Rock Galactic: Rogue Core"
        ]
    },

    {
        id: "dlc",
        name: "DLC Года",
        image: TEMP_IMAGE,
        nominees: [
            "Elden Ring Nightreign - The Forsaken Hollows",
            "Frostpunk 2 - Fractured Utopias",
            "Dragon's Dogma 2 - Dark Arisen",
            "Crimson Desert Enhanced: Charting the Unknown",
            "DOOM: The Dark Ages Revelations"
        ]
    },

    {
        id: "shame",
        name: "Позор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Tiny Bunny",
            "s&box",
            "Highguard",
            "Ashes of Creation",
            "Life is Strange: Reunion",
            "Mixtape"
        ]
    },

    {
        id: "soundtrack",
        name: "Лучший Саундтрек",
        image: TEMP_IMAGE,
        nominees: [
            "Resident Evil Requiem",
            "Trails in the Sky 2nd Chapter",
            "Onimusha: Way of the Sword",
            "Control Resonant",
            "007: First Light"
        ]
    },

    {
        id: "most-anticipated",
        name: "Ожидание Года",
        image: TEMP_IMAGE,
        nominees: [
            "Persona 6",
            "Tides of Annihilation",
            "Stellar Blade Blood Rain",
            "Ananta",
            "Final Fantasy VII Revelation",
            "Fable",
            "God of War: Laufey",
            "Stranger Than Heaven",
            "The Witcher 4",
            "Squadron 42",
            "Star Citizen"

        ]
    },

    {
        id: "man-of-the-year",
        name: "Мужчина Года",
        image: TEMP_IMAGE,
        nominees: [
            "Миямото Мусаси - Onimusha: Way of the Sword",
            "Джеймс Бонд - 007: First Light",
            "Дилан Фейден - Control Resonant",
            "Леон Кеннеди - Resident Evil Requiem",
            "Логан - Wolverine",
            "Джейсон Дюваль - GTA VI"
        ]
    },

    {
        id: "woman-of-the-year",
        name: "Женщина Года",
        image: TEMP_IMAGE,
        nominees: [
            "Грейс Эшкрофт - Resident Evil Requiem",
            "Диана - PRAGMATA",
            "Люсия Кэминос - GTA VI",
            "Мистик - Wolverine",
        ]
    },

    {
        id: "sort-10000-shit",
        name: "Отсортируй 10000 ГОВНА!",
        image: TEMP_IMAGE,
        nominees: [
            "Librarian: Tidy Up the Arcane Library!",
            "Never Sort By Color",
            "Cellar Keeper",
            "Storehand",
            "LIMINAL SORTING"
        ]
    }

];