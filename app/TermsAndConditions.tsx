import BackButton from '@/components/util/BackButton'
import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const TermsAndConditions = () => {
    return (
        <ScrollView>
            <BackButton title="Terms And Conditions" />
            <Text>TermsAndConditions</Text>
        </ScrollView>
    )
}

export default TermsAndConditions