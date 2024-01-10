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
  key: string;
  label: string;
  link: string;
  date: string;
  title: string;
  skills: string[];
  info: string[];
};

export type { ProjectInfoType, WorkInfoType };
