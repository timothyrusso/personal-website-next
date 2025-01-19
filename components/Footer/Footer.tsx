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
      </ul>
      <div className="flex items-center">
        <p className="mt-16">Made with ❤️ and</p>
        <div className="relative">
          <Image
            src={NextIcon}
            alt="NextJs icon"
            width={40}
            className="bg-white max-h-10 self-end rounded-full p-2 ml-2 mt-16 hover-trigger"
          />
          <div className="absolute w-24 h-8 rounded-2xl flex justify-center items-center hover-target top-6 right-0 opacity-0">
            NextJs
          </div>
        </div>
        <div className="relative">
          <Image
            src={TailwindIcon}
            alt="TailwindCSS icon"
            width={40}
            className="bg-white max-h-10 self-end rounded-full p-2 ml-2 mt-16 hover-trigger"
          />
          <div className="absolute w-32 h-8 rounded-2xl flex justify-center items-center hover-target top-6 left-3 opacity-0">
            TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
};
