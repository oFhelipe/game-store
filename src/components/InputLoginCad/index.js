import './styles.scss'

function InputLoginCad (props) {
  const { children, className ,...newProps } = props;
  return (
    <input className={`input-login-cad ${className && className}`} {...newProps}/>
  );
}

export default InputLoginCad;