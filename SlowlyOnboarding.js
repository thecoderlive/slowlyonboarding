import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'


const SlowlyOnboarding = () => (
<ScrollView style={styles.slowly_onboarding} showsVerticalScrollIndicator={false}>
<Image
    style={styles.onboarding_image}
    source={{uri: item.onboarding_image}}
    />
<Text style={styles.notification_title}>{item.notification_title}</Text>
<Text style={styles.about_notification}>{item.about_notification}</Text>
</ScrollView>
)

export default SlowlyOnboarding;

const styles = StyleSheet.create({
    'onboarding_image': {
        'width': '40vw',
        'height': '40vw',
        'alignSelf': 'center',
        'marginTop': 100
    },
    'notification_title': {
        'color': '#090606',
        'fontSize': 26,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center',
        'marginTop': 40
    },
    'about_notification': {
        'fontSize': 13,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center',
        'textAlign': 'center'
    }
});