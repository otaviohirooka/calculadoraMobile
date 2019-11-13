import React from 'react'
import { Text,
         View } from 'react-native'
import Styles from '../estilos/Styles'

export default props => 
    <View style={Styles.displayContainer}>
        <Text style={Styles.displayValue}
        numberOfLines={1}>{props.value}</Text>
    </View>