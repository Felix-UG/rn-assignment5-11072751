import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity ,FlatList, ScrollView } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Buttons from '../components/Buttons';
import Transaction from '../components/Transaction';

export default function HomeScreen() {

    const buttons = [
        {id: '1', icon: require('../assets/send.png'), text: 'Sent'},
        {id: '2', icon: require('../assets/receive.png'), text: 'Receive'},
        {id: '3', icon: require('../assets/loan.png'), text: 'loan'},
        {id: '4', icon: require('../assets/topUp.png'), text: 'Topup'}
    ]; 

    const transactionData =[
        {id: '1', logo: require('../assets/apple.png'), name: 'Apple Store', purpose: 'Entertament', price: '-$5,99'},
        {id: '2', logo: require('../assets/spotify.png'), name: 'Spotify', purpose: 'Music', price: '-$12,99'},
        {id: '3', logo: require('../assets/moneyTransfer.png'), name: 'Money Transfer', purpose: 'Transaction', price: '$300'},
        {id: '4', logo: require('../assets/grocery.png'), name: 'Grocery', purpose: 'Entertament', price: '-$88'},
        {id: '5', logo: require('../assets/apple.png'), name: 'Apple Store', purpose: 'Entertament', price: '-$5,99'},
    ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
            <View style={styles.profilePic}>
                <Image source={require('../assets/profile.png')}/>
            </View>
            <View style={styles.message}>
                <Text style={styles.message1}>Welcome back,</Text>
                <Text style={styles.message2}>Felix Donkor</Text>
            </View>
        </View>
        <View style={styles.search}>
            <Image source={require('../assets/search.png')}/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.midContent}>
        <View style={styles.activeCard}>
            <Image source={require('../assets/Card.png')} style={{width: wp('90%')}} resizeMode='contain'/>
        </View>
        <View style={styles.buttonRow}>
            {buttons.map(button => (
                <Buttons 
                    key={button.id}
                    buttonIcon={button.icon}
                    buttonText={button.text}
                />
            ))}
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.title}>
            <Text style={{fontSize: hp('3%'), fontWeight: 'bold'}}>Transaction</Text>
            <TouchableOpacity>
            <Text style={{fontSize: hp('2.5%'), fontWeight: 'bold',color: '#0000FF'}}>Sell All</Text>
            </TouchableOpacity>            
        </View>
        <FlatList 
            data={transactionData}
            renderItem={({ item }) =>(
                <Transaction 
                companyLogo={item.logo}
                companyName={item.name}
                purpose={item.purpose}
                price={item.price}
                />                
            )}
            keyExtractor={item => item.id}
        />
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: hp('100%'),
        width: wp('100%'),
        paddingTop: hp('5%'),
        paddingBottom: hp('5%'),
        paddingLeft: wp('5%'),
        paddingRight: wp('5%')
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    profile:{
        flexDirection: 'row',
    }, 

    profilePic:{
        alignSelf: 'center'
    },

    message:{
        marginLeft: wp('5%'),
        width: wp('50%'),
    },

    message1:{
        fontSize: hp('2.5%'),
        paddingTop: hp('1%'),
        color: '#808080'
    },

    message2:{
        fontSize: hp('3.5%'), 
        paddingTop: hp('1%'),
        fontWeight: 'bold',
    },

    search: {
        backgroundColor: '#D3D3D3',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    midContent: {
        width: wp('90%'),
        marginTop: hp('5%'),
    },

    buttonRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },

    transactions:{
        marginTop: hp('4%'),
    },

    title:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    

})