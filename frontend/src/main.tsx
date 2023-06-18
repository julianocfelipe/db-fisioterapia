import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
  RouterProvider,
} from "react-router-dom";
import router from './modules/router/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
        <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
