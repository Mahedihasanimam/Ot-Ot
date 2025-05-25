import BackButton from '@/components/util/BackButton'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const NotificationPreferences = () => {
    return (
        <ScrollView>
            <BackButton title="Notification Preferences" />
            <Text>NotificationPreferences</Text>
        </ScrollView>
    )
}

export default NotificationPreferences