import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page4Screen = ({navigation}:Props) => {
  return (
    <View
      style = { styles.globalMargin}
    >
        <Text>Page4Screen</Text>

        <Button
          title='regresar'
          onPress={ () => navigation.pop() }
        />

        <Text>Home</Text>

        <Button 
          title='Ir a la página 1'
          onPress={ () => navigation.popToTop() }
        />
    </View>

  )
}
