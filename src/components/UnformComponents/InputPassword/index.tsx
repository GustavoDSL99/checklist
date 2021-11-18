import React, { useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { InputLabel, InputAdornment, IconButton, OutlinedInput, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { DivErro, FormControlStyled } from './styles.module';

type PropsInput = {
  name: string,
  label?: string,
  style?: object,
  fullWidth?: boolean;
}

interface State {
  password: string;
  showPassword: boolean;
}

export function InputPass({ name, label, fullWidth, ...rest }: PropsInput) {

  const inputRef = useRef<any | null>(null)
  const materialInputRef = useRef<any | null>(null);

  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: any) {
        ref.value = value;
        materialInputRef.current
          .querySelector("label")
          .classList.add("MuiFormLabel-filled", "MuiInputLabel-shrink");
      }
    })
  }, [fieldName, registerField])

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="Container-InputPassword">
      <FormControlStyled variant="outlined" className={!!error ? 'Alterar-Cor-Senha' : ""} fullWidth={fullWidth}>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          inputRef={inputRef}
          ref={materialInputRef}
          error={!!error}
          name={fieldName}
          fullWidth={fullWidth}
          defaultValue={defaultValue}
          labelWidth={label !== undefined && label?.length > 5 ? 94 : 70}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ?
                  <Visibility className={!!error ? "Icone-Visualizar" : ""} /> :
                  <VisibilityOff className={!!error ? "Icone-Visualizar" : ""} />
                }
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControlStyled>
      {error &&
        <DivErro>
          <ErrorOutlineIcon className="Icone-Input-Error" />
          <Typography className="Input-Error">{error}</Typography>
        </DivErro>
      }
    </div>
  )
}

export default InputPass
