import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import  Header from '../components/Header';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <View>
    <Header/>
    <Card style={styles.cardStyle}>
      <Card.Title title="Narendra Test" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">App component NK</Text>
        <Text variant="bodyMedium">A component to display action items in a bar. 
          It can be placed at the top or bottom. 
          The top bar usually contains the screen title, controls such as navigation buttons, 
          menu button etc. The bottom bar usually provides access to a drawer and up to four actions.
         </Text>
      </Card.Content>
      <Card.Cover style={styles.cardCoverStyle} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  cardStyle: {
    // padding:10,
    // margin: 5
  },
  cardCoverStyle: {
    // padding:10,
    margin: 10
  }
});
export default MyComponent;