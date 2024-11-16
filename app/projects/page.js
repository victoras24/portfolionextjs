import Script from "next/script";

export default function Projects() {
  return (
    <div className="font-mono flex flex-col items-center justify-center p-8 gap-16 sm:p-20 font-sans ">
      <h1 className="text-6xl tracking-wide">Projects</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <a className="mb-5">Company Search</a>
          <iframe
            className="w-full h-[200px] border-none"
            src="https://player.vimeo.com/video/1030112165?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Company Search"
          ></iframe>
          <Script
            src="https://player.vimeo.com/api/player.js"
            strategy="afterInteractive" // Ensures the script loads after the page is interactive
          />
        </div>
        <div className="flex flex-col items-center">
          <a className="mb-5">Eleni Sweets</a>
          <iframe
            src="https://player.vimeo.com/video/1030264675?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="w-full h-[200px] border-none"
            title="Eleni Sweets"
          ></iframe>
          <Script
            src="https://player.vimeo.com/api/player.js"
            strategy="afterInteractive"
          />
        </div>
        <div className="flex flex-col items-center">
          <a className="mb-5">Van Life</a>
          <iframe
            src="https://player.vimeo.com/video/1030266209?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="Van Life"
            className="w-full h-[200px] border-none"
          ></iframe>
          <Script
            src="https://player.vimeo.com/api/player.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </div>
  );
}
