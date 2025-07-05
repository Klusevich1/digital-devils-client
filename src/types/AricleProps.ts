import { Paragraph } from "./ParagraphPrps";
import { TeamMemberProps } from "./TeamMemberProps";

export interface Article {
  id: number;
  slug: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  content: string;
  type: string;
  date: string;
  readingTime: string;
  author: TeamMemberProps;
  paragraphs: Paragraph[];
  publishedDate: string;
}
