import axios from "axios";
import mammoth from "mammoth";

export default async function convertExtractPdfText(file: File) {
  const data = new FormData();
  data.append("file", file);
  let result = await axios.post("/api/conversion/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const url = result.data.Files[0].Url;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch file from URL: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const textResult = await mammoth.extractRawText({ arrayBuffer });
    return textResult.value;
  } catch (error) {
    console.error("Error reading file from URL:", error);
    throw error;
  }
}
