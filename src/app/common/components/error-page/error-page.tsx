import style from './error-page.module.css';
import { useNavigate } from 'react-router-dom';
import AtomicButtonComponent from '../../atomic-components/atomic-button/atomic-button.component';

const ErrorPage : React.FC = () : JSX.Element => {

  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.notfound}>
        <div className={style.notfound404}>
          <h1>404</h1>
        </div>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
        <AtomicButtonComponent
          clickFunction={() => navigate("/main")}
          name="Go To Homepage" />
      </div>
    </div>
  )
}

export default ErrorPage;

