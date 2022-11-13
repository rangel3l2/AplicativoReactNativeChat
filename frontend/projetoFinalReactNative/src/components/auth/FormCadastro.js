import { View, Text} from 'react-native'
import React from 'react'
import TextInputCustom from './TextInput'
import styles from '../../assets/css/styles'


const FormCadastro = ({setUser, user}) => {
  return (
    
    
      <View style={styles.textInputView}>
      <Text style = {styles.text}>Ou</Text>
        <TextInputCustom
          title = 'nome'
          setUser = {setUser}
          user= {user}
          placeholder="Nome do usuário"
          keyboardType="text"/>
        <TextInputCustom
          title = 'login'
          setUser = {setUser}
          user = {user}
          placeholder="Nome para acesso"
          keyboardType="text"/>
        <TextInputCustom
            title = 'senha'
            setUser = {setUser}
            user = {user}
            placeholder="Senha do usuário"
            keyboardType="text"
            secureTextEntry = {true}
        />
         <TextInputCustom
            title = 'telefone'
            setUser = {setUser}
            user = {user}
            placeholder="Número de telefone"
            keyboardType="numeric"
        />
      



        

      
    </View>
  )
}

export default FormCadastro