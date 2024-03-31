// import { useState } from "react"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

// interface ModalRegistrationType {

// }

interface RegistrationFormType {
    name: string
    password: string
    email: string
    selectGender: string
    userAgreement: boolean
}

const nameConfig = {
    required: "Name is required",
}

const passwordConfig = {
    required: "Password is required",
    minLength: {
        value: 7,
        message: "Min length is 7 symbols!",
    }
}

const emailConfig = {
    required: "Email is required!",
    pattern: {
        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        message: "Please enter valid email!"
    }
}

export const ModalRegistration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormType>();
    // const [data, setData ] = useState("")

    const submit: SubmitHandler<RegistrationFormType> = data => {
        console.log(data)
    }

    const error: SubmitErrorHandler<RegistrationFormType> = data => {
        console.log(data)
    }

    return <>
        <form onSubmit={handleSubmit(submit, error)}>
            <input type="name" {...register("name", nameConfig)}
                placeholder={"Name"} />
            <br />
            {errors.name && (<span style={{ color: "red" }}>{errors.name.message}</span>)}
            <br />

            <input type="password"
                {...register("password", passwordConfig)}
                placeholder="Password" />
            <br />
            {errors.password && (<span style={{ color: "red" }}>{errors?.password?.message}</span>)}
            <br />

            <input {...register("email", emailConfig)}
                placeholder="Email" />
            <br />
            {errors.email && (<span style={{ color: "red" }}>{errors.email.message}</span>)}
            <br />

            <select {...register("selectGender", { required: true })}>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <br />

            <input type="checkbox"
                {...register("userAgreement")} />
            <br />

            <button>Зареєструватись</button>
        </form>
    </>
}