// import { useState } from "react"
import { useForm } from "react-hook-form"
import { registrationUserThunk } from "../../../redux/slices/authSlice"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { RootState } from "../../../redux/store"

interface ModalRegistrationType {
}

interface RegistrationFormType {
    email: string
    password: string
}

const emailConfig = {
    required: "Email is required!",
    pattern: {
        
        value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
        message: "Please enter valid email!"
    }
}

const passwordConfig = {
    required: "Password is required",
    minLength: {
        value: 7,
        message: "Min length is 7 symbols!",
    }
}

export const ModalRegistration: React.FC<ModalRegistrationType> = () => {
    const isRegistrated: boolean = useAppSelector((state: RootState) => state.auth.isRegistrated)

    if(isRegistrated) {
        console.log('Fuck you')
    }

    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormType>();

    const onSubmit = (data: RegistrationFormType) => {
        dispatch(registrationUserThunk(data))
    }

    // const error: SubmitErrorHandler<RegistrationFormType> = (data) => {
    //     console.log(data)
    // }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email", emailConfig)}
                placeholder="Email" />
            <br />
            {errors.email && (<span style={{ color: "red" }}>{errors.email.message}</span>)}
            <br />

            <input type="password"
                {...register("password", passwordConfig)}
                placeholder="Password" />
            <br />
            {errors.password && (<span style={{ color: "red" }}>{errors?.password?.message}</span>)}
            <br />

            <button>Зареєструватись</button>

        </form>
    </>
}