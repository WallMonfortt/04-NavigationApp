import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'


interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}:Props) => {
  return (
    <View>
        <Text>Page3Screen</Text>

        <Button
          title="ir a página 4"
          onPress={ () => navigation.navigate('Page 4 Screen') }
        />
    </View>

  )
}
