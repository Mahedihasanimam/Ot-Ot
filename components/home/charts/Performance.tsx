import React, { useState } from 'react';
import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';
import tw from 'twrnc';

const PerformanceChart = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const screenWidth = Dimensions.get('window').width;

    const chartData = [
        { month: 'Jan', value: 20 },
        { month: 'Feb', value: 35 },
        { month: 'Mar', value: 25 },
        { month: 'Apr', value: 60 },
        { month: 'May', value: 45 },
        { month: 'Jun', value: 30 },
    ];

    const maxValue = Math.max(...chartData.map(item => item.value));
    const maxBarHeight = 180; // Maximum height you want bars to reach (for 100% value)

    return (
        <View style={tw`bg-white rounded-xl p-4 mt-4 shadow-lg shadow-gray-500 mb-6`}>
            <View style={tw`flex-row justify-between items-end h-[${maxBarHeight + 40}px]`}>
                {chartData.map((item, index) => {
                    const barHeight = (item.value / maxValue) * maxBarHeight;
                    const isActive = activeIndex === index;

                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPressIn={() => setActiveIndex(index)}
                            onPressOut={() => setActiveIndex(null)}
                        >
                            <View style={tw`items-center`}>
                                {/* Tooltip showing the header text */}
                                {isActive && (
                                    <View style={tw`absolute -top-18 bg-[#FFFFFF] px-3 py-2 rounded-md w-34 shadow-lg`}>
                                        <View style={tw`flex flex-row items-center justify-between gap-2`}>
                                            <View>
                                                <Text style={tw`text-2xl`}>🙂</Text>
                                            </View>
                                            <View>

                                                <Text style={tw`text-[#000000] text-lg font-semibold`}>2k views</Text>
                                                <Text style={tw`text-[#00000060] text-sm font-medium`}>April, 2025</Text>
                                            </View>
                                        </View>
                                        <View style={tw`absolute -bottom-1 left-4 w-3 h-3 bg-white -ml-1.5 rotate-45`} />
                                    </View>
                                )}

                                {/* Bar with shadow */}
                                <View style={tw`bg-gray-50 h-[200px] justify-end`}>
                                    <View
                                        style={[
                                            tw`w-12 bg-blue-500 rounded-t`, // the bar itself
                                            { height: barHeight },
                                            isActive && tw`bg-blue-600 shadow-blue-600/40`,
                                        ]}
                                    />
                                </View>


                                {/* Month label */}
                                <Text style={tw`text-gray-500 text-xs mt-2`}>{item.month}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </View>
    );
};

export default PerformanceChart;