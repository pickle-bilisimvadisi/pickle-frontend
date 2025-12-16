import { FaqSection, HeroSection, ProgressSection } from "@/components/home";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <ProgressSection />
      <FaqSection />
    </DefaultLayout>
  );
}
