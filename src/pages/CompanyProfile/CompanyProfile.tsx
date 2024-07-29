
const CompanyProfile = () => {
  const company = { name: "Acme Corp", industry: "Technology" }

  return (
    <div>
      <h1>Профіль компанії</h1>
      <p>Назва: {company.name}</p>
      <p>Індустрія: {company.industry}</p>
    </div>
  )
}

export default CompanyProfile
