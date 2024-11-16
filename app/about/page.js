export const About = () => {
  return (
    <div className="font-mono flex flex-col p-8 sm:p-20">
      <h1 className="text-6xl text-center tracking-wide mb-16">About me</h1>
      <p className="mb-10">
        Hey, I’m Victoras, currently an accountant with a passion for technology
        and web development. While my background is in finance and accounting, I
        discovered a love for coding and problem-solving, which inspired me to
        start building web applications in my free time.
      </p>
      <h2 className="font-bold mb-4 text-lg">
        I have hands-on experience with:
      </h2>
      <ul className="list-disc ml-3 mb-10">
        <li>Frontend: HTML, CSS, JavaScript, React</li>
        <li>Frameworks: Next.js, Tailwind CSS (in progress)</li>
        <li>Tools: Git, Firebase, Figma</li>
        <li>Operating Systems: Linux(fedora), Windows, MacOs(currently)</li>
        <li>Future Goals: TypeScript, backend technologies, and more!</li>
      </ul>
      <h2 className="font-bold mb-4 text-lg">What I want to do:</h2>
      <p>
        My goal is to create user-centric applications that solve real-world
        problems. I am particularly interested in merging my financial expertise
        with development to build tools that simplify complex business
        processes.
      </p>
    </div>
  );
};

export default About;
