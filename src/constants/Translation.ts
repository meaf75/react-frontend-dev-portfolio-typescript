import { ITranslation } from "./TranslationTypes"

////////////////////////////////////////
// 
//  You can find technologies material icons at https://materialdesignicons.com/
//
////////////////////////////////////////


export const EnglishTranslation: ITranslation = {
    myName: 'Davina Griss',
    myRole: 'FULL-STACK DEVELOPER',
    sectionName: 'ABOUT ME',
    hello: 'hi',
    about: '👋 I\'m Davina Griss. Fictional person for preview purposes :) I\'m working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜',
    projectsSectionTitle: 'PROJECTS',
    skillsSectionTitle: 'SKILLS',
    experienceSectionTitle: 'EXPERIENCE',
    projects: [
        {
            title: 'Animal Shelter',
            year: 2020,
            description: 'The most expanded application I had opportunity to work with. I\'ve learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.',
            images: [
                "images/portfolio/animal-shelter/p1.jpg",
                "images/portfolio/animal-shelter/p2.jpg"
            ],
            technologies: [
                {
                    materialIcon: 'angular',
                    name: 'angular'
                },
                {
                    materialIcon: 'language-typescript',
                    name: "TypeScript"
                },
                {
                    materialIcon: 'language-csharp',
                    name: "C#"
                }
            ],
            link: 'https://github.com'
        },
        {
            title: "Photography",
            year: 2018,
            description: "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
            images: [
                "images/portfolio/photography/p1.jpg",
                "images/portfolio/photography/p2.jpg"
            ],
            link: "https://github.com",
            technologies: [
                {
                    materialIcon: 'angular',
                    name: 'angular'
                },
                {
                    materialIcon: 'language-typescript',
                    name: "TypeScript"
                },
                {
                    materialIcon: 'language-csharp',
                    name: "C#"
                }
            ]
        },
        {
            title: "3D Object Viewer",
            year: 2015,
            description: "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
            images: [
                "images/portfolio/adventure/p1.jpg",
                "images/portfolio/adventure/p2.jpg"
            ],
            link: "https://github.com",
            technologies: [
                {
                    materialIcon: 'angular',
                    name: 'angular'
                },
                {
                    materialIcon: 'language-typescript',
                    name: "TypeScript"
                },
                {
                    materialIcon: 'language-csharp',
                    name: "C#"
                }
            ]
        }
    ],
    skills: [
        { name: 'Html5', materialIcon: 'language-html5' },
        { name: 'Css 3', materialIcon: 'language-css3' },
        { name: 'Angular', materialIcon: 'angular' },
        { name: 'Typescript', materialIcon: 'language-typescript' },
        { name: 'Javascript', materialIcon: 'language-javascript' },
        { name: 'Sass', materialIcon: 'sass' },
        { name: 'C#', materialIcon: 'language-csharp' },
        { name: 'Mysql', materialIcon: 'database' },
    ],
    experience: [
        {
            company: "DefOpenSource",
            title: "Front-End Developer",
            year: "10.2019 - present",
            mainTech: [
                "Angular 8/9/10"
            ],
            technologies: [
                "REST API",
                "RxJS",
                "JavaScript",
                "Bootstrap",
                "MDBootstrap",
                "EF Core",
                ".NET Core",
                "SignalR",
                "Angular Material"
            ],
            mainIcon: 'angular'
        },
        {
            company: "Serros Solutions",
            title: "Intern",
            year: "01.2018 - 09.2019",
            mainTech: [
                "Angular 7/8"
            ],
            technologies: [
                "RxJS",
                "Django",
                "PHP",
                "JavaScript",
                "DHTMLX Gantt"
            ],
            mainIcon: 'vuejs'
        }
    ],
    social: [
        { url: 'https://www.instagram.com/', materialIcon: 'instagram' },
        { url: 'https://github.com/', materialIcon: 'github' },
    ]
}

