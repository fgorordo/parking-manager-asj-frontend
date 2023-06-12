import { useFormik } from "formik"
import { CancelFormButton, ConfirmFormButton, DefaultInput } from "."
import { useUi } from "../../hooks/useUi"
import * as yup from "yup";

const formInitialData = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    accountBalance: 0,
}

export const CustomerForm = () => {
    const { handleCloseModal } = useUi();

    const validationSchema = yup.object().shape({
        firstname: yup.string()
            .trim("No se aceptan espacios vacios.")
            .required("Este campo es obligatorio.")
            .min(3, "El nombre debe contener al menos 3 caracteres."),
        lastname: yup.string()
            .trim("No se aceptan espacios vacios.")
            .required("Este campo es obligatorio.")
            .min(3, "El nombre debe contener al menos 3 caracteres."),
        email: yup.string()
            .trim("No se aceptan espacios vacios.")
            .required("Este campo es obligatorio.")
            .email("Debes ingresar un formato de email válido."),
        phone: yup.string()
            .trim("No se aceptan espacios vacios.")
            .required("Este campo es obligatorio.")
    });

    const { handleChange, handleReset, handleSubmit, values, errors, touched } = useFormik({
        initialValues: formInitialData,
        onSubmit: (values, e) => {
            console.log("values:", values)
            handleCloseModal();
            handleReset(e);
        },
        validationSchema,
    });

    const customCloseModal = (e: any) => {
        handleReset(e)
        handleCloseModal();
    }

    return (
        <form action="#" onSubmit={handleSubmit} className="max-w-[500px] mb-4">
            <div className="grid grid-cols-2 gap-4">
                <DefaultInput
                    htmlFor="firstname"
                    id="firstname"
                    labelText="Nombre"
                    name="firstname"
                    type="text"
                    inputPlaceholder="Jhon"
                    onChange={handleChange}
                    value={values.firstname}
                    yupErrors={errors.firstname}
                    touchedInput={touched.firstname}
                />

                <DefaultInput
                    htmlFor="lastname"
                    id="lastname"
                    labelText="Apellido"
                    name="lastname"
                    type="text"
                    inputPlaceholder="Doe"
                    onChange={handleChange}
                    value={values.lastname}
                    yupErrors={errors.lastname}
                    touchedInput={touched.lastname}
                />
            </div>
            <DefaultInput
                htmlFor="email"
                id="email"
                labelText="Correo electronico"
                name="email"
                type="text"
                inputPlaceholder="jhondoe@gmail.com"
                onChange={handleChange}
                value={values.email}
                yupErrors={errors.email}
                touchedInput={touched.email}
            />
            <DefaultInput
                htmlFor="phone"
                id="phone"
                labelText="Teléfono"
                name="phone"
                type="tel"
                inputPlaceholder="+54 9 11 345 564"
                onChange={handleChange}
                value={values.phone}
                yupErrors={errors.phone}
                touchedInput={touched.phone}
            />

            <div className="grid grid-cols-2 gap-6 items-center justify-between mt-6">
                <ConfirmFormButton buttonText="Confirmar" type="submit" onSubmit={handleSubmit} />
                <CancelFormButton type="button" onClick={(e) => customCloseModal(e)} />
            </div>
        </form>
    )
}
