import Image from "next/image";

export default function About() {
  return (
    <div className=" p-8 sm:max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">About</h1>
      <div className="gap-8 mt-8 mx-auto">
        <img
          src="./images/avatar.png"
          className="float-left object-cover mr-8 mb-8 aspect-square rounded-full w-32 h-32 sm:w-40 sm:h-40"
          alt="Profile photo"
        />

        <p className="font-body">
          Hello there! I'm Karthik, a passionate Mobile and Web developer 🚀
          <br />
          <br />
          
          I'm a Full Stack developer 👨‍💻, dedicated to developing both mobile and web apps
          using latest technologies and best practices. I have a strong
          background in a wide range of technologies including but not limited
          to Android, Kotlin, Java, Flutter, Dart, Python, Golang and
          Typescript, MongoDB. With each project I undertake, I strive to challenge
          myself, learn new technologies, and create meaningful solutions. 💡
          <br />
          <br />
          You can find my work on few places like on my{" "}
          <a
            className="underline font-display font-semibold"
            href="https://github.com/AxelBlaz3"
          >
            Github
          </a>{" "}
          and on Google Play Store:{" "}
          <a
            className="underline font-display font-semibold"
            href="https://play.google.com/store/apps/details?id=app.carnival"
          >
            Carnival: Fitness Content Curator
          </a>
          {", "}
          <a
            className="underline font-display font-semibold"
            href="https://play.google.com/store/apps/details?id=com.hing"
          >
            Hing: Share Food Recipes
          </a>{" "}
          and{" "}
          <a
            className="underline font-display font-semibold"
            href="https://play.google.com/store/apps/details?id=com.loudcar"
          >
            Loudcar
          </a>
          .
          <br />
          <br />
          Please feel free to contact me. I am also available on social
          platforms as linked below:
        </p>
        <br />
        <ul className="list-disc mx-4">
          <li>
            <a
              href="https://twitter.com/AxelBlaz3"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-display font-semibold"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/karthikgaddam4"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-display font-semibold"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/karthikgaddam4"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-display font-semibold"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
