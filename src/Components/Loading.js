import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function Loading({visible}) {
 return (
    <>
    <ActivityIndicator size='large' color='grey' animating={true} />
    </>

  );
}
