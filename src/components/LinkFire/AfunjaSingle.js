import React from 'react'
import LinkFireWidget from './LinkFireWidget'

import './../../assets/scss/index.scss'

export default function AfunjaSingle() {
    return (
        <div className="widget">
            <LinkFireWidget
            data-lnk-widget
            src="https://lnk.to/afunja/widget?view=clickthroughwidget?view=clickthrough" 
            // id="Afunja" 
            height="300px" 
            width="300px" 
            />
        </div>
    )
}