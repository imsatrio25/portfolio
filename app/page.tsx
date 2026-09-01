import Home from "@/components/Home";
import ProjectGrid from "@/components/ProjectGrid";

export default function Page() {
  return (
    <Home projects={<ProjectGrid />} />
  );
}
