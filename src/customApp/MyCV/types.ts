export interface MainCVProps {
  name: string;
  jobTitle: string;
  contact: contactProps;
  education?: educationProps[];
  skills?: string[];
  careerObjective?: string;
}

interface contactProps {
  address?: string;
  phoneNumber?: string;
  email?: string;
  linkedLink?: string;
  githubLink?: string;
}

interface educationProps {
  schoolName?: string;
  startYear?: string;
  endYear?: string;
}