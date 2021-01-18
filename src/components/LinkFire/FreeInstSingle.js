import React from 'react'
import LinkFireWidget from './LinkFireWidget'

import './../../assets/scss/index.scss'

export default function FreeInstSingle() {
    return (
        <div className="widget">
            <LinkFireWidget
            data-lnk-widget
            src="https://lnk.to/afunja_free_instrumental/widget?view=clickthroughwidget?view=clickthrough" 
            id="FreeInst"
            height="300px" 
            width="100%" 
            />
        </div>
    )
}