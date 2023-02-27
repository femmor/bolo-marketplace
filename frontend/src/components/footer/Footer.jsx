import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {year} - All rights reserved</p>
    </footer>
  );
};
export default Footer;
