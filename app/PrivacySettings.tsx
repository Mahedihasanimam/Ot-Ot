import BackButton from '@/components/util/BackButton'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const PrivacySettings = () => {
    return (
        <ScrollView>
            <BackButton title="Privacy Settings" />
            <Text>PrivacySettings</Text>
        </ScrollView>
    )
}

export default PrivacySettings