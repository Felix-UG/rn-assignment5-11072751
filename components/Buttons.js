import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Buttons = ({buttonIcon, buttonText}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Image source={buttonIcon} />
        </TouchableOpacity>
        <Text style={styles.text}>{ buttonText }</Text>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    container:{
        marginTop: hp('5%'),    
        // backgroundColor: 'lightred',    

    }, 

    buttonBox:{
        // backgroundColor: 'blue',
        alignItems: 'center'
    },

    button: {
        width: 60,
        height: 60,
        borderRadius: 30, 
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        marginTop: 5,
        fontSize: 15,
        textAlign: 'center'
    }
})