import { StyleSheet, Text, View, FlatList, Switch } from 'react-native'
import React, { useContext } from 'react'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
import SettingsContentData from '../components/SettingsContentData'

export default function SettingsScreen() {

    const contentData =[
        {id: '1', name: 'Language', sign: '>'},
        {id: '2', name: 'My Profile', sign: '>'},
        {id: '3', name: 'Contact Us', sign: '>'},
        {id: '4', name: 'Change Password', sign: '>'},
        {id: '5', name: 'Private Policy', sign: '>'},
    ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: hp('4%'), fontWeight: '500'}}>Settings</Text>
      </View>
      <View style={styles.midText}>
        <FlatList 
            data={contentData}
            renderItem={({ item }) =>(
                <SettingsContentData 
                contentName={item.name}
                sign={item.sign}
                />
            )}
            keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.theme}>
        <Text style={{fontSize: hp('3.5%'), fontWeight: 'bold'}}>Theme</Text>
        <Switch />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{height: hp('100%'),
        width: wp('100%'),
        paddingTop: hp('5%'),
        paddingBottom: hp('5%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%')
    },

    header:{
        marginTop: hp('3%'),
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    midText:{
        marginTop: hp('6%')
    }, 

    theme:{
        marginTop: hp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})