import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';




export const Tab1Screen = () => {

    const { top } =useSafeAreaInsets()

    return (
        <View style={{...styles.globalStyle, marginTop:top}}>
            <Text style={styles.title}>
                Iconos
            </Text>

            <Text>
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="airplane-outline"  />
                <TouchableIcon iconName="airplane-outline"  />
            </Text>
        </View>
    )
}
