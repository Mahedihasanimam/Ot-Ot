import Button from '@/components/util/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
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
        event: Event,
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
                    'w-10 h-10 justify-center items-center bg-[#F6F6F6] ',
                    isSelected ? 'bg-[#007BFF] rounded-full' : 'bg-[#F6F6F6]'
                )}
            >
                <Text
                    style={tw.style(
                        'text-sm',
                        isSelected
                            ? 'text-white'
                            : state === 'disabled'
                                ? 'text-gray-400'
                                : 'text-black'
                    )}
                >
                    {date.day}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={tw`p-4 bg-white`}>
            <Button
                label="Social Media Schedule"
                onPress={() => { }}
                buttonStyle='bg-primary py-4 mt-8 rounded-full mx-4'
                textStyle='text-white text-center text-[18px] font-semibold'
            />

            {/* Header */}
            <View style={tw`border-b border-[#D9D9D9] bg-[#F6F6F6] p-4 rounded-t-[30px] mt-4`}>
                <Text style={tw`text-lg font-medium mt-1 text-[#1D1B20] text-[24px]`}>
                    {formatDisplayDate(selectedDate)}
                </Text>
            </View>

            {/* Real Calendar */}
            <View style={tw`p-4 bg-[#F6F6F6] rounded-b-[30px]`}>
                <CalendarUI
                    style={tw`bg-[#F6F6F6]`}
                    current={selectedDate}
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: '#007BFF' },
                    }}
                    theme={{
                        backgroundColor: '#F6F6F6',
                        calendarBackground: '#F6F6F6',
                        textSectionTitleColor: '#333',
                        selectedDayTextColor: '#fff',
                        todayTextColor: 'red',
                        arrowColor: 'blue',
                        textDayFontWeight: '500',
                        textMonthFontWeight: 'bold',
                    }}
                    dayComponent={renderDayComponent}
                />
            </View>

            <View style={tw`my-4`} />

            {/* Posting Frequency */}
            <View style={tw`mb-6 bg-white p-4 rounded-lg shadow-md`}>
                <Text style={tw`text-lg font-bold mb-3`}>Posting Frequency</Text>

                <View style={tw`flex-row justify-between mb-4`}>
                    {(['Daily', 'Weekly', 'Custom'] as const).map((option) => (
                        <TouchableOpacity
                            key={option}
                            onPress={() => setFrequency(option)}
                            style={tw.style(
                                'px-8 py-3 rounded-full',
                                frequency === option ? 'bg-blue-500' : 'bg-gray-100'
                            )}
                        >
                            <Text style={tw.style(
                                'font-medium',
                                frequency === option ? 'text-white' : 'text-gray-800'
                            )}>
                                {option}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={tw`flex-row items-center`}>
                    <Text style={tw`font-medium text-[#1D1B20] text-[16px] mr-2`}>Best time:</Text>
                    <TouchableOpacity
                        onPress={() => frequency === 'Custom' && setShowTimePicker(true)}
                        style={tw.style(
                            'bg-[#007BFF] px-8 py-3 rounded-full',
                            frequency !== 'Custom' && 'opacity-50'
                        )}
                        disabled={frequency !== 'Custom'}
                    >
                        <Text style={tw`text-white`}>{formatTime(bestTime)}</Text>
                    </TouchableOpacity>
                </View>

                {showTimePicker && (
                    <DateTimePicker
                        value={bestTime}
                        mode="time"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={handleTimeChange}
                    />
                )}
            </View>

            <View style={tw``} />

            {/* Upcoming Posts */}
            <View style={tw`mb-4`}>
                <Text style={tw`text-lg font-bold mb-3`}>Upcoming posts</Text>

                {upcomingPosts.map((post) => (
                    <TouchableOpacity
                        key={post.id}
                        onPress={() => togglePostSelection(post.id)}
                        style={tw.style(
                            'p-3 mb-3 border rounded-lg',
                            post.selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                        )}
                    >
                        <Text style={tw`text-[#888888] text-sm`}>{post.time}</Text>
                        <Text style={tw`mt-1 text-[#000000] text-[16px]`}>{post.content}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Schedule;