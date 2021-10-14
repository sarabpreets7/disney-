import './trending.css'
import img1 from '../../images/viewers-pixar.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
function Trending(props){

    
    useEffect(()=>{


    },[props])
    
    return(
        <div className="Container-recc">
            <h4>Trending</h4>
            <div className="Content-recc">


            {props.trending && props.trending.map(function(movie){
                    return(
                        <div className="wrap-recc">
                            <img src={movie.cardImg}></img>
                        </div>
                    )
                })}
                
                {/* <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div> */}

            </div>
        </div>

    )
}
const mapStateToProps=(state)=>{
    
    return{
      trending : state.movies.trending,
      
    }
  }
export default connect(mapStateToProps)(Trending);