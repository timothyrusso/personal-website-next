import styles from './Footer.module.css';
import Image from 'next/image';
import NextIcon from '../../public/next-svg-icon.svg';
import TailwindIcon from '../../public/tailwind-svg-icon.svg';

export const Footer = () => {
  return (
    <footer>
      <h2 className="text-2xl font-bold mb-7 mt-7">Want to talk?</h2>
      <ul
        className={`flex justify-between underline ${styles['max-width-footer-links']}`}
      >
        <li>
          <a
            className="gradient-text-hover font-bold"
            href="mailto:russotimothy@live.it"
          >
            Email
          </a>
        </li>
        <li>
          <a
            className="gradient-text-hover font-bold"
            href="https://www.linkedin.com/in/russotimothysoftwareengineer/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="gradient-text-hover font-bold"
            href="https://docs.google.com/document/d/1cNIQyn6GO5usEu9Hs_lQVgJPxMxgYiiw5ZGZX69TjqI/edit"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <p className="mt-16">Made with ❤️ and</p>
        <Image
          src={NextIcon}
          alt="NextJs icon"
          width={40}
          className="bg-white max-h-10 self-end rounded-full p-2 ml-2 mt-16"
        />
        <Image
          src={TailwindIcon}
          alt="TailwindCSS icon"
          width={40}
          className="bg-white max-h-10 self-end rounded-full p-2 ml-2 mt-16"
        />
      </div>
    </footer>
  );
};
