import DeleteUser from "./DeleteUser/DeleteUser"
import InfoUser from "./InfoUser/InfoUser"
import ListUsers from "./ListUsers/ListUsers"
import UpdateUser from "./UpdateUser/UpdateUser"

const Users = () => {
  return (
    <>
      <ListUsers />
      <InfoUser />
      <UpdateUser/>
      <DeleteUser/>
    </>
  )
}

export default Users
