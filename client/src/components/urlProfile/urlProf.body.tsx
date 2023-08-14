import { Status,UrlObj } from '../../features/api.slice'

const UrlProfileBody = ({ status, error }: { status: Status, error: UrlObj["error"] }) => {
  return (
    <div className="url-logger">{status === "Error" && <>{JSON.stringify(error,null, 2)}</>}</div>
  )
}

export default UrlProfileBody