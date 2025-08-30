import './Pie.scss';

function Pie() {
  return (
    <footer role="contentinfo" className="pie">

      <small className="copyright">© mielmadev {new Date().getFullYear()}</small>
      <a href="https://github.com/mielmadev" target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a href="https://www.linkedin.com/in/mielmadev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </footer>
  );
}

export default Pie;