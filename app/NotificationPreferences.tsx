import BackButton from '@/components/util/BackButton'
import Button from '@/components/util/Button'
import { Ionicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc'

interface NotificationPreferencesProps { }

interface NotificationState {
    general: boolean
    scheduledPostReminder: boolean
    engagementAlerts: boolean
    message: boolean
    appUpdates: boolean
}

interface TimePickerProps {
    label: string
    time: Date
    onPress: () => void
}

interface NotificationToggleProps {
    label: string
    value: boolean
    onToggle: () => void
    disabled?: boolean
    icon?: React.ReactNode
}

const NotificationPreferences: React.FC<NotificationPreferencesProps> = () => {
    const { dark, colors } = useTheme()
    const [notifications, setNotifications] = useState<NotificationState>({
        general: true,
        scheduledPostReminder: true,
        engagementAlerts: true,
        message: true,
        appUpdates: true,
    })
    const [quietHours, setQuietHours] = useState<boolean>(false)
    const [showFromPicker, setShowFromPicker] = useState<boolean>(false)
    const [showToPicker, setShowToPicker] = useState<boolean>(false)
    const [quietHoursFrom, setQuietHoursFrom] = useState<Date>(new Date(0, 0, 0, 18, 0))
    const [quietHoursTo, setQuietHoursTo] = useState<Date>(new Date(0, 0, 0, 21, 0))
    const [showFrequencyDropdown, setShowFrequencyDropdown] = useState<boolean>(false)
    const [selectedFrequency, setSelectedFrequency] = useState<string>('Immediately')

    const frequencies: string[] = ['Immediately', 'Every 15 minutes', 'Hourly', 'Daily']

    const toggleNotification = (key: keyof NotificationState): void => {
        setNotifications({ ...notifications, [key]: !notifications[key] })
    }

    const toggleQuietHours = (): void => {
        setQuietHours(!quietHours)
    }

    const handleFromTimeChange = (event: any, selectedDate?: Date): void => {
        setShowFromPicker(false)
        if (selectedDate) {
            setQuietHoursFrom(selectedDate)
        }
    }

    const handleToTimeChange = (event: any, selectedDate?: Date): void => {
        setShowToPicker(false)
        if (selectedDate) {
            setQuietHoursTo(selectedDate)
        }
    }

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
    }


    const handleSubmit = () => {

        Alert.alert('Success', 'Notification preferences updated successfully!');
    }
    return (
        <ScrollView style={tw`flex-1 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'} `}>
            <BackButton title="Notification Preferences" />

            {/* Notification Toggles */}
            <View style={tw`${dark ? 'bg-[#1E1E1E]' : 'bg-white'} rounded-xl  p-4 shadow-md shadow-black/10`}>
                <NotificationToggle
                    icon={<Image
                        source={require('@/assets/images/notificationblue.png')}

                    />}
                    label="General Notification"
                    value={notifications.general}
                    onToggle={() => toggleNotification('general')}
                />
                <NotificationToggle
                    icon={
                        <Image
                            source={require('@/assets/images/calender.png')}

                        />
                    }
                    label="Scheduled Post Reminder"
                    value={notifications.scheduledPostReminder}
                    onToggle={() => toggleNotification('scheduledPostReminder')}
                />
                <NotificationToggle
                    icon={<Image
                        source={require('@/assets/images/engageblue.png')}

                    />}
                    label="Engagement Alerts"
                    value={notifications.engagementAlerts}
                    onToggle={() => toggleNotification('engagementAlerts')}
                />
                <NotificationToggle
                    icon={<Image
                        source={require('@/assets/images/message.png')}

                    />}
                    label="Message Notification"
                    value={notifications.message}
                    onToggle={() => toggleNotification('message')}
                />
                <NotificationToggle
                    icon={<Image
                        source={require('@/assets/images/pin.png')}

                    />}
                    label="Important App Updates"
                    value={notifications.appUpdates}
                    onToggle={() => toggleNotification('appUpdates')}
                />
            </View>

            {/* Notification Frequency Dropdown */}
            <View style={tw`${dark ? 'bg-[#1E1E1E]' : 'bg-white'} rounded-xl p-4 mt-4 shadow-md shadow-black/10`}>
                <Text style={tw` text-[18px] font-medium ${dark ? 'text-white' : 'text-[#000000]'} `}>Notification Frequency</Text>
                <TouchableOpacity
                    style={tw`flex-row justify-between items-center py-3 border border-[#00000033]  rounded-full mt-2 p-4 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'} `}
                    onPress={() => setShowFrequencyDropdown(!showFrequencyDropdown)}
                >
                    <Text style={tw`text-[16px] font-normal ${dark ? 'text-white' : 'text-[#000000]'}`}>
                        {selectedFrequency}
                    </Text>
                    <Ionicons
                        name={showFrequencyDropdown ? 'chevron-up' : 'chevron-down'}
                        size={20}
                        color={dark ? 'white' : 'black'}
                    />
                </TouchableOpacity>

                {showFrequencyDropdown && (
                    <View style={tw`  rounded-2xl ${dark ? 'bg-[#3D3D3D]' : 'bg-white border border-gray-200'}`}>
                        {frequencies.map((frequency) => (
                            <TouchableOpacity
                                key={frequency}
                                style={tw`flex-row justify-between items-center py-3 px-2`}
                                onPress={() => {
                                    setSelectedFrequency(frequency)
                                    setShowFrequencyDropdown(false)
                                }}
                            >
                                <Text style={tw`text-base ${dark ? 'text-white' : 'text-black'}`}>
                                    {frequency}
                                </Text>
                                {selectedFrequency === frequency && (
                                    <Ionicons name="checkmark" size={20} color="#007AFF" />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>

            {/* Quiet Hours Card */}
            <View style={tw` ${dark ? 'bg-[#3D3D3D]' : 'bg-white border border-[#00000033] mx-4'} rounded-xl p-4 mt-4 shadow-md `}>
                <View style={tw`flex-row justify-between items-center pb-3`}>
                    <Text style={tw`text-[18px] font-medium ${dark ? 'text-white' : 'text-[#000000]'} `}>Quiet Hours</Text>
                    <Switch
                        value={quietHours}
                        onValueChange={toggleQuietHours}
                        thumbColor={quietHours ? '#007AFF' : '#f4f3f4'}
                        trackColor={{ false: '#767577', true: '#007AFF' }}
                    />
                </View>

                {quietHours && (
                    <View>

                        <View style={tw`mt-3`}>

                            <TimePicker
                                label="From"
                                time={quietHoursFrom}
                                onPress={() => setShowFromPicker(true)}
                            />

                        </View>
                        <View style={tw`mt-3`}>
                            <TimePicker
                                label="To"
                                time={quietHoursTo}
                                onPress={() => setShowToPicker(true)}
                            />


                        </View>
                    </View>
                )}
            </View>

            {/* Save Button */}
            <View style={tw`px-4`}>

                <Button
                    buttonStyle="mt-2 bg-[#007BFF] w-full p-5 text-center text-white rounded-full mt-4 "
                    textStyle="text-[#FFFFFF] text-[18px] font-semibold text-center"
                    label="Save"
                    onPress={handleSubmit}
                />
            </View>

            {/* Time Pickers */}
            {showFromPicker && (
                <DateTimePicker
                    value={quietHoursFrom}
                    mode="time"
                    is24Hour={false}
                    display="default"
                    onChange={handleFromTimeChange}
                />
            )}

            {showToPicker && (
                <DateTimePicker
                    value={quietHoursTo}
                    mode="time"
                    is24Hour={false}
                    display="default"
                    onChange={handleToTimeChange}
                />
            )}
        </ScrollView>
    )
}

const NotificationToggle: React.FC<NotificationToggleProps> = ({ label, value, onToggle, icon }) => {
    const { dark } = useTheme();
    return (
        <View style={tw`flex-row justify-between items-center px-4 py-3 border border-[#00000033]  rounded-full mb-2 p-4 ${dark ? 'bg-[#3D3D3D]' : 'bg-white'}`}>
            <View style={tw`flex flex-row items-center`}>
                {icon && <View style={tw`mr-2`}>{icon}</View>}
                <Text style={tw`text-base font-medium ${dark ? 'text-white' : 'text-[#000000]'}`}>{label}</Text>
            </View>
            <Switch
                value={value}
                onValueChange={onToggle}
                thumbColor={value ? '#007AFF' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#007AFF' }}
            />
        </View>
    );
}

const TimePicker: React.FC<TimePickerProps> = ({ label, time, onPress }) => {
    const { dark } = useTheme(); // Add this
    return (
        <View style={tw`flex-row justify-between items-center mb-3 ${dark ? 'bg-[#3D3D3D]' : 'bg-white '}`}>
            <Text style={tw`text-base font-medium ${dark ? 'text-white' : 'text-black'} w-15`}>{label}</Text>
            <TouchableOpacity
                style={tw`${dark ? 'bg-[#3D3D3D]' : 'bg-white'} border border-gray-200 flex-row items-center justify-between py-2 px-4 rounded-lg w-30`}
                onPress={onPress}
            >
                <Text style={tw`text-base ${dark ? 'text-white' : 'text-black'}`}>
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                </Text>
                <Ionicons name="time-outline" size={20} color={dark ? 'white' : 'black'} />
            </TouchableOpacity>
        </View>
    )
}


export default NotificationPreferences