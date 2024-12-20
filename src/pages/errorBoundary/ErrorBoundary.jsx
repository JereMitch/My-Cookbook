import { Link } from "react-router-dom"

export default function ErrorBoundary(){
  return (
    <div>
        404 Not Found
        <Link to="/">Return To Home</Link>
    </div>
  )
}
