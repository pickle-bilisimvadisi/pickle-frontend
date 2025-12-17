import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { api, END_POINTS } from "@/services/api";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { DatePicker } from "@heroui/date-picker";

const SingleLinkGeneratorModal = ({ file }: { file?: any }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expiresAt, setExpiresAt] = React.useState<Date | null>(null);

  const onOpen = () => setIsOpen(true);
  const onOpenChange = (open: boolean) => setIsOpen(open);

  const onSumbit = () => {
    // Handle link generation logic here
    expiresAt && console.log("Link will expire at:", expiresAt);
    setIsOpen(false);
    file && console.log("Generating link for file:", file);
  }

  return (
    <>
      <Button onPress={onOpen}>Generate Link</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Generate Single Link</ModalHeader>
              <ModalBody>
                <p>Link generation functionality goes here.</p>
                <DatePicker className="max-w-[284px]" label="Expires At" onChange={setExpiresAt} />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onSumbit}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const FilesPage: React.FC = () => {
  const [files, setFiles] = React.useState<Array<any>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchFiles = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(END_POINTS.VIEW_FILE.FILE);
        const fetchedFiles = response.data?.data;
        setFiles(fetchedFiles);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchFiles();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          My Files
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage your files securely.
        </p>

        <div className="mt-8">
          <Table>
            <TableHeader>
              <TableColumn>File Name</TableColumn>
              <TableColumn>Download Count</TableColumn>
              <TableColumn>Max Download</TableColumn>
              <TableColumn>Uploaded At</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {files?.map((file) => (
                <TableRow key={file.id}>
                  <TableCell>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "200px",
                      }}
                    >
                      {file.fileName}
                    </p>
                  </TableCell>
                  <TableCell>{file.downloadCount}</TableCell>
                  <TableCell>{file.maxDownloads}</TableCell>
                  <TableCell>
                    {new Date(file.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <SingleLinkGeneratorModal />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FilesPage;
