import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, FlatList, Image } from 'react-native';

const youngWoman = require('./img/youngwoman workingatdesk.png');
const yogaWoman = require('./img/young woman working online.png');
const codingPicture = require('./img/coding.jpg');
const cookingPicture = require('./img/cooking.jpg');
const readingPicture = require('./img/reading.png');
const cleaningPicture = require('./img/cleaning.jpg');
const shoppingPicture = require('./img/shopping.png');
const relaxingPicture = require('./img/relaxing.jpg');

// Sample data
const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: yogaWoman },
  { id: '2', name: 'Study', tasks: 12, image: youngWoman },
  { id: '3', name: 'Code', tasks: 15, image: codingPicture },
  { id: '4', name: 'Cook', tasks: 8, image: cookingPicture },
  { id: '5', name: 'Read', tasks: 5, image: readingPicture },
  { id: '6', name: 'Clean', tasks: 3, image: cleaningPicture},
  { id: '7', name: 'Shop', tasks: 10, image: shoppingPicture },
  { id: '8', name: 'Relax', tasks: 7, image: relaxingPicture },
];

const taskNames = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Cook dinner',
  'Study React Native',
  'Complete project report',
  'Clean the house',
  'Do the laundry',
  'Buy groceries',
  'Watch a movie',
  'Practice coding',
  'Call a friend',
  'Meditate',
  'Plan the week',
  'Exercise'
];

const tasks = taskNames.map((name, index) => ({
  id: String(index + 1),
  name,
}));

const profileImage = require('./img/person.png');
const filterIcon = require('./img/Filter.png');
const searchIcon = require('./img/Vector.png');

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>14 tasks today</Text>
        </View>
        <Image style={styles.profileImage} source={profileImage} />
      </View>
      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image style={styles.filterIcon} source={filterIcon} />
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.categoryCard}>
            <Image style={styles.categoryImage} source={item.image} />
            <Text>{item.name}</Text>
            <Text>{item.tasks} Tasks</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoriesContainer}
      />
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f0e8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: '#666',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoriesContainer: {
    paddingBottom: 10,
  },
  categoryCard: {
    width: 140,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  taskCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default App;
