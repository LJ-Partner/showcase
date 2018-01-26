import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
let _data,palying=true;
const carouselConfig = {
	autoPlay: true,
	showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true
}
export default class Demo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			getInvatationData: {},
			loading: true,
			emptyCnt: false,
			stoped: false
		}
	}
	
	componentDidMount() {
		
	}
	render() {
		return(
			<div className="demo">
				<ul className="item-w">
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
					<li className="item">
						<div className="item-box">
							<div className="item-box-cnt">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" version="1.1" enableBackground="new 0 0 64 64">
						        	<rect width="64" height="64" fill="#08A1EF" style={{fill: 'rgb(255, 255, 255)'}} />
							    </svg>	
							</div>
						</div>
					</li>
				</ul>
			</div>
		)	
	}
}




