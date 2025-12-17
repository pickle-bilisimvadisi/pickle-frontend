import HomeSectionLayout from "@/layouts/HomeSectionLayout";
import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";

const CustomerReview: React.FC = () => {
  return (
    <HomeSectionLayout
      subtitle="What Our Customers Say About Us?"
      title="Customer Reviews"
    >
      <div className="flex gap-6 flex-row flex-wrap items-center justify-center md:grid md:grid-cols-3 mt-4">
        {reviews.map((review) => (
          <Card className="px-4 py-6 h-full grid-cols-1" key={review.id}>
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {review.author}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    {review.company}
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              {review.content}
            </CardBody>
          </Card>
        ))}
      </div>
    </HomeSectionLayout>
  );
};

export default CustomerReview;

const reviews = [
  {
    id: 1,
    content:
      "For me, Pickle is the perfect companion for my media transfer needs. It's fast, reliable, and in my opinion, far superior to all other file transfer platforms. A+",
    author: "Jane D.",
    company: "Acme Corp",
  },
  {
    id: 2,
    content:
      "I have been using Pickle for several years with great satisfaction. The Pickle Desktop application in particular provides a very fast service for both uploading and downloading. You can also easily upload files larger than 2 GB, and the Italian localization makes everything easy and fast.",
    author: "John S.",
    company: "Beta LLC",
  },
  {
    id: 3,
    content:
      "Pickle solved all my past file transfer problems. It's fast, reliable, and easy to use. I'm very satisfied with the service. We send our shows all over the world, and Pickle is a huge help.",
    author: "Alice W.",
    company: "Gamma Inc",
  },
];
