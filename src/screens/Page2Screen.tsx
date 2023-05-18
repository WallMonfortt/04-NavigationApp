import React, { useEffect } from 'react'
// import { useNavigation } from '@react-navigation/core'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

export const Page2Screen = ({navigation}: Props ) => {

  // const navigator = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atrás'
    })
  }, [])
  

  return (
    <View style = {styles.globalMargin}>
        <Text
          style = {styles.title}
        >Page2Screen</Text>
      <Button
        title="Ir a página 3"
        onPress={ () => navigation.navigate( 'Page 3 Screen' ) }
      />
    </View>

  )
}
