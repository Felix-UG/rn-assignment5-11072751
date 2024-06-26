import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Transaction = ({ companyLogo, companyName, purpose, price} ) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.content}>
            <View style={styles.logo}>
                <Image source={companyLogo}/>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize: hp('3%'), fontWeight: '500'}}>{companyName}</Text>
                <Text style={{fontSize: hp('2%'), color: '#808080'}}>{purpose}</Text>
            </View>
        </View>
        <View style={styles.price}>
            <Text style={{fontSize: hp('3%'), fontWeight: '400'}}>{price}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        marginTop: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp('10%'),
        alignItems:  'center'
        
    },
    
    content:{
        flexDirection: 'row'
    },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    
    text:{
        marginLeft: wp('3%'),
        alignSelf: 'center',
        width: wp('50%'),
    }, 

    price: {

    }

})