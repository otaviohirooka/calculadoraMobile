import React from 'react'
import { Text, 
         TouchableHighlight } from 'react-native'
import Styles from '../estilos/Styles'

export default props => {
    const stylesButton = [Styles.buttonContainer]
    if (props.double) stylesButton.push(Styles.buttonDouble)
    if (props.triple) stylesButton.push(Styles.buttonTriple)
    if (props.operation) stylesButton.push(Styles.buttonOperation)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}