import { useForm } from "react-hook-form"
import { registrationUserThunk } from "../../../redux/slices/authSlice"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { RootState } from "../../../redux/store"
import { ErrorContainer, ModalRegistrationButton, ModalRegistrationContainer, ModalRegistrationContent, ModalRegistrationFields, ModalRegistrationHeader, ToggleButtonStyle } from "./ModalRegistration-styles"
import { useState } from "react"
import showImg from "../../../pictures/registration/show.png"
import hideImg from "../../../pictures/registration/hide.png"

export type ModalRegistrationPT = {
    onCloseModalHandler: () => void
}

type RegistrationFormType = {
    email: string
    password: string
    error: any
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

const showImgPassword = showImg;
const hideImgPassword = hideImg;

export const ModalRegistration: React.FC<ModalRegistrationPT> = ({ onCloseModalHandler }) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const imageSrc = showPassword ? hideImgPassword : showImgPassword;

    const isRegistrated: boolean = useAppSelector((state: RootState) => state.auth.isRegistrated)
    if (isRegistrated) {
        console.log('Fuck you')
    }

    const dispatch = useAppDispatch()
    const error: null | string = useAppSelector((state: RootState) => state.auth.error)
    const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormType>();

    const onSubmit = (data: RegistrationFormType) => {
        dispatch(registrationUserThunk(data))
    }

    return <ModalRegistrationContainer>
        <ModalRegistrationHeader>
            <button>ВХІД</button>
            <button>РЕЄСТРАЦІЯ</button>
            <button onClick={onCloseModalHandler}>X</button>
        </ModalRegistrationHeader>
        <ModalRegistrationContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {error && <ErrorContainer>{error}</ErrorContainer>}
                </div>
                <ModalRegistrationFields {...register("email", emailConfig)}
                    placeholder="Придумайте логін" />

                {errors.email && (<ErrorContainer>{errors.email.message}</ErrorContainer>)}

                <ModalRegistrationFields type={showPassword ? "text" : "password"}
                    {...register("password", passwordConfig)}
                    placeholder="Придумайте пароль" />
                <ToggleButtonStyle src={imageSrc} alt="png" onClick={togglePasswordVisibility}></ToggleButtonStyle>

                {errors.password && (<ErrorContainer>{errors?.password?.message}</ErrorContainer>)}

                <ModalRegistrationFields placeholder="Ваш email"></ModalRegistrationFields>
                <ModalRegistrationFields placeholder="Оберіть стать"></ModalRegistrationFields>

                <div>
                    <input type="checkbox" />
                    <span>Згоден з умовами користування сайтом</span>
                </div>

                <ModalRegistrationButton>Зареєструватись</ModalRegistrationButton>
            </form>
        </ModalRegistrationContent>
    </ModalRegistrationContainer>
}