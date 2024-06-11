
import Absaar from '../assets/cabinet24/absaar.jpeg';
import Esha from '../assets/cabinet24/esha.jpeg';
import Talha from '../assets/cabinet24/talha.jpeg';

const Cabinets =
    [
        //ye schema hoo ga profile ka liya @Yasir
        {
            id: 1,
            session: '2023-24',
            members: [

                {
                    id: 1,
                    name: 'Absaar Shahid',
                    img: Absaar,
                    session: '2023-24',
                    team: 'Management ',
                    currentPost: "President",
                    Career: [
                        { id: 1, team: "Management", stage: "General Member" },
                        { id: 2, team: "Management", stage: "Executive Member" },
                        { id: 3, team: "Management", stage: "Assistant Director" },
                        { id: 4, team: "President", stage: "Cabinet Member" },
                    ],
                    linkedin: "#",
                    twitter: "#",
                    instagram: "https://www.instagram.com/absaar999?igsh=MjM3bGo3OWN4aHQ=",
                    description: "I am 3rd year Computer science student with a huge interest in machine learning and AI. By joining the society I have improved my social skills and it helped me gathering more confidence.",
                },
                {
                    id: 2,
                    name: 'Eesha Tir Razia  ',
                    img: Esha,
                    session: '2023-24',
                    team: 'Decor',
                    currentPost: " Vice President",
                    Career: [
                        { id: 1, team: "Decor", stage: "General Member" },
                        { id: 2, team: "Decor", stage: "Executive Member" },
                        { id: 3, team: "Decor", stage: "Assistant Director" },
                        { id: 4, team: "Vice President", stage: "Cabinet Member" },
                    ],
                    linkedin: "https://www.linkedin.com/in/eesha-tir-razia-1a3807229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    twitter: "#",
                    instagram: "https://www.instagram.com/esha_tirazia001?igsh=MXdlbXg0aGFub29ycA==",
                    description: "I am a 3rd year CS student with a keen interest in android development and data science. I am part of this prestigious society from the last 3 years and played my part in growing this society.",

                },
                {
                    id: 3,
                    name: 'Muhammad Talha',
                    img: Talha,
                    session: '2023-24',
                    team: 'Logistics',
                    currentPost: "General Secretary",
                    Career: [
                        { id: 1, team: "Logistics", stage: "General Member" },
                        { id: 2, team: "Logistics", stage: "Executive Member" },
                        { id: 3, team: "Logistics", stage: "Assistant Director" },
                        { id: 4, team: "General Secretary", stage: "Cabinet Member" },
                    ],
                    linkedin: "https://www.linkedin.com/in/muhammad-talha001",
                    twitter: "#",
                    instagram: "https://www.instagram.com/talhamughal95?igsh=MTg2bW1mN3l2dWpzbQ==",
                    description: "I am a 3rd year CS student with a keen interest in android development and data science. I am part of this prestigious society from the last 3 years and played my part in growing this society.",

                },
            ]
        },
    ];
export default Cabinets;