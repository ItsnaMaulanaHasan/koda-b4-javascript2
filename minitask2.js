// destruct painting, destruct education name[0],
const bio = {
    name: "Itsna Maulana Hasan",
    age: 23,
}

const extraInfo = {
    skills: ["Web Programming", "Painting"],
    education: [
        {
            name: "SMP 2 Tayu",
            year: 2012,
        }
    ]
}

const profile = {
    ...bio,
    ...extraInfo,
}

const {skills: [_, skill]} = profile
const {education: [{name: namaSekolah}]} = profile

console.log(skill)
console.log(namaSekolah)