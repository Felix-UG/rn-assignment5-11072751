import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const SettingsContentData = ({contentName, sign}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={{fontSize: hp('3%'), fontWeight: '500'}}>{contentName}</Text>
        <Text style={{fontSize: hp('5%'), color: '#808080'}}>{sign}</Text>
    </TouchableOpacity>
  )
}

export default SettingsContentData

const styles = StyleSheet.create({
  container:{
    marginTop: hp('2%'),
    // backgroundColor: '#f0f0ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp('9%'),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D5D5D5'

  }
})