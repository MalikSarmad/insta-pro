import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

import Home from './screens/Home'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#000'/>
      <Home />
    </SafeAreaView>
  )
}

export default App