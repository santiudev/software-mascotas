import axios from "axios"

const useAPI = (route) => {
  const response = axios.get(route)
  return response
}

export default useAPI