import React from 'react'
// import { useNavigation } from '@react-navigation/core'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

export const Page2Screen = ({navigation}: Props ) => {

  // const navigator = useNavigation()

  return (
    <View style = {styles.globalMargin}>
        <Text>Page2Screen</Text>
      <Button
        title="Ir a página 3"
        onPress={ () => navigation.navigate( 'Page 3 Screen' ) }
      />
    </View>

  )
}
