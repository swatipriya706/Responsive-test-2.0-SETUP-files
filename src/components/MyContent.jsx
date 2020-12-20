import React, { Component } from 'react'
import '../css/MyContent.css'

class MyContent extends Component {
    getTextContent = () => {
        return  <div className='mainContent'>
                    <div>
                        <ul>
                            <li>
                                <h1>Save 10%</h1>
                            </li>
                            <li>
                                <h5>Ipsum delicata sed ex.</h5>                                
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet, ea est noster accumsan, vim elit aeque an. 
                                Eu duo quod .6 elit, posse facer minimum ph eu, ea sit viris ceteros. 
                                Ea has consul omnesque, an vel reque graeco. Eurn ne mundi nobis quando, 
                                an atqui dolor per. Ut modo elit malis sea. Nibh consetetur mei ea.
                                </p>
                            </li>
                        </ul>
                        
                    </div>                    
                </div>
    }

    getImageContent = () => {
        return  <div className='image-content'>
                    <img src={require('../../images/PEAK_PNG.png')} className='image-content'/>    
                </div>
    }
    
    render() {
        return (
            <div>
                <div className='display-contents'>
                    {this.getTextContent()}
                    {this.getImageContent()}           
                </div>
            </div>
        )
    }
}

export default MyContent
