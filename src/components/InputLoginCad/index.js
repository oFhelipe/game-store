import './styles.scss'

function InputLoginCad (props) {
  const { children, ...newProps } = props;
  return (
    <input className="input-login-cad" {...newProps}/>
  );
}

export default InputLoginCad;