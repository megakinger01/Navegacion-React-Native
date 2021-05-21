import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const SettingsScreen = () => {
    return (
        <View style={styles.globalStyle}>
            <Text style={styles.title}>
                Settings Screen
            </Text>
        </View>
    )
}
