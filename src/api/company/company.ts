import { WorkFlowCompany } from "../../interfaces"
import { COMPANY } from "../../requestsUrls"
import instance from "../instance"

export const CreateCompany = async (data: WorkFlowCompany) => {
  const response = await instance.post(COMPANY, data)
  return response.data
}

export const GetCompany = async (company_id: string) => {
  const response = await instance.get(`${COMPANY}${company_id}`)
  return response.data
}

export const GetAllCompanies = async () => {
  const response = await instance.get(COMPANY)
  return response.data
}

export const UpdateCompany = async (company_id:string, data: WorkFlowCompany) => {
  const response = await instance.put(`${COMPANY}${company_id}`, data)
  return response.data
}

export const DeleteCompany = async (company_id:string) =>{
    const response = await instance.delete(`${COMPANY}${company_id}`)
  return response.data
}