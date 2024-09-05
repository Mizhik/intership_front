import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../store/store"
import { GetAllCompanies } from "../../../api/company/company"
import Pagination from "../../../components/Pagination/Pagination"
import { Link } from "react-router-dom"
import {
  setCompanies,
  setError,
  setLoading,
} from "../../../store/company/company.slice"

const ListCompanies = () => {
  const dispatch: AppDispatch = useDispatch()
  const companies = useSelector((state: RootState) => state.companies.companies)
  const loading = useSelector((state: RootState) => state.companies.loading)
  const error = useSelector((state: RootState) => state.companies.error)

  const [showCompanies, setShowCompanies] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const handleToggleCompanies = async () => {
    if (!showCompanies) {
      dispatch(setLoading(true))
      dispatch(setError(null))

      try {
        const companyData = await GetAllCompanies()
        dispatch(setCompanies(companyData))
        setTotalPages(Math.ceil(companyData.length / 10))
      } catch (err: any) {
        dispatch(setError("Failed to fetch companies"))
      } finally {
        dispatch(setLoading(false))
      }
    }
    setShowCompanies(!showCompanies)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <h1>Список компаній</h1>
      <button onClick={handleToggleCompanies}>
        {showCompanies ? "Сховати компанії" : "Показати компанії"}
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {showCompanies && (
        <>
          <ul>
            {companies?.length !== 0 &&
              companies
                .slice((currentPage - 1) * 10, currentPage * 10)
                .map((company) => (
                  <li key={company.id}>
                    <h3>{company.name}</h3>
                    <p>{company.description}</p>
                    <p>
                      Видимість:{" "}
                      {company.is_visible ? (
                        <Link to={`/company/${company.id}`}>Детальніше</Link>
                      ) : null}
                    </p>
                  </li>
                ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  )
}

export default ListCompanies
