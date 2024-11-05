import * as React from "react";
import styled from "@emotion/styled";

interface InputComponentProps {
  className?: string;
  containerStyle?: React.CSSProperties;
  disabled?: boolean;
  inputStyle?: React.CSSProperties;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  type?: string;
  value?: string | number;
  wrapperStyle?: React.CSSProperties;
}

const InputComponent: React.FC<InputComponentProps> = ({
  className,
  containerStyle,
  disabled,
  inputStyle,
  name,
  onChange,
  placeholder,
  readOnly,
  type,
  value,
  wrapperStyle
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={className} style={wrapperStyle}>
      <div onClick={handleClick} className="container" style={containerStyle}>
        <input
          ref={inputRef}
          aria-label={name}
          data-testid={name}
          tabIndex={0}
          type={type}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>

    </div>
  );
};

const Input = styled(InputComponent)`
  height: 65px;
  position: relative;
  width: 100%;

  .container {
    width: 100%;
  }

  input {
    color: #f7f7f7;
    width: 100%;
    font-size: 12px;
    border: 1px solid
    border-radius: 10px;
    width: 100%;
    transition: border, color 0.2s ease-in-out;
    background: transparent;

    :-webkit-autofill {
      -webkit-text-fill-color: #fff;
      box-shadow: 0 0 0px 1000px #222b36 inset;

      :focus {
        box-shadow: 0 0 0px 1000px #266798 inset;
      }
    }

    ::placeholder {
      color: #ccc;
    }

    :hover {
      border: 1px solid #ccc;
    }

    :focus {
      outline: 0;
      border: 1px solid #ccc;
      background: #266798;
    }
  }
`;

export default Input;
