import React, { Component } from 'react';
import './ProductList.less';

export default class ProductList extends Component {
    constructor(props){
        super(props);
        
    }
    renderList(){
        if(this.props.id == '1'){
            return (
                <div className="list-box">
                    <h2>
                        <span><em>—</em>     干式变压器系列 <em>—</em></span>
                    </h2>
                    <ul className="list">
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_1.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_2.png')} />   
                                </span>
                                <p>10kV级SC(B)9型、SC(B)10、SC(B)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_3.png')} />    
                                </span>
                                <p>10KV级SC(B)9型\SC(B)10\SC(B)11…</p>
                            </a>
                            
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_4.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_5.png')} />    
                                </span>
                                <p>非包封H级干式电力变压器系列</p>
                            </a>
                            
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_6.png')} />    
                                </span>
                                <p>立体卷铁心树脂绝缘干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_7.png')} />    
                                </span>
                                <p>DC10-Z系列单相树脂绝缘干式电力…</p>
                            </a>
                            
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_8.png')} />    
                                </span>
                                <p>20KV级\35KV级SC(B)10系列干式变…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_9.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_10.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_11.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                    </ul>    
                </div>
            )
        }else if(this.props.id == '2'){
            return (
                <div className="list-box">
                    <h2>
                        <span><em>—</em>     油浸式变压器系列 <em>—</em></span>
                    </h2> 
                    <ul className="list">
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c2_1.png')} />    
                                </span>
                                <p>S11、S13、S14系列立体卷铁心油浸…</p>
                            </a>
                        </li>
                    </ul>   
                </div>
            )
        }else if(this.props.id == '3'){
            return (
                <div className="list-box">
                    <h2>
                        <span><em>—</em>     油浸式变压器系列 <em>—</em></span>
                    </h2>
                    <ul className="list">
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c3_1.png')} />    
                                </span>
                                <p>YB系列箱式变电站系列(欧式箱变)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c3_2.png')} />    
                                </span>
                                <p>变电站系列</p>
                            </a>
                        </li>
                    </ul>
                </div> 
            )     
        }else if(this.props.id == '4'){
            return (
                <div className="list-box">
                    <h2>
                        <span><em>—</em>     其他产品 <em>—</em></span>
                    </h2>
                    <ul className="list">
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_1.png')} />    
                                </span>
                                <p>YB系列箱式变电站系列(欧式箱变)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_2.png')} />    
                                </span>
                                <p>组合式变压器系列(美式箱变)</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_3.png')} />    
                                </span>
                                <p>YB系列箱式变电站系列(欧式箱变)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_4.png')} />    
                                </span>
                                <p>组合式变压器系列(美式箱变)</p>
                            </a>
                        </li>
                    </ul>
                </div>
            )     
        }else{
            return (
                <div className="list-box">
                    <h2>
                        <span><em>—</em>     全部产品 <em>—</em></span>
                    </h2>
                    <ul className="list">
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_1.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_2.png')} />   
                                </span>
                                <p>10kV级SC(B)9型、SC(B)10、SC(B)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_3.png')} />    
                                </span>
                                <p>10KV级SC(B)9型\SC(B)10\SC(B)11…</p>
                            </a>
                            
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_4.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_5.png')} />    
                                </span>
                                <p>非包封H级干式电力变压器系列</p>
                            </a>
                            
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_6.png')} />    
                                </span>
                                <p>立体卷铁心树脂绝缘干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_7.png')} />    
                                </span>
                                <p>DC10-Z系列单相树脂绝缘干式电力…</p>
                            </a>
                            
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_8.png')} />    
                                </span>
                                <p>20KV级\35KV级SC(B)10系列干式变…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_9.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_10.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c1_11.png')} />    
                                </span>
                                <p>SCRB10H级干式变压器</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c2_1.png')} />    
                                </span>
                                <p>S11、S13、S14系列立体卷铁心油浸…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c3_1.png')} />    
                                </span>
                                <p>YB系列箱式变电站系列(欧式箱变)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c3_2.png')} />    
                                </span>
                                <p>变电站系列</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_1.png')} />    
                                </span>
                                <p>YB系列箱式变电站系列(欧式箱变)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_2.png')} />    
                                </span>
                                <p>组合式变压器系列(美式箱变)</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_3.png')} />    
                                </span>
                                <p>YB系列箱式变电站系列(欧式箱变)…</p>
                            </a>
                        </li>
                        <li className="list-item">
                            <a href="javascript:;">
                                <span>
                                    <img src={require('../../images/c4_4.png')} />    
                                </span>
                                <p>组合式变压器系列(美式箱变)</p>
                            </a>
                        </li>
                    </ul>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="list-w">
                {this.renderList()}    							
            </div>    
        );
    }
}



