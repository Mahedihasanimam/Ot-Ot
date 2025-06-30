import Button from '@/components/util/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '@react-navigation/native';
import * as Calendar from 'expo-calendar';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Calendar as CalendarUI, DateObject } from 'react-native-calendars';
import tw from 'twrnc';

interface UpcomingPost {
    id: number;
    time: string;
    content: string;
    selected: boolean;
}

const Schedule: React.FC = () => {
    const { dark, colors } = useTheme();
    const [selectedDate, setSelectedDate] = useState<string>('2025-08-17');
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
    const [frequency, setFrequency] = useState<'Daily' | 'Weekly' | 'Custom'>('Daily');
    const [bestTime, setBestTime] = useState<Date>(new Date());

    // Set best time to 2:30 PM by default
    useEffect(() => {
        const newTime = new Date();
        newTime.setHours(14, 30, 0);
        setBestTime(newTime);
    }, []);

    const [upcomingPosts, setUpcomingPosts] = useState<UpcomingPost[]>([
        {
            id: 1,
            time: 'Today, 3:00 PM',
            content: 'New product launch announcement #productlaunch',
            selected: false
        },
        {
            id: 2,
            time: 'Tomorrow, 3:00 PM',
            content: 'Weekly tips and tricks for social media marketing.',
            selected: false
        },
        {
            id: 3,
            time: 'Tomorrow, 3:00 PM',
            content: 'Weekly tips and tricks for social media marketing.',
            selected: false
        }
    ]);

    // Request calendar permission
    useEffect(() => {
        const getCalendarPermission = async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Calendar permission is required to proceed.');
            }
        };
        getCalendarPermission();
    }, []);

    const handleTimeChange = (
        event: any,
        selectedTime: Date | undefined
    ) => {
        setShowTimePicker(false);
        if (selectedTime) {
            setBestTime(selectedTime);
        }
    };

    const togglePostSelection = (id: number) => {
        setUpcomingPosts(upcomingPosts.map(post =>
            post.id === id ? { ...post, selected: !post.selected } : post
        ));
    };

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const formatDisplayDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    const renderDayComponent = ({ date, state }: { date: DateObject; state: string }) => {
        const isSelected = selectedDate === date.dateString;
        return (
            <TouchableOpacity
                onPress={() => setSelectedDate(date.dateString)}
                style={tw.style(
                    'w-10 h-10 justify-center items-center bg-transparent',
                    isSelected ? 'bg-[#007BFF] rounded-full' : 'bg-[#F6F6F6] rounded-full'
                )}
            >
                <Text
                    style={tw.style(
                        'text-sm',
                        isSelected
                            ? 'text-white'
                            : state === 'disabled'
                                ? 'text-gray-400'
                                : dark ? 'text-[#1D1B20]' : 'text-black'
                    )}
                >
                    {date.day}
                </Text>
            </TouchableOpacity>
        );
    };

    const calendarTheme = {
        backgroundColor: dark ? '#1E1E1E' : '#F6F6F6',
        calendarBackground: dark ? '#1E1E1E' : '#F6F6F6',
        textSectionTitleColor: dark ? '#A0A0A0' : '#888888',
        selectedDayBackgroundColor: '#007BFF',
        selectedDayTextColor: '#FFFFFF',
        todayTextColor: '#007BFF',
        dayTextColor: dark ? '#FFFFFF' : '#2D4150',
        textDisabledColor: dark ? '#555555' : '#DDDDDD',
        arrowColor: dark ? '#FFFFFF' : '#007BFF',
        monthTextColor: dark ? '#FFFFFF' : '#2D4150',
        indicatorColor: dark ? '#FFFFFF' : '#007BFF',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 14,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 14
    };

    return (
        <ScrollView style={tw`p-4 ${dark ? 'bg-[#1E1E1E]' : 'bg-white'}`}>
            <Button
                label="Social Media Schedule"
                onPress={() => { }}
                buttonStyle='bg-primary py-4  rounded-full mx-4'
                textStyle='text-white text-center text-[18px] font-semibold'
            />

            {/* Header */}
            <View style={tw`border-b ${dark ? 'border-[#444]' : 'border-[#da6464]'} ${dark ? 'bg-[#2D2D2D]' : 'bg-[#F6F6F6]'} p-4 rounded-t-[30px] mt-4`}>
                <Text style={tw`text-lg font-medium mt-1 ${dark ? 'text-white' : 'text-[#1D1B20]'} text-[24px]`}>
                    {formatDisplayDate(selectedDate)}
                </Text>
            </View>

            {/* Calendar */}
            <View style={tw`p-4 ${dark ? 'bg-[#2D2D2D]' : 'bg-[#F6F6F6]'} rounded-b-[30px]`}>
                <CalendarUI
                    style={tw`${dark ? 'bg-[#2D2D2D] text-[#1D1B20]' : 'bg-[#F6F6F6]'} rounded-[30px]`}
                    current={selectedDate}
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: '#007BFF' },
                    }}
                    theme={calendarTheme}
                    dayComponent={renderDayComponent}
                />
            </View>

            <View style={tw`my-4`} />

            {/* Posting Frequency */}
            <View style={tw`mb-6 ${dark ? 'bg-[#2D2D2D]' : 'bg-white'} p-4 rounded-lg shadow-md`}>
                <Text style={tw`text-lg font-bold mb-3 ${dark ? 'text-white' : 'text-[#1D1B20]'}`}>Posting Frequency</Text>

                <View style={tw`flex-row justify-between mb-4`}>
                    {(['Daily', 'Weekly', 'Custom'] as const).map((option) => (
                        <TouchableOpacity
                            key={option}
                            onPress={() => setFrequency(option)}
                            style={tw.style(
                                'px-8 py-3 rounded-full',
                                frequency === option
                                    ? 'bg-blue-500'
                                    : dark
                                        ? 'bg-[#3D3D3D]'
                                        : 'bg-gray-100'
                            )}
                        >
                            <Text style={tw.style(
                                'font-medium',
                                frequency === option
                                    ? 'text-white'
                                    : dark
                                        ? 'text-white'
                                        : 'text-gray-800'
                            )}>
                                {option}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={tw`flex-row items-center`}>
                    <Text style={tw`font-medium ${dark ? 'text-white' : 'text-[#1D1B20]'} text-[16px] mr-2`}>Best time:</Text>
                    <TouchableOpacity
                        onPress={() => frequency === 'Custom' && setShowTimePicker(true)}
                        style={tw.style(
                            'px-8 py-3 rounded-full',
                            frequency === 'Custom'
                                ? 'bg-[#007BFF]'
                                : dark
                                    ? 'bg-[#3D3D3D]'
                                    : 'bg-gray-100',
                            frequency !== 'Custom' && 'opacity-50'
                        )}
                        disabled={frequency !== 'Custom'}
                    >
                        <Text style={tw.style(
                            frequency === 'Custom'
                                ? 'text-white'
                                : dark
                                    ? 'text-white'
                                    : 'text-gray-800'
                        )}>
                            {formatTime(bestTime)}
                        </Text>
                    </TouchableOpacity>
                </View>

                {showTimePicker && (
                    <DateTimePicker
                        value={bestTime}
                        mode="time"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleTimeChange}
                        themeVariant={dark ? 'dark' : 'light'}
                    />
                )}
            </View>

            {/* Upcoming Posts */}
            <View style={tw`mb-4`}>
                <Text style={tw`text-lg font-bold mb-3 ${dark ? 'text-white' : 'text-[#1D1B20]'}`}>Upcoming posts</Text>

                {upcomingPosts.map((post) => (
                    <TouchableOpacity
                        key={post.id}
                        onPress={() => togglePostSelection(post.id)}
                        style={tw.style(
                            `p-3 mb-3 border rounded-lg`,
                            post.selected
                                ? dark
                                    ? 'border-blue-400 bg-[#2C3E50]'
                                    : 'border-blue-500 bg-blue-50'
                                : dark
                                    ? 'border-gray-700 bg-[#3D3D3D]'
                                    : 'border-gray-200 bg-white'
                        )}
                    >
                        <Text style={tw.style(`text-sm`, dark ? 'text-gray-300' : 'text-[#888888]')}>
                            {post.time}
                        </Text>
                        <Text style={tw.style(`mt-1 text-[16px]`, dark ? 'text-white' : 'text-black')}>
                            {post.content}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Schedule;