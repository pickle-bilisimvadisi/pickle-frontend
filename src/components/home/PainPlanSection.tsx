import React from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";
import Globe from "@/assets/images/globe.webp";

const PainPlanSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(siteConfig.routerPaths.pricing);
  };

  return (
    <section className="py-8 md:py-10">
      <Card className="relative w-full h-full overflow-hidden">
        <CardBody className="px-12 md:px-20 py-16 overflow-hidden">
          <Image
            src={Globe}
            alt="Large File Upload"
            width={320}
            height={320}
            draggable={false}
            className="absolute translate-x-1/2 translate-y-1/2  md:translate-x-[180%] md:translate-y-[10%] opacity-10 select-none"
            loading="lazy"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center z-10">
            <div className="md:col-span-2">
              <h3 className="text-4xl font-bold mb-4 max-w-xl">
                Do you need to upload files larger than 5 GB?
              </h3>
              <p className="text-md max-w-md">
                With our paid plans, you can upload files of any size, from 250
                GB and up.
              </p>
            </div>
            <Button
              color="primary"
              className="col-span-1 w-[200px] md:ml-auto z-10"
              onPress={handleButtonClick}
            >
              Check Out Our Paid Plans
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default PainPlanSection;