export const SpanishTranslation: ITranslation = {
    myName: 'Davina Griss',
    myRole: 'FULL-STACK DEVELOPER',
    sectionName: 'ACERCA DE MI',
    hello: 'Hola',
    about: '👋 Soy Davina Griss. Persona ficticia para propósitos de vista previa :) Estoy trabajando con los frameworks front-end más nuevos como Angular, React y Vue. Lo que está viendo ahora es una plantilla de cartera de Dorota1997. Si le gusta esta plantilla de cartera, asegúrese de to el repositorio para que sea más reconocible para otros usuarios. Gracias 💜',
    projectsSectionTitle: 'PROYECTOS',
    skillsSectionTitle: 'SKILLS',
    experienceSectionTitle: 'EXPERIENCIA',
    projects: [
        {
            title: 'Refugio de animales',
            year: 2020,
            description: 'La aplicación más ampliada con la que tuve la oportunidad de trabajar. Aprendí muchas tecnologías y mi código fue revisado por un curador increíble. La aplicación maneja todos los procesos de adopción y permite almacenar toda la evidencia sobre la adopción de animales del refugio de animales.',
            images: [
                "images/portfolio/animal-shelter/p1.jpg",
                "images/portfolio/animal-shelter/p2.jpg"
            ],
            technologies: [
                {
                    materialIcon: 'angular',
                    name: 'angular'
                },
                {
                    materialIcon: 'language-typescript',
                    name: "TypeScript"
                },
                {
                    materialIcon: 'language-csharp',
                    name: "C#"
                }
            ],
            link: 'https://github.com'
        },
        {
            title: "Fotografía",
            year: 2018,
            description: "Proyecto personal para asignatura de estudio. Fui responsable de probar la aplicación de fotografía que optimiza imágenes con algoritmos populares utilizados por editores gráficos como Pixlr o Adobe Photoshop. Obtuve una calificación :)",
            images: [
                "images/portfolio/photography/p1.jpg",
                "images/portfolio/photography/p2.jpg"
            ],
            link: "https://github.com",
            technologies: [
                {
                    materialIcon: 'angular',
                    name: 'angular'
                },
                {
                    materialIcon: 'language-typescript',
                    name: "TypeScript"
                },
                {
                    materialIcon: 'language-csharp',
                    name: "C#"
                }
            ]
        },
        {
            title: "Visor de objetos 3D",
            year: 2015,
            description: "Una de las primeras aplicaciones en las que estaba trabajando en mi pasantía. Tuve que desarrollar una implementación de front-end para una aplicación que muestra modelos 3D de edificios conocidos. Este también fue mi primer proyecto en Angular framework. ¡He aprendido mucho!",
            images: [
                "images/portfolio/adventure/p1.jpg",
                "images/portfolio/adventure/p2.jpg"
            ],
            link: "https://github.com",
            technologies: [
                {
                    materialIcon: 'angular',
                    name: 'angular'
                },
                {
                    materialIcon: 'language-typescript',
                    name: "TypeScript"
                },
                {
                    materialIcon: 'language-csharp',
                    name: "C#"
                }
            ]
        }
    ],
    skills: [
        { name: 'Html5', materialIcon: 'language-html5' },
        { name: 'Css ', materialIcon: 'language-css3' },
        { name: 'Angular', materialIcon: 'angular' },
        { name: 'Typescript', materialIcon: 'language-typescript' },
        { name: 'Javascript', materialIcon: 'language-javascript' },
        { name: 'Sass', materialIcon: 'sass' },
        { name: 'C#', materialIcon: 'language-csharp' },
        { name: 'Mysql', materialIcon: 'database' },
    ],
    experience: [
        {
            company: "DefOpenSource",
            title: "Front-End Developer",
            year: "10.2019 - present",
            mainTech: [
                "Angular 8/9/10"
            ],
            technologies: [
                "REST API",
                "RxJS",
                "JavaScript",
                "Bootstrap",
                "MDBootstrap",
                "EF Core",
                ".NET Core",
                "SignalR",
                "Angular Material"
            ],
            mainIcon: 'angular'
        },
        {
            company: "Serros Solutions",
            title: "Intern",
            year: "01.2018 - 09.2019",
            mainTech: [
                "Angular 7/8"
            ],
            technologies: [
                "RxJS",
                "Django",
                "PHP",
                "JavaScript",
                "DHTMLX Gantt"
            ],
            mainIcon: 'vuejs'
        }
    ],
    social: [
        { url: 'https://www.instagram.com/', materialIcon: 'instagram' },
        { url: 'https://github.com/', materialIcon: 'github' },
    ]
}
