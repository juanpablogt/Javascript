import hello from "./module.js";


hello(); // Hello


export async function getData() {
    return [
        {
            movie: "El despertar de los michis",
            year: 2021,
            protagonist: "Mr. Michi"
        },
        {
            movie: "101 Michis",
            year: 2019,
            protagonist: "Tommy Michiguire"
        }
    ];
}
console.log(getData());