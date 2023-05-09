import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [isConnected, setIsConnected] = useState(true);

  const handleConnectivityChange = ({ isConnected }) => {
    setIsConnected(isConnected);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {isConnected ? (
        <WebView
          source={{ uri: 'https://stars-web-52055.web.app' }}
          style={styles.webview}
          javaScriptEnabled={true}
          originWhitelist={['*']}
          mixedContentMode="always"
        />
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>No internet connection</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
  },
});
