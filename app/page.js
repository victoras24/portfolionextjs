export default function Home() {
  return (
    <div className="font-mono flex flex-col items-center justify-center p-8 font-sans">
      <main className="flex flex-col  items-center text-center sm:text-left">
        <h1 className="text-6xl tracking-wide mb-1">Victoras Isaakidis</h1>
        <p className="text-sm leading-6 tracking-tight mb-16">
          having fun building interesting web applications
        </p>

        <div className="w-full flex flex-col items-center justify-center">
          <p>Latest project</p>
          <iframe
            className="w-full h-[300px] mb-10"
            src="https://player.vimeo.com/video/1030112165?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            title="CompanySearch"
          ></iframe>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/projects"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <a
            className="rounded-full border border-solid border-gray-200 dark:border-gray-700 transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/about"
            rel="noopener noreferrer"
          >
            About me
          </a>
        </div>
      </main>
    </div>
  );
}
