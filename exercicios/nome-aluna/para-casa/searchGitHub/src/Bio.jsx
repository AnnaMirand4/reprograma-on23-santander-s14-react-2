import Image from "./Image"
import SubTitle from "./SubTitle"
import Text from "./Text"


const Bio = () => {
  return (
    <div className="bio">
        <Image image={anna} altText= 'foto da autora' />
        <SubTitle content= 'Aqui uma página com meu repositórios. Prazer, Anna.' />
        <Text content= 'Sou aluna da Reprograma, uma artista em transição de carreira.' />
    </div>
  )
}

export default Bio