import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {

    const { signIn, authState } = useContext(AuthContext)

    const  { isLoggedIn } = authState

    return (
        <View style={styles.globalStyle}>
            <Text style={styles.title}>
                Contacts Screen
            </Text>

            {
                !isLoggedIn &&
               ( 
                    <Button
                        title='Sign In'
                        onPress={signIn}
                    />
                )
            }
 
        </View>
    )
}
