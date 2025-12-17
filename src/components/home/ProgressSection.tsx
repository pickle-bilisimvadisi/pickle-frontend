import HomeSectionLayout from "@/layouts/HomeSectionLayout";
import React from "react";
import { Image } from "@heroui/image";
import ProgressImg1 from "@/assets/images/progress-step-1.webp";
import ProgressImg2 from "@/assets/images/progress-step-2.webp";
import ProgressImg3 from "@/assets/images/progress-step-3.webp";

const ProgressSection: React.FC = () => {
  return (
    <HomeSectionLayout
      subtitle="Share Your Files in 3 Easy Steps"
      title="How to Upload Large Files and Folders Using Pickle"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {progressData.map((item) => (
          <ProgressComponent key={item.id} progress={item} />
        ))}
      </div>
    </HomeSectionLayout>
  );
};

export default ProgressSection;

const ProgressComponent: React.FC<{ progress: (typeof progressData)[0] }> = ({
  progress,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <Image src={progress.imageUrl} alt={progress.title} />
      <h6 className="text-md font-semibold text-primary/70">
        Step {progress.step}
      </h6>
      <h3 className="text-xl font-semibold">{progress.title}</h3>
      <p className="text-gray-600 text-md">{progress.description}</p>
    </div>
  );
};

const progressData = [
  {
    id: 1,
    step: 1,
    title: "Select Files and Folders",
    description:
      "Browse and select the files you want to upload. Or you can drag and drop your files. You can even leave a message on the download page.",
    imageUrl: ProgressImg1
  },
  {
    id: 2,
    step: 2,
    title: "Upload Your Files or Folders",
    description:
      "After you select the files, we will begin uploading them. Your files are secure with end-to-end encryption and a secure file hosting solution.",
    imageUrl: ProgressImg2
  },
  {
    id: 3,
    step: 3,
    title: "Share the Download Link",
    description:
      "After the upload is complete, we host your files in the cloud. You will receive a direct link to your stored files. You can share the link with anyone you want, anywhere you want.",
    imageUrl: ProgressImg3
  },
];
