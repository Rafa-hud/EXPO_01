import React from 'react'
import { useUsers } from '@/hooks/useUsers'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { red } from 'react-native-reanimated/lib/typescript/Colors'
import { User } from '@/types/User'
import { FlatList } from 'react-native-gesture-handler'


const UserListScreen = () => {

    const { users, loading, error } = useUsers();
    if (loading) {
        return <ActivityIndicator size='large' color='red' />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    const erenderItem = ({ item }: { item: User }) => (
        <View>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
        </View>

    )



    return (
        <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={erenderItem}
        />
    )
}

export default UserListScreen