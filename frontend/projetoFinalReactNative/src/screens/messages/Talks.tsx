import { View, Text } from 'react-native'
import React,{FC} from 'react'
type profile = {
  email : string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;


}
interface HomeProps {
  profile: profile,
 
}
const Talks :FC<HomeProps> = ({profile}) => {
  return (
    <View>
      <Text>Talks</Text>
    </View>
  )
}

export default Talks