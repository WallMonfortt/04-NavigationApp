import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {

}

export const Page1Screen = ( {navigation}:Props ) => {
  // console.log(props)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page1Screen</Text>
        <Button 
          title="Ir a página 2"
          onPress={ () => navigation.navigate('Page 2 Screen') }
        />
    </View>

  )
}
