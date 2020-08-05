import React from 'react'
import LinkFireWidget from './LinkFireWidget'

import './../../assets/scss/index.scss'

export default function AfunjaInstSingle() {
    return (
        <div className="widget">
            <LinkFireWidget
            data-lnk-widget
            src="https://lnk.to/afunja_inst/widget?view=clickthroughwidget?view=clickthrough" 
            // id="AfunjaInst"
            height="300px" 
            width="300px" 
            />
        </div>
    )
}