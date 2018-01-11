import React, { Component } from 'react';
import './Produce.less';
export default class Produce extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="produce">
                <div className="produce-item">
                    <div className="item-header">
                        <h2><span><em>—</em>    绿色交通    <em>—</em></span></h2>
                        <p>宁德时代锂离子动力电池产品可应用于电动乘用车、电动大巴车、电动物流车及多种专用车型，将多年研发经验及成果运用于设计生产中，以满足启停、快充、长寿命、高能量密度、防尘防水等更多种功能需求。</p>    
                    </div>
                    <div className="item-cnt">
                        <h3>产品体系</h3> 
                        <p>
                            <img src="http://www.catlbattery.com/static/m/img/traffic-img1.jpg?v=v3" />
                        </p>  
                    </div>
                </div> 
                <div className="produce-item">
                    <div className="item-header">
                        <h2><span><em>—</em>    能量储存    <em>—</em></span></h2>
                        <p>能源存储产品应用领域涵盖平滑再生能源输出、电网调频、通信基站、工商业楼宇及家庭储能，可以调节平滑新能源、弥补线损功率补偿、跟踪计划削峰填谷，实现新能源的最大化利用。</p>    
                    </div>
                    <div className="item-cnt">
                        <h3>产品体系</h3> 
                        <p>
                            <img src="http://www.catlbattery.com/static/m/img/energy-img.jpg?v=v3" />
                        </p> 
                    </div>
                </div>
                <div className="energy">
                    <div className="energy-tit">
                        <h3>负荷调节 平滑新能源</h3>  
                        <p>CATL提供配套的锂电池储能系统，平滑风力及光伏发电输出，克服风能或太阳能发电不规则输出特点，有效提高风力及光伏发电系统能源利用率。</p> 
                    </div>    
                </div> 
                <div className="produce-item">
                    <div className="item-header">
                        <h2><span><em>—</em>    LCC运赢宝    <em>—</em></span></h2>
                        <h3>LCC运赢宝<br/>把握成本 运赢未来</h3>
                        <p>CATL-LCC运赢宝，为您量身定做，只需简单输入运营数据，即可轻松搞定不同运营方案的全生命周期成本，为您明智决策提供有力支持，助您创造更大价值！</p>    
                    </div>
                </div>    
            </div>    
        );
    }
}



