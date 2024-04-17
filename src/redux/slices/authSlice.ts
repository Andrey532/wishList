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
    error: null | string
}

const initialState: AuthState = {
    isRegistrated: false,
    user: null,
    isLoggedIn: false,
    data: [{ email: '', password: '' }],
    error: null
}

export const registrationUserThunk = createAsyncThunk(
    "auth/registrationUser",
    async (userData: { email: string; password: string }, thunkAPI) => {
        try {
            const res = await axios.post("http://localhost:3000/auth/registration", userData)
            thunkAPI.dispatch(isRegistrated(true))
            return res.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data.message)
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
        isRegistrated(state, action: PayloadAction<boolean>) {
            state.isRegistrated = action.payload
        },
        setUser(state, action: PayloadAction<User>) {
            state.data.push(action.payload)
        },
        clearError(state) {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registrationUserThunk.rejected, (state: any, action) => {
            state.error = action.payload
            state.isRegistrated = false
        })
    }
})

export const { loginReducer, setUser, isRegistrated } = authSlice.actions

export default authSlice.reducer