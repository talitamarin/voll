import { VStack, Divider , ScrollView} from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'
import { Botao } from '../componentes/Botao'
import { Titulo } from '../componentes/Titulo'

export default function Consultas(){
  return(
  <ScrollView p={5}>
    <Titulo p={5} color='blue.500'> Minhas Consultas</Titulo>
    <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
    <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start'>Próximas Consultas</Titulo>
    <CardConsulta 
    nome='Dr. Felipe Matos'
    especialidade='Ginecologista'
    foto='https://github.com/FelipeMatosQA.png'
    data='10/09/2023'
    foiAgendado
    />
    <Divider mt={5} />

    <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start'>Consultas Passsadas</Titulo>
    <CardConsulta 
    nome='Dr. Felipe Matos'
    especialidade='Ginecologista'
    foto='https://github.com/FelipeMatosQA.png'
    data='10/09/2023'
    foiAtendido
    />
        <CardConsulta 
    nome='Dr. Felipe Matos'
    especialidade='Ginecologista'
    foto='https://github.com/FelipeMatosQA.png'
    data='10/09/2023'
    foiAtendido
    />
        <CardConsulta 
    nome='Dr. Felipe Matos'
    especialidade='Ginecologista'
    foto='https://github.com/FelipeMatosQA.png'
    data='10/09/2023'
    foiAtendido
    />

  </ScrollView>

  )
}
