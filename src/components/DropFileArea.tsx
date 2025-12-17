import React, { useRef, useState } from "react";
import { Card } from "@heroui/card";
import { CardBody } from "@heroui/card";
import {
  CloudUploadIcon,
  FileTextIcon,
  FolderIcon,
  ImageIcon,
  VideoIcon,
} from "./icons";
import useAuthStore from "@/stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";
import {api, END_POINTS} from "@/services/api";

export default function DropFileArea() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const authState = useAuthStore((state) => state);
  const navigate = useNavigate();

  const redirectLogin = () => {
    addToast({
      title: "Require Login",
      severity: "warning",
    });
    navigate(siteConfig.routerPaths.auth.signIn);
  };

  const uploadFiles = async (files: FileList) => {
    setIsUploading(true);
    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("file", file);
    });

    try {
      const response = await api.post(END_POINTS.UPLOAD.FILE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      addToast({
        title: "Files uploaded successfully",
        severity: "success",
      });
      console.log("Upload response:", response.data);
    } catch (error) {
      addToast({
        title: "Upload failed",
        severity: "danger",
      });
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const uploadFolder = async (files: FileList) => {
    setIsUploading(true);
    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("files", file);
      if (file.webkitRelativePath) {
        formData.append("paths[]", file.webkitRelativePath);
      }
    });

    try {
      const response = await api.post(END_POINTS.UPLOAD.FOLDER, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      addToast({
        title: "Folder uploaded successfully",
        severity: "success",
      });
      console.log("Upload response:", response.data);
    } catch (error) {
      addToast({
        title: "Upload failed",
        severity: "danger",
      });
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFiles(files);
    }
  };

  const handleFolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFolder(files);
    }
  };

  const handleClick = (type: "file" | "folder") => {
    if (authState.isAuthenticated) {
      if (type === "folder") {
        folderInputRef.current?.click();
      } else {
        fileInputRef.current?.click();
      }
    } else {
      redirectLogin();
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (!authState.isAuthenticated) {
      redirectLogin();
      return;
    }

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const firstFile = files[0];
      if ((firstFile as any).webkitGetAsEntry?.()?.isDirectory) {
        uploadFolder(files);
      } else {
        uploadFiles(files);
      }
    } else {
      addToast({
        title: "No files detected in drop",
        severity: "warning",
      });
    }
  };

  return (
    <div className="relative w-full max-w-3xl min-h-[400px] flex items-center justify-center text-center">
      <FloatingCard
        icon={<FileTextIcon size={20} className="text-green-500" />}
        className="absolute left-[5%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex"
        barColor="bg-green-100"
      />

      <FloatingCard
        icon={<ImageIcon size={20} className="text-red-400" />}
        className="absolute left-[8%] top-[30%] z-20 hidden sm:flex opacity-80 scale-90"
      />

      <FloatingCard
        icon={<FolderIcon size={20} className="text-purple-500" />}
        className="absolute right-[-20px] top-[45%] z-20 hidden md:flex"
        barColor="bg-purple-100"
      />

      <FloatingCard
        icon={<VideoIcon size={20} className="text-yellow-400" />}
        className="absolute right-[10%] bottom-[30%] z-10 hidden sm:flex opacity-80 scale-90"
      />

      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`
            relative z-0 flex flex-col items-center justify-center w-3/4 h-full px-6 py-10
            border-2 border-dashed rounded-[32px] transition-all duration-300 dark:bg-primary/5
            ${
              isDragging
                ? "border-blue-500 bg-blue-50"
                : "border-blue-200 bg-slate-50/50 hover:bg-slate-50 hover:border-blue-300"
            }
          `}
      >
        <input
          type="file"
          className="hidden"
          name="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
        />
        <input
          type="file"
          className="hidden"
          name="files[]"
          ref={folderInputRef}
          id="files"
          onChange={handleFolderChange}
          multiple
          directory=""
          webkitdirectory=""
          mozdirectory=""
        />

        <div className="mb-6 p-4 rounded-full bg-blue-50 text-blue-400">
          <CloudUploadIcon width={48} height={48} />
        </div>

        <h3 className="text-md sm:text-lg font-semibold text-gray-700">
          Upload your files and folders here
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm mt-2">
          Click or Drag and Drop Your Files
        </p>
        <div className="text-2xl my-4 text-gray-400">&</div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            onPress={() => handleClick("folder")} 
            color="primary"
            isLoading={isUploading}
            isDisabled={isUploading}
          >
            Select Folder
          </Button>
          <Button 
            onPress={() => handleClick("file")} 
            color="primary"
            isLoading={isUploading}
            isDisabled={isUploading}
          >
            Select Files
          </Button>
        </div>
      </div>
    </div>
  );
}

const FloatingCard: React.FC<{
  icon: React.ReactNode;
  className?: string;
  barColor?: string;
}> = ({ icon, className, barColor }) => {
  return (
    <Card
      className={`shadow-lg border border-gray-100 rounded-2xl p-2 ${className}`}
    >
      <CardBody className="flex flex-row items-center gap-3 p-2 overflow-visible">
        <div className="p-2 bg-gray-50 rounded-xl">{icon}</div>
        {barColor && (
          <div className="flex flex-col gap-2">
            <div
              className={`w-12 h-2 rounded-full ${barColor} opacity-50`}
            ></div>
            <div className="w-8 h-2 bg-gray-100 rounded-full"></div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
