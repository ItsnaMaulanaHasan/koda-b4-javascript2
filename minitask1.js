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

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile.skills[1])
// Painting