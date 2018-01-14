import { StyleSheet, Platform } from 'react-native';

import { COLORS, FONTS } from '../../assets/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: 0,
      },
    }),
  },

});
