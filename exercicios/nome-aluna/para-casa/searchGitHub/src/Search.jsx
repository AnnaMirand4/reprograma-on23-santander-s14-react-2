import { useEffect, useState } from "react"
import SubTitle from "./SubTitle"
import Axios from 'axios'
import Text from "./Text"

const Search = () => {

    const [repoGithub, setRepoGithub] = useState ([])

    useEffect (() =>{
        async function getRepo() {
            const response = await Axios.get('https://api.github.com/users/AnnaMirand4/repos')
            setRepoGithub(response.data)
        }
        getRepo()
        console.log(repoGithub)
    },[])

  return (

    <div className="search">
        <main>
            <SubTitle content='Meus repositórios' />
            <div className="container">
                {repoGithub.map((repo) => {
                    return (
                        <div className="repo-card" key={repo.id}>
                        <SubTitle content={repo.name} />
                        <Text content={repo.description ?? 'Sem descrição'} />
                        
                         </div>
                    )
                })

            }

            </div>
        </main>
    </div>
    
  )
}

export default Search