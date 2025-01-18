import { useParams } from 'react-router-dom'

const User = () => {
  const { userId } = useParams()
  console.log('userId: ', userId)

  return (
    <div className="text-center p-4 bg-gray-700 text-white text-[28px] font-bold">User: {userId}</div>
  )
}

export default User
