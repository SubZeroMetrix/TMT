import type { Metadata } from "next";
import SprintPageTemplate from "@/components/SprintPageTemplate";
import { getSprintBySlug } from "@/lib/content/sprints";

const sprint = getSprintBySlug("maintenance-agreement-reactivation-sprint")!;

export const metadata: Metadata = {
  title: sprint.name,
  description: sprint.heroDescription,
  alternates: { canonical: "/services/maintenance-agreement-reactivation-sprint" },
};

export default function Page() {
  return <SprintPageTemplate sprint={sprint} />;
}
