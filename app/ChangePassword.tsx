import BackButton from '@/components/util/BackButton'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const ChangePassword = () => {
    return (
        <ScrollView>
            <BackButton title="Change Password" />
            <Text>ChangePassword</Text>
        </ScrollView>
    )
}

export default ChangePassword