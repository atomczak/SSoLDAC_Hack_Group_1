import React, { useLayoutEffect, useRef, useState } from 'react'
// import Yasgui from '@triply/yasgui'
// import Yasqe from '@triply/yasqe'
// import Yasr from '@triply/yasr'
import Box from '@mui/material/Box';

// import '@triply/yasgui/build/yasgui.min.css'
// import './QueryWindow.css'

// import { Button, ButtonGroup, Card } from 'react-bootstrap'
//import Highlighter from '../../streams/Highlighter'
// import { useEffect } from 'react'
 import QueryResult from '../queryResult/QueryResult'
//import { API_URL, useRealmApp } from '../../npm install realm-app-importer'



const QueryWindow = () => {
  return (
    <div id="query-window">
        <div>
            {/* <hr>SPARQL Query</hr> */}
                <p>Hello world</p>
            {/* <Box>
            </Box> */}
            <QueryResult/>
        </div>
      
    </div>
  )
}

export {QueryWindow}
