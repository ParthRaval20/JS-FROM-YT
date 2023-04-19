
let team = [
    {
        name: "PARTH",
        position: "Developer"
    },
    {
        name: "PREM",
        position: "Developer"
    },
    {
        name: "kaushik",
        position: "Designer"
    },
    {
        name: "vaibhav",
        position: "Designer"
    },
    {
        name: "Kerav",
        position: "Ui Designer"
    },
    {
        name: "Meet",
        position: "Tester"
    },
];

let developer = team.filter(val => val.position == "Developer");

console.log(developer);