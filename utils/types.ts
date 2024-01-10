type ProjectInfoType = {
  title: string;
  teamSize: number;
  date?: string;
  desc?: string;
  link?: string;
  languages?: string[];
  icon: string;
};

type WorkInfoType = {
  title: string;
  link: string;
  date: string;
  skills: string[];
  info: string[];
};

export type { ProjectInfoType, WorkInfoType };
