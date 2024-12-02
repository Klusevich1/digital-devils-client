import { Paragraph } from "./ParagraphPrps";
import { TeamMemberProps } from "./TeamMemberProps";

export interface Article {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  type: string;
  date: string;
  readingTime: string;
  author: TeamMemberProps;
  paragraphs: Paragraph[];
}
