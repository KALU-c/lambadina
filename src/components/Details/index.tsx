import { useParams } from "react-router"

const Details = () => {
  const { expertName } = useParams();
  return (
    <div>
      {expertName}
    </div>
  )
}

export default Details
