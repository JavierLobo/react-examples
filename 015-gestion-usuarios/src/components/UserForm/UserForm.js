import Input from "../Input/Input"
import Button from "../Button/Button"
import useFormulario from "../../hooks/useFormulario"

const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        email: '',
        lastname: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label='Nombre' name='name' placeholder='Nombre'
                value={formulario.name} onChange={handleChange} />
            <Input
                label='Apellido' name='lastname' placeholder='Apellido'
                value={formulario.lastname} onChange={handleChange} />
            <Input
                label='Email' name='email' placeholder='Email'
                value={formulario.email} onChange={handleChange} />
            <Button>Enviar</Button>
        </form>
    )
}

export default UserForm