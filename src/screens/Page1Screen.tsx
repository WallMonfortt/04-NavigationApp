import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, Touchable, View } from 'react-native'
import { styles } from '../themes/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {

}

export const Page1Screen = ( {navigation}:Props ) => {
  // console.log(props)
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page1Screen</Text>
        <Button 
          title="Ir a página 2"
          onPress={ () => navigation.navigate('Page2Screen') }
        />
        <Text> Navigate to persona with arguments</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
            onPress={ () => navigation.navigate('PersonaScreen',{
              id: 1,
              name: 'Peter'
            })}
          >
            <Text
            style={
              {
                ...styles.button,
                backgroundColor: '#5856D6'
              }
            }
            >Peter</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={ () => navigation.navigate('PersonaScreen',{
              id: 2,
              name: 'Maria'
            })}
          >
            <Text
            style={
              {
                ...styles.button,
                backgroundColor: '#FF9427'
              }
            }
            >Maria</Text>
          </TouchableOpacity>
        </View>
        
    </View>

  )
}
