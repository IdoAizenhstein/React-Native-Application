import {NativeModules, Platform} from 'react-native'const {RNOpenCvLibrary, NativeModuleEx} = NativeModulesexport default Platform.OS === 'ios' ? NativeModuleEx : RNOpenCvLibrary