# Auto Grader

Auto Grader is a web application designed as a final year project for my BSc (Hons) in Computing Science. This project utilises the GPT-3.5 API service to score short English essays and provide relevant feedback. Built with Next.js, React and Typescript, the application incorporates various libraries and packages to enhance its functionality.

## Usage
We're excited to announce that the AutoGrader application is now available for public use! You can access the web application using your Google or GitHub login credentials. As a new user, you'll receive one free credit upon registration, and you can easily top up your credits for additional essay submissions via Stripe.

## Features
- **Connect to GPT-3.5 API:** The application seamlessly connects to the GPT-3.5 API, sending requests and receiving grading results for short English essays.
- **Support Multiple Essay Submissions:** Users can efficiently submit multiple essays for grading, streamlining the process of evaluating multiple pieces of writing.
- **Support PDF and DOCX File Type:** Utilising Convert API and Mammoth, the application can extract text from PDF and DOCX files, allowing users to upload documents in both formats.
- **Multiple Grading Options:** Users have the flexibility to select essay levels, types, scoring scales, and feedback detail levels, providing essay context and customising the generated output.
- **Grading Results Review:** After the grading process, users can review the generated results and make modifications as needed, ensuring accuracy and relevance.
- **Downloadable .csv Results:** The application enables users to download the results of essay submissions in a convenient .csv file. This file compiles all necessary information related to the essay submissions.
- **Loading Indicator:** Enhancing user experience, the application includes loading indicators to display the status of document uploads and results generation.
- **Error Handling:** Comprehensive error handling ensures that users are informed of any issues during the essay submission process. Well-designed and described error pages provide clarity and guidance.
- **Secure API Key Handling:** Created server-side API endpoints in the application that act as a proxy to the external APIs.
- **Google Cloud SQL Database Hosting:** Leveraging the power of Google Cloud SQL, our application now benefits from reliable and scalable database hosting, ensuring efficient data management and accessibility.
- **Stripe Payment Gateway Integration:** Users can now conveniently top up their credits using Stripe, ensuring secure and seamless transactions.

## Technologies Used
- Radix UI, Chakra UI, Tailwind CSS
- Axios
- React Query
- Convert API, Mammoth
- Papaparse
- Next Auth
- Zustand
- Prisma
- Google Cloud SQL
- Stripe

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables, including GPT-3.5 API keys and other necessary configurations.
4. Run the application using `npm run dev`.

## Acknowledgments
Special thanks to the open-source community for making this project possible.
