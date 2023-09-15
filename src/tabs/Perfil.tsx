import { VStack, Text, ScrollView, Avatar , Divider } from 'native-base'
import {Titulo} from '../componentes/Titulo' ;


export default function Perfil(){
  return(
    <ScrollView> 
  <VStack flex={1} alignItems='center' p={5}>
    <Titulo color='blue.500'>Meu Perfil</Titulo>
    <Avatar size='xl' source={{uri: 'https://github.com/talitamarin.png'}}
    mt={5}/>
    <Titulo color='blue.500'>Informações Pessoais</Titulo>
    <Titulo fontSize='lg'mb={1}>Talita Marin</Titulo>
    <Text>23/09/1993</Text>
    <Text>Recife-PE</Text>

    <Divider mt={5}/>

  <Titulo color='blue.500' mb={1}>Histórico Médico</Titulo>
  <Text>Sinusite</Text>
  <Text>Rinite</Text>
  </VStack>
  </ScrollView>

  )
}
