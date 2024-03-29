import React from 'react';
import './FrontAnimations.css'

class FrontAnimations extends React.Component{
render(){
    return(

       <div className="FrontA"> 
                        <div class="icon sun-shower">
                        <div class="cloud"></div>
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                        <div class="rain"></div>
                        </div>
                        
                        <div class="icon thunder-storm">
                        <div class="cloud"></div>
                        <div class="lightning">
                            <div class="bolt"></div>
                            <div class="bolt"></div>
                        </div>
                        </div>
                        
                        <div class="icon cloudy">
                        <div class="cloud"></div>
                        <div class="cloud"></div>
                        </div>
                        
                        <div class="icon flurries">
                        <div class="cloud"></div>
                        <div class="snow">
                            <div class="flake"></div>
                            <div class="flake"></div>
                        </div>
                        </div>
                        
                        <div class="icon sunny">
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                        </div>
                        
                        <div class="icon rainy">
                        <div class="cloud"></div>
                        <div class="rain"></div>
                        </div>
    </div>
    );
}
}

export default FrontAnimations;