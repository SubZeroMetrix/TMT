import type { Metadata } from "next";
import SprintPageTemplate from "@/components/SprintPageTemplate";
import { getSprintBySlug } from "@/lib/content/sprints";

const sprint = getSprintBySlug("missed-call-recovery-sprint")!;

export const metadata: Metadata = {
  title: sprint.name,
  description: sprint.heroDescription,
  alternates: { canonical: "/services/missed-call-recovery-sprint" },
};

export default function Page() {
  return <SprintPageTemplate sprint={sprint} />;
}
