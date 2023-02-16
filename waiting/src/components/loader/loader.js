import React from 'react'

import "./loader.css"

export const Loader = () => {
    return (
        <div class="preload">
            <div class="loader-frame">
                <div class="loader1" id="loader1">      </div>
                <div class="wrapper ">
                    <div class="leftHalf"></div>
                    <div class="spinner"></div>
                    <div class="rightHalf"></div>
                </div>
            </div>
        </div>
    )
}
