import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"


interface Props {
  children: React.ReactNode
}

const ProtectedRoute = (props: Props) => {
  
  const user = useSelector((state: RootState) => state.user)

  if (user.isAuth) {
    return (
      <>
        {props.children}
      </>
    )
  }
  return <h1>Acceso denegado</h1>
}


export { ProtectedRoute }