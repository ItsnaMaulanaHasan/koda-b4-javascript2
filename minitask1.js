const bio = {
    name: "Itsna Maulana Hasan",
    age: 30,
}

const extraInfo = {
    skills: ["Web Programming", "Painting"],
    education: [
        {
            name: "SMP 1 Tayu",
            year: 2012,
        }
    ]
}

const extraSkills = ["Badminton", "Balapan"]
const gabunganSkills = [ ...extraInfo.skills, ...extraSkills]

const profile = {
    ...bio,
    ...extraInfo
}

profile.skills = [
    ...gabunganSkills
]

console.log(profile.skills[1])
// Painting

console.log(profile.skills)