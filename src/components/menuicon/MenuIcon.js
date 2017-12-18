import React, { Component } from 'react';
import './MenuIcon.less';
import PropTypes from 'prop-types'
export default class MenuIcon extends Component {
    static propTypes={
        config:PropTypes.array
    }
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            ele_angle: [],
            x_pos:[],
            y_pos:[],
            starting_angel: '0',
            angle: 0,
            angel_difference: '90',
            radius: '120'
        };  
        this.state.angle = parseInt(this.state.angel_difference)/(this.props.config.length-1);
        this.state.xPox = this.state.x_pos;
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            x_pos:prevState.x_pos,
            y_pos:prevState.y_pos
        })); 
        this.setPosition();
    }
    maskShow(){
        this.setState(prevState => ({
            isToggleOn: false
        }));  
        this.handleClick();   
    }
    setPosition(){
        var obj = this.refs.menuIconList.childNodes;
        var arr = [].slice.call(obj);
        arr.map((item,index) =>{
            this.state.ele_angle[index] = (parseInt(this.state.starting_angel) + this.state.angle*(index))*Math.PI/180;
            this.state.x_pos[index] = (this.state.radius * Math.sin(this.state.ele_angle[index]));
            this.state.y_pos[index] = (this.state.radius * Math.cos(this.state.ele_angle[index]));
        })
    }
    componentWillUnmount(){  
        this.setState = (state,callback)=>{
            return;
        };  
    }   
    render() {
        return (
            <div className="layer">
                <div className="menu-icon-w">
                    <div className={this.state.isToggleOn?'menu-icon':'menu-icon active'} >
                        <a className={this.state.isToggleOn?'menu-btn':'menu-btn btn-rotate'} onClick={this.handleClick.bind(this)}  href="javascript:;"><span></span></a>
                        <ul ref='menuIconList' className={this.state.isToggleOn?'menu-option text-hide':'menu-option'}>
                            {this.props.config.map((name,index)=>{
                                return <li key={index} style={{transform:this.state.isToggleOn?'translate3d(0px,0px,0px)':"translate3d("+this.state.y_pos[index]+"px,"+"-"+this.state.x_pos[index]+"px,0px)"}}><a href={this.props.config[index].link}><i className={'iconfont' + ' '+ this.props.config[index].icon}></i><span>{this.props.config[index].text}</span></a></li>    
                            })}
                        </ul>                   
                    </div>  
                </div>
                <div className={this.state.isToggleOn?'menu-bg hide':'menu-bg show'} onClick={this.maskShow.bind(this)}></div>
            </div>
        )            
    }
}



