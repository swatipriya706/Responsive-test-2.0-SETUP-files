import React from 'react'
import MyContent from './MyContent'
import Header from './Header'
import '../css/MyContent.css'
import MyCards from './MyCards'
import MyFooter from './MyFooter'
import '../css/MyFooter.css'

const MyContentHeader = () => {
    return (
        <div className='MyBackImageContent'>
            <div className='layer'>
            <Header />

                <div className='layer-internal'>
                    <MyContent />                    
                </div>
            
            </div>
            <div className='cards-style-outer'>
                <MyCards />
            </div>
            <div className='footer-style'>
                <MyFooter />     
            </div>
            {/* <MyFooter /> */}
            
        </div>
    )
}

export default MyContentHeader
