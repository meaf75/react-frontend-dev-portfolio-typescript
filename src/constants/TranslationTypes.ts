export interface ITranslation {
    myName: string;
    myRole: string;
    sectionName: string;
    hello: string;
    about: string;
    projectsSectionTitle: string;
    skillsSectionTitle: string;
    experienceSectionTitle: string;
    projects: IProject[];
    skills: IDevIcon[];
    experience: IExperience[];
    social: ISocial[];
}

export interface IProject {
    title: string;
    description: string;
    link: string;
    images: string[];
    technologies: IDevIcon[];
    year: number
}

export interface IDevIcon {
    materialIcon: string;
    name: string;
}

export interface IExperience {
    mainTech: string[];
    technologies: string[];
    year: string;
    title: string;
    company: string;
    mainIcon: string;
}

export interface ISocial {
    materialIcon: string;
    url: string;
}
