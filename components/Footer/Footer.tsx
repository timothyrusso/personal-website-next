import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <h2 className="text-2xl font-bold mb-7 mt-7">Want to talk?</h2>
      <ul
        className={`flex justify-between ${styles['max-width-footer-links']}`}
      >
        <li>
          &#60;
          <a
            className="gradient-text-hover font-bold"
            href="mailto:russotimothy@live.it"
          >
            Email
          </a>{' '}
          /&#62;
        </li>
        <li>
          &#60;
          <a
            className="gradient-text-hover font-bold"
            href="https://www.linkedin.com/in/russotimothysoftwareengineer/"
            target="_blank"
          >
            LinkedIn
          </a>{' '}
          /&#62;
        </li>
        <li>
          &#60;
          <a
            className="gradient-text-hover font-bold"
            href="https://docs.google.com/document/d/1cNIQyn6GO5usEu9Hs_lQVgJPxMxgYiiw5ZGZX69TjqI/edit"
            target="_blank"
          >
            Resume
          </a>{' '}
          /&#62;
        </li>
      </ul>
    </footer>
  );
};
