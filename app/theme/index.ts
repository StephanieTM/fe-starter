import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      200: '#68d391',
      500: '#2f855a',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: `Rubik, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      },
    },
  },
});
