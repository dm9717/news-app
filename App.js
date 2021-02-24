import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        width: 100,
    },
    rightContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 12,
        color: 'gray',
    },
});

export default function App() {
    // "map" function creates a new array, using each element of the orignal array called upon.
    const items = articles.map((article, index) => {
        return (
            <ListItem
                imageUrl={article.urlToImage}
                title={article.title}
                author={article.author}
                key={index}
            />
        );
    });
    return (
        <View style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                    />
                )}
            />
        </View>
    );
}
