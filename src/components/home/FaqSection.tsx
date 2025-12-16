import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";

const FaqSection: React.FC = () => {
  return (
    <section className="py-8 md:py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
      <div className="max-w-4xl mx-auto">
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem
              title={faq.question}
              aria-label={faq.question}
              key={index}
            >
              <p className="text-gray-700 ml-3">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;

const faqs = [
  {
    question: "How long can files be used?",
    answer:
      "Our cloud storage service hosts your files for 7 days. We will automatically delete your files after the 7th day.",
  },
  {
    question: "How can you make your files usable for a longer period of time?",
    answer:
      "With one of our paid plans, you get more storage space and can share large files for much longer periods.",
  },
  {
    question: "How secure are your large file transfers?",
    answer:
      "We encrypt all traffic between your device and our cloud. We scan all files with anti-virus and malware software.",
  },
  {
    question: "Is there any download limit?",
    answer:
      "No, there is no download limit. Your shared files can be downloaded by as many people as you want, as many times as you want. We will notify you when someone downloads the file. The only restriction is that the files will no longer be available after 7 days.",
  },
  {
    question: "Is there any file upload limit?",
    answer:
      "You can upload as many files and folders as you want for free per transfer session. The total transfer size cannot exceed 5 GB. You will have 2 upload sessions within 24 hours.",
  },
  {
    question: "What types of files can you upload?",
    answer:
      "We have no restrictions on file types, so you can upload any type of file. You can upload everything from large video files in raw formats to uncompressed image files and application-specific local formats. We do not allow files that violate our Terms of Use.",
  },
];
