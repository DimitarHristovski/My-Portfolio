export interface CardProps {
  title: string;
  items: string[];
}
export interface Project {
  title: string;
  technologies: string[];
  description?: string;
  githubUrl: string;
  hostedUrl?: string;
}
export interface Stats {
  num: number;
  text: string;
}
