"use client"; // Error boundaries must be Client Components

import "./globals.css";

// The file nme must be global-error
// The file is for global error handling in the whole component and must have it's own html and body tags
// It only really shows during production mode and not development
export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            onClick={() => {
              // refresh the page
              window.location.reload();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
