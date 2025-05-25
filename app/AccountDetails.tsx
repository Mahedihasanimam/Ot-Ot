import BackButton from '@/components/util/BackButton'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const AccountDetails = () => {
    return (
        <ScrollView>
            <BackButton title="Account Details" />
            <Text>AccountDetails</Text>
        </ScrollView>
    )
}

export default AccountDetails