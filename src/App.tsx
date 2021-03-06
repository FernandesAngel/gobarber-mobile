import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar, Text } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Text>Caramba do Karambeto</Text>
      <Text>Caramba do Karambeto</Text>
      <Text>Caramba do Karambeto</Text>
    </View>
  </>
);

export default App;
