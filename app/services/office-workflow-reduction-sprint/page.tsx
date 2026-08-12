import type { Metadata } from "next";
import SprintPageTemplate from "@/components/SprintPageTemplate";
import { getSprintBySlug } from "@/lib/content/sprints";

const sprint = getSprintBySlug("office-workflow-reduction-sprint")!;

export const metadata: Metadata = {
  title: sprint.name,
  description: sprint.heroDescription,
  alternates: { canonical: "/services/office-workflow-reduction-sprint" },
};

export default function Page() {
  return <SprintPageTemplate sprint={sprint} />;
}
