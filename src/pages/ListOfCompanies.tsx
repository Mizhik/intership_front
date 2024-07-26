
const ListOfCompanies = () => {
  const companies = ["Company1", "Company2", "Company3"]

  return (
    <div>
      <h1>Список компаній</h1>
      <ul>
        {companies.map((company) => (
          <li key={company}>{company}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListOfCompanies
