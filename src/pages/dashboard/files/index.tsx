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

const FilesPage: React.FC = () => {
  const [files, setFiles] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await api.get(END_POINTS.VIEW_FILE.FILE);
        const fetchedFiles = response.data.files;
        setFiles(fetchedFiles);
        files
      } catch (error) {}
    };
    fetchFiles();
  }, []);

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
              <TableColumn>Size</TableColumn>
              <TableColumn>Uploaded At</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {/* Example Row */}
              <TableRow>
                <TableCell>document.pdf</TableCell>
                <TableCell>1.2 MB</TableCell>
                <TableCell>2024-06-15</TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:underline">
                    Download
                  </button>
                </TableCell>
              </TableRow>
              {/* More rows can be added here */}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FilesPage;
