import {useState , useEffect} from 'react'

function UseFetchData() {
  const [repositories , setRepositories] = useState(null);

  const fetchData = async function () {
    try {
      const api = await fetch(`https://api.github.com/users/VinicyosFerreira/repos`)
      const response = await api.json();
      setRepositories(response)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
      fetchData()
  } , [])

  return {repositories}
  
}

export default UseFetchData