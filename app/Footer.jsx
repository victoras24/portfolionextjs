"use client";
import { FaGithub, FaGoogle, FaArrowLeft } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackToHome = () => {
    router.push("/");
  };
  return (
    <footer className="flex gap-6 flex-wrap items-center justify-center mt-8 mb-10">
      {pathname !== "/" && (
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer animate-bounce w-6 h-6"
          onClick={handleBackToHome}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaArrowLeft aria-hidden size={20} />
        </a>
      )}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-150"
        href="https://github.com/victoras24"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub aria-hidden size={20} />
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:scale-150"
        href="mailto:esaakidis@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle aria-hidden size={20} />
      </a>
    </footer>
  );
};
