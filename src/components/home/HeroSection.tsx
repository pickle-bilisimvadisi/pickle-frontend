import React from "react";
import DropFileArea from "../DropFileArea";
import HomeSectionLayout from "@/layouts/HomeSectionLayout";

const HeroSection: React.FC = () => {
  return (
    <HomeSectionLayout
      subtitle="Fast, Secure, Anonymous"
      title="Upload files up to 5 GB for free"
      description="Upload files, documents, videos, music, and images. If they are digital, you can upload the download link and share them."
      isHero
    >
      <DropFileArea />
    </HomeSectionLayout>
  );
};

export default HeroSection;
