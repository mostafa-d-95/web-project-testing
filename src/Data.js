// src/data.js
export const PROVIDERS = [
    {
        id: 1,
        companyName: "plumbing Services",
        name: "Ali",
        email: "ali@example.com",
        phone: "+961 71 123 456",
        city: "tyre",
        profession: "plumber",
    },
    {
        id: 2,
        companyName: "Electric Pro",
        name: "Maya K.",
        email: "maya@example.com",
        phone: "+961 76 222 333",
        city: "beirut",
        profession: "electrician",
    },
    {
        id: 3,
        companyName: "Clean & Shine",
        name: "Omar H.",
        email: "omar@example.com",
        phone: "+961 3 444 555",
        city: "tyre",
        profession: "cleaning",
    },
];

// derive city + profession lists for dropdowns
const allCities = PROVIDERS.map((p) => p.city.toLowerCase());
const uniqueCitiesSet = new Set(allCities);
const uniqueCities = Array.from(uniqueCitiesSet);
export const CITIES = uniqueCities.sort();


const AllProfessions = PROVIDERS.map((p) =>p.profession.toLowerCase());
const uniqueProfessionsSet = new Set (AllProfessions);
const uniqueProfessions = Array.from(uniqueProfessionsSet);
export const PROFESSIONS = uniqueProfessions.sort();
