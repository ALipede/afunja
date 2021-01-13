import React from 'react'
import LinkFireWidget from './LinkFireWidget'

import './../../assets/scss/index.scss'

export default function FreeSingle() {
    return (
        <div className="widget">
            <LinkFireWidget
            data-lnk-widget
            src="https://lnk.to/afunja_free/widget?view=clickthroughwidget?view=clickthrough" 
            // id="Free" 
            height="300px" 
            width="100%" 
            />
        </div>
    )
}