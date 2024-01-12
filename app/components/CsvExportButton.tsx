import { Button } from "@radix-ui/themes";
import Papa from "papaparse";
import { FaDownload } from "react-icons/fa";

interface Props {
  data: string[][];
  filename: string;
}

const CsvExportButton = ({ data, filename }: Props) => {
  const handleExport = () => {
    const transposedData = data[0].map((_, colIndex) =>
      data.map((row) => row[colIndex])
    );
    const csvData = Papa.unparse({
      fields: ["File Name", "Essay Body", "Overall Rating", "Feedback"],
      data: transposedData,
    });

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button onClick={handleExport}>
      <FaDownload />
      Download Result(s)
    </Button>
  );
};

export default CsvExportButton;
