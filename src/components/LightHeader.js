import React from 'react'
import { AddCircleOutlineTwoTone as Add , RemoveCircleOutlineTwoTone as Remove } from '@material-ui/icons';

import IconButton from '@material-ui/core/IconButton';

export default function LightHeader(props) {
    return (
        <div>
            <h1>Lights</h1>
            <IconButton><Add onClick={props.addLight}/></IconButton>
            <IconButton><Remove onClick={props.removeLastLight}/></IconButton>
        </div>
    )
}
