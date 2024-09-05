import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Company } from "../../interfaces"


export interface CompanyState {
  companies: Company[]
  loading: boolean
  error: string | null
}

const initialState: CompanyState = {
  companies: [],
  loading: false,
  error: null,
}

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.companies = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setCompanies, setLoading, setError } = companySlice.actions
export default companySlice.reducer
