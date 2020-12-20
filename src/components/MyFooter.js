import React from 'react'

const  MyFooter=() => {
    const getFooterContent = () => {
        return <div className='common-footer-style'>
            <ul>
                <li>
                    <h2>Left Footer Links</h2>
                </li>
                <li>
                    <p>Left Footer Link ONE</p>
                </li>
                <li>
                    <p>Left Footer Link TWO</p>
                </li>
            </ul>
            
        </div>
    }
    return (
        <div>

            {getFooterContent()}
            {getFooterContent()}
        </div>
    )
}

export default MyFooter
