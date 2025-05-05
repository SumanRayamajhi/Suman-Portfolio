export type Skill = {
    title: string;
    icon: React.ReactNode;
}

export type Education = {
    icon: React.ReactNode;
    duration: string;
    degree: string;
    institution: string;
}

export type Experience = {
    icon: React.ReactNode;
    duration: string;
    title: string;
    company: string;
    description: string;
}

export type AboutTabsContentType = {
    skillsList: { title: string; icon: React.ReactNode }[];
    educationList: {
        icon: React.ReactNode;
        duration: string;
        degree: string;
        institution: string;
    }[];
    experienceList: {
        icon: React.ReactNode;
        duration: string;
        title: string;
        company: string;
        description: string;
    }[];
};

export type AboutContentTypes = {
    key: number;
    icon: React.ReactNode;
    duration: string;
    title: string;
    organization: string;
    description?: string;
};