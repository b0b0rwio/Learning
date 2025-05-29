import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import { useSelector } from 'react-redux';
// import { selectAuth } from '../../selectors/AuthSelector';


import Icon from '@expo/vector-icons/Ionicons';



const { width } = Dimensions.get('window'); // For responsive layout calculations

const Home = () => {
  // const navigation = useNavigation();

 
  // const { roles } = useSelector(selectAuth);
  // const role = roles[0]; // This would be undefined if Redux is removed

  const menuItems = [
    // Note: Icon names are changed to common Ionicons equivalents
    { name: 'Announcements', icon: 'megaphone', screen: 'Announcements' },
    { name: 'Gallery', icon: 'image', screen: 'Gallery' },
    { name: 'Parent Queries', icon: 'chatbubbles', screen: 'Messages' },
    { name: 'Academic', icon: 'school', screen: 'Academic' },
    { name: 'Sports', icon: 'football', screen: 'Sports' },
    { name: 'Personality Dev', icon: 'bulb', screen: 'PersonalityDev' },
    { name: 'Extracurricular', icon: 'color-palette', screen: 'Extracurricular' },
    { name: 'Students', icon: 'people', screen: 'Students' },
    { name: 'Staffs', icon: 'briefcase', screen: 'Staffs' },
    { name: 'Student Profile', icon: 'person', screen: 'StudentProfile' },
    { name: 'Staff Profile', icon: 'person-circle', screen: 'StaffProfile' },
    { name: 'Contact Us', icon: 'call', screen: 'ContactUs' },
  ];

  
  // const filteredMenuItems = menuItems.filter(item => item.allowedRoles.includes(role));

  // const handleMenuPress = (screen) => {
  //   navigation.navigate(screen);
  // };

  const renderMenuItem = (item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.menuItem}
      // onPress={() => handleMenuPress(item.screen)}
      activeOpacity={0.7} 
    >
      <View style={styles.iconContainer}>
        {/* The 'as any' is a common TypeScript workaround for icon name strings */}
        <Icon name={item.icon} size={35} color="#3f51b5" />
      </View>
      <Text style={styles.menuText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Menu</Text>
        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => renderMenuItem(item, index))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light background
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  menuGrid: {
    flexDirection: 'row', // Arrange items in a row
    flexWrap: 'wrap',     // Allow items to wrap to the next line
    justifyContent: 'space-around', // Distribute items evenly with space around them
    alignItems: 'flex-start', // Align items to the start of the cross axis
  },
  menuItem: {
    width: (width - 150) / 2, // Calculate width for 3 items per row, accounting for padding
    aspectRatio: 1, // Makes the item square
    backgroundColor: '#fff',
    borderRadius: 60, // Makes it circular
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // Shadows for Android (elevation) and iOS (shadow properties)
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  iconContainer: {
    marginBottom: 8,
  },
  menuText: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: 4,
    lineHeight: 13, // Adjust line height for better multi-line text display if needed
  },
});

export default Home;