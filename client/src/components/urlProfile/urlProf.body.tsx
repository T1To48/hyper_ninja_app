import { Status,ErrorType } from '../index'

const UrlProfileBody = ({ status, error }: { status: Status, error: ErrorType }) => {
  return (
    <div className="url-logger">{status === "Error" && <>{JSON.stringify(error,null, 2)}</>}</div>
  )
}

export default UrlProfileBody