export type DessertPair = {
    seat1: string
    seat2: string
}

export const generateAllPermutations = () => {
    const results: DessertPair[] = []
    for (let i = 0; i < desserts.length; i++) {
        for (let j = i + 1; j < desserts.length; j++) {
            const seat1: string = desserts[i]
            const seat2: string = desserts[j]
            results.push({seat1, seat2});
        }
    }
    return results.sort(() => {return 0.5 - Math.random()});
}

const desserts: string[] = [
    "Tiramisu",
    "Mochi",
    "Baklava",
    "Pavlova",
    "Sponge Cake",
    "Cendol",
    "Churros",
    "Cheesecake",
    "Brownie",
    "Apple Pie",
    "Macaron",
    "Rasgulla",
    "Gelato",
    "Tres Leches",
    "Flan",
    "Panna Cotta",
    "Banoffee Pie",
    "Dobos Torte",
    "Halo-Halo",
    "Black Forest Cake",
    "Loukoumades",
    "Creme Brulee",
    "Lava Cake",
    "Ice Cream Sundae",
    "Bingsu",
    "Pastel de Nata",
    "Knafeh",
    "Key Lime Pie",
    "Lamingtons",
    "Sachertorte",
    "Baumkuchen",
    "Gulab Jamun",
    "Sticky Toffee Pudding",
    "Trifle",
    "Mango Sticky Rice",
    "Banana Pudding",
    "Pumpkin Pie",
    "Girl Scout Cookies",
    "Baked Alaska",
    "Apple Strudel",
    "Cherry Cheese Danish"
]


export type WLRecord = {
    wins: number,
    rounds: number
}

export const getRatio = (record: WLRecord) => {
    if (record["rounds"] == 0 ){
        return 0.0;
    }
    return record["wins"]/record["rounds"];
}
export const getDessertStats = () => {
    return Object.fromEntries(Object.entries(dessertRecords).sort((a, b) => getRatio(b[1]) - getRatio(a[1])))
};

export const dessertRecords: Record<string, WLRecord> = {
    "Tiramisu": {wins: 0, rounds: 0},
    "Mochi": {wins: 0, rounds: 0},
    "Baklava": {wins: 0, rounds: 0},
    "Pavlova": {wins: 0, rounds: 0},
    "Sponge Cake": {wins: 0, rounds: 0},
    "Cendol": {wins: 0, rounds: 0},
    "Churros": {wins: 0, rounds: 0},
    "Cheesecake": {wins: 0, rounds: 0},
    "Brownie": {wins: 0, rounds: 0},
    "Apple Pie": {wins: 0, rounds: 0},
    "Macaron": {wins: 0, rounds: 0},
    "Rasgulla": {wins: 0, rounds: 0},
    "Gelato": {wins: 0, rounds: 0},
    "Tres Leches": {wins: 0, rounds: 0},
    "Flan": {wins: 0, rounds: 0},
    "Panna Cotta": {wins: 0, rounds: 0},
    "Banoffee Pie": {wins: 0, rounds: 0},
    "Dobos Torte": {wins: 0, rounds: 0},
    "Halo-Halo": {wins: 0, rounds: 0},
    "Black Forest Cake": {wins: 0, rounds: 0},
    "Loukoumades": {wins: 0, rounds: 0},
    "Creme Brulee": {wins: 0, rounds: 0},
    "Lava Cake": {wins: 0, rounds: 0},
    "Ice Cream Sundae": {wins: 0, rounds: 0},
    "Bingsu": {wins: 0, rounds: 0},
    "Pastel de Nata": {wins: 0, rounds: 0},
    "Knafeh": {wins: 0, rounds: 0},
    "Key Lime Pie": {wins: 0, rounds: 0},
    "Lamingtons": {wins: 0, rounds: 0},
    "Sachertorte": {wins: 0, rounds: 0},
    "Baumkuchen": {wins: 0, rounds: 0},
    "Gulab Jamun": {wins: 0, rounds: 0},
    "Sticky Toffee Pudding": {wins: 0, rounds: 0},
    "Trifle": {wins: 0, rounds: 0},
    "Mango Sticky Rice": {wins: 0, rounds: 0},
    "Banana Pudding": {wins: 0, rounds: 0},
    "Pumpkin Pie": {wins: 0, rounds: 0},
    "Girl Scout Cookies": {wins: 0, rounds: 0},
    "Baked Alaska": {wins: 0, rounds: 0},
    "Apple Strudel": {wins: 0, rounds: 0},
    "Cherry Cheese Danish": {wins: 0, rounds: 0}
};

