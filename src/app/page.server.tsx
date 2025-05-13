import { RESUME_DATA } from "../data/resume-data";
import Page from "./page";

export const metadata = {
  title: `${RESUME_DATA.name}`,
  description: RESUME_DATA.summary,
};

export default function PageWrapper() {
  return <Page />;
}
