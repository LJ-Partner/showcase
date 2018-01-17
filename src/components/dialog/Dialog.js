import React, { Component } from 'react';
import Parser from 'html-react-parser';
import './Dialog.less';
export default class Dialog extends React.Component{
	constructor(props){
		super(props);      
        this.state = {
            isshow: props.dialogShow,
            dialogcont: props.dialog.dialogCont,
            isauto: true,
            dialoglife: props.dialog.dialogLife,
            isclosebtn: props.dialog.dialogIsclosebtn,
            closedialog: function(){

            }    
        }
	}
    componentWillMount(){
        this.autocloseDialog(); 
    } 
    closeDialog(){
        if(this.state.closedialog){
            this.state.closedialog();
        }
        self.state.isshow = false;
        self.state.dialogcont = "";
        self.state.dialoglife = 3000;
        this.destroyTimeout();
    }
    autocloseDialog(){
        let self = this;
        this.setState({
            isshow: this.props.dialog.dialogShow,
            dialogcont: this.props.dialog.dialogCont,
            isauto: this.props.dialog.dialogIsauto,
            dialoglife: this.props.dialog.dialogLife,
            isclosebtn: this.props.dialog.dialogIsclosebtn,
            closedialog: function(){

            }      
        })
        if(this.state.isshow && this.state.isauto && self) {
            this.autotimeout = setTimeout(() => {
                if(this.state.closedialog){
                    this.state.closedialog();
                }
                self.state.isshow = false;
                self.state.dialogcont = "";
                self.state.dialoglife = 3000;
                this.destroyTimeout();
            }, self.state.dialoglife);
        }
    }
    destroyTimeout () {
        clearTimeout(this.autotimeout);
        return;
    }
    componentWillUnmount(){  
        this.setState = (state,callback)=>{
            return;
        };  
    }
    render(){
        if(this.state.isshow){
            return(
                <div className="dialog">
                    <div className="dialog-cont">
                        {Parser(this.state.dialogcont)}    
                    </div>    
                </div>      
            )    
        }else{
            return (
                <div className="bb"></div>
            )
        }
    }
}



