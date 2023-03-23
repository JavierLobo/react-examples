import { Formik, Form, Field, ErrorMessage } from 'formik'
import CheckBox from './components/CheckBox/CheckBox'
import TextInput from './components/TextInput/TextInput'
import Select from './components/Select/Select'
import Radio from './components/Radio/Radio'

const validate = (values) => {
  const errors = {}

  if (!values.nombre) {
    errors.nombre = 'Requerido'
  } else if (values.nombre.length < 5) {
    errors.nombre = 'El nombre es muy corto'
  }

  if (!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if (!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El nombre es muy corto'
  }

  if (!values.email) {
    errors.email = 'Requerido'
  } else if (values.email.length < 5) {
    errors.email = 'El nombre es muy corto'
  }

if (!values.radio) {
  errors.radio = 'Requerido'
}

  return errors
}

function App() {
  return (
    <Formik
      initialValues={{ name: '', lastname: '', email: '', chancho: '', radio: '' }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Nombre' />
        <br />
        <TextInput name='lastname' label='Apellido' />
        <br />
        <TextInput name='email' label='Nombre' />
        <br />

        <Select label='Tipo de chancho' name='chancho'>
          <option value=''>Seleccione Tipo de Chancho</option>
          <option value='felipe'>Felipe</option>
          <option value='chanchitofeliz'>Chanchito Feliz</option>
          <option value='chanchitotriste'>Chanchito Triste</option>
        </Select>

        <label>Otros Controles</label>
        <br />
        <Field name='textarea' as='textarea' className='input' />
        <br />
        <Field name='select' as='select' className='input'>
          <option value="opcion1">Chanchito feliz</option>
          <option value="opcion2">Chanchito feliz</option>
        </Field>
        <br />
        <CheckBox name='terminos'>
          Aceptar terminos y condiciones
        </CheckBox>

        <Radio name='radio' value='chanchito1' label='Chanchito 1' />
        <Radio name='radio' value='chanchito2' label='Chanchito 2' />
        <Radio name='radio' value='chanchito3' label='Chanchito 3' />
        <Radio name='radio' value='chanchito4' label='Chanchito 4' />
        <ErrorMessage name='radio' />

        <button type='submit'>Enviar</button>
      </Form>

    </Formik>
  );
}

export default App;
