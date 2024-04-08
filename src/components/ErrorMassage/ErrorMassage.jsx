import css from './ErrorMassage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.error}>
      Sorry, something went wrong! Please try reloading this page!
    </div>
  );
};

export default ErrorMessage;