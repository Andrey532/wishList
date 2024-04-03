import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
    email: string
    password: string
}

interface AuthState {
    isRegistrated: boolean
    user: User | null
    isLoggedIn: boolean
    data: User[]
}

const initialState:AuthState = {
    isRegistrated: false,
    user: null,
    isLoggedIn: false,
    data: [{email: '', password: ''}]
}

export const registrationUserThunk = createAsyncThunk( 
    "auth/registerUser",
    async ( userData: { email: string; password: string }, thunkAPI) => {
        try {
            await axios.post("http://localhost:3000/auth/registration", userData)
            thunkAPI.dispatch(isRegistrated(true))
            //return res.data
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
            }
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginReducer(state, action: PayloadAction<{ email: string, password: string }>) {
            state.isLoggedIn = true
            state.user = action.payload
        },
        logoutReducer(state) {
            state.isLoggedIn = false
            state.user = null
        },
        isRegistrated(state,  action: PayloadAction<boolean>){
            state.isRegistrated = action.payload
        },
        setUser(state, action: PayloadAction<User>){
            state.data.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registrationUserThunk.fulfilled, (state) => {
            state.isLoggedIn = true
            //state.user = action.payload
        })
    }
})

export const { loginReducer, logoutReducer, setUser, isRegistrated } = authSlice.actions

export default authSlice.reducer