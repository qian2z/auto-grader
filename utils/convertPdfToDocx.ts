import ConvertApi from "convertapi-js";
import mammoth from "mammoth";

export default async function convertPdfToDocx(file: File) {
  let convertApi = ConvertApi.auth(process.env.NEXT_PUBLIC_CONVERT_API_SECRET!);
  let params = convertApi.createParams();
  params.add("File", file);
  let result = await convertApi.convert("pdf", "docx", params);

  const url = result.files[0].Url;
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
