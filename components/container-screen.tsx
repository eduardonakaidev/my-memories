import React, { ReactNode } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

interface ContainerScreenProps {
    children: ReactNode;
  }
export function ContainerScreen({ children }:ContainerScreenProps) {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: "#F5F5F5",  justifyContent: 'center',    padding: 20}}>
      {children}
    </SafeAreaView>
  );
}
