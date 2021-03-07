import './styles.scss';

function Button (props) {
  const { children,...newProps} = props;
  return <button className="button" {...newProps}>{children}</button>;
}

export default Button;