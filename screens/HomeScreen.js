import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

// "navigation" is already included in props.
export default HomeScreen = ({ navigation }) => {
    // First item is a state, and the second item is a function that updates the state. The argument of useState() is the initial state.
    const [articles, setArticles] = useState([]);
    // By setting the second argument as [], the first argument, which is a function, is called only when the view is rendered for the first time.
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(URL);
            // The argument is a new state.
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        // SafeAreaView creates a padding surrounding the view.
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                // renderItem is a function
                renderItem={({ item }) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress={() =>
                            navigation.navigate('Article', { article: item })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};
