import './Pie.scss';

function Pie() {
  return (
    <footer>

      <small className="copyright">© mielmadev {new Date().getFullYear()}</small>
      <a href="#" className="icon">Github</a>
      <a href="#" className="icon">LinkedIn</a>
    </footer>
  );
}

export default Pie;