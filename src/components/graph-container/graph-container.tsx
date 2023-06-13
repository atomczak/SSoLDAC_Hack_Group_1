import React, {useRef} from 'react'
import styled from "@emotion/styled";
import {FC} from 'react'
import {Box} from "@mui/material";
import CytoscapeComponent from "react-cytoscapejs";
import {canvasStyling, graphLayoutConfiguration} from "./graph-config";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";
import dblclick from "cytoscape-dblclick";
import cxtmenu from "cytoscape-cxtmenu";


Cytoscape.use(COSEBilkent);
Cytoscape.use(dblclick);
Cytoscape.use(cxtmenu);

interface GraphContainerProps {
    sample ?: string
}

const GraphContainerBox = styled(Box)`
    width: 70%;
    height: 100%;
`

const GraphContainer:FC<GraphContainerProps> = () => {

    const cytoscapeCanvasRef = useRef<Cytoscape.Core | null>(null);
  return (
    <GraphContainerBox>
        <CytoscapeComponent
            elements={[]}
            style={canvasStyling}
            layout={graphLayoutConfiguration}
            wheelSensitivity={0.05}
            cy={(cy) => {
                cy.ready((_) => {
                    cytoscapeCanvasRef.current = cy;
                });
                // cy.on("tap", onNodeTap);
                // cy.on("zoom", handlePanZoom);
                // cy.on("pan", handlePanZoom);
                // cy.cxtmenu(ctxOptions);
            }}
        />
    </GraphContainerBox>
  )
}

export default GraphContainer