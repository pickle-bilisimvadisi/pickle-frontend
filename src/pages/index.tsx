import {
  CustomerReview,
  FaqSection,
  HeroSection,
  PainPlanSection,
  ProgressSection,
} from "@/components/home";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <ProgressSection />
      <PainPlanSection />
      <CustomerReview />
      <FaqSection />
    </DefaultLayout>
  );
}
