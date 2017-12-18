import React, { Component } from 'react';
import './NewsDetail.less'
export default class NewsDetail extends React.Component{
    constructor(props) {
        super(props);
    }
    renderInfo(){
        if (this.props.id == '1') {
            return (
                <div className="detail">
                    <div className="detail-header">
                        <h3>热烈庆祝瑞恩电气2017年年中营销工作会议隆重召开</h3>
                        <span>浏览次数：204 发布时间：2017-8-1 10:07:07</span>
                    </div>
                    <div className="detail-cnt">
                        <p>骄阳似火的七月，热浪灼人，但却阻止不了瑞恩人从全国各地汇聚海安。2017年7月26日，江苏瑞恩电气股份有限公司召开了主题为“趁势而上 实现超越”的2017年年中营销工作会议。公司领导、全体营销经理以及生产、品质、技术、商务等部门负责人参加了此次会议。</p>
                        <p><img src={require('../../images/d_01.jpg')} /></p>
                        <p>生产、技术部、品质负责人对公司现状进行汇报，对营销经理提出的相关问题进行了一一解答并交流互动，听取相关建议。</p>
                        <p><img src={require('../../images/d_02.png')} /></p>
                        <p>针对上半年的经营情况，营销副总叶平进行工作总结，分析近年来电气行业的发展变化趋势，肯定了营销中心上半年取得的成绩，并布置下半年具体任务，确保各项工作有序开展。</p>
                        <p><img src={require('../../images/d_03.png')} /></p>
                        <p>为进一步调动营销经理积极性，营销副总崔雷雷将公司年度政策调整方案向全体人员进行汇报，要求按照新目标、新思路、新政策，振奋精神、自我加压、一着不让继续努力拼搏奋战下半年。</p>
                        <p><img src={require('../../images/d_04.png')} /></p>
                        <p>最后，公司董事长王良明先生从企业发展目标、硬实力投入、共同发展、转型升级、全国企业征信平台（诚信）等五个方面阐述了瑞恩的经营战略，总结分析了在各种因素影响下公司如何合力寻求营销突破，为营销中心及全体营销经理指明了工作方向，划出了工作重点。</p>
                        <p><img src={require('../../images/d_05.png')} /></p>
                        <p>本次会议取得圆满成功，全体与会人员气氛热烈、积极响应、斗志昂扬，保证全力以赴完成全年营销目标任务，“趁势而上 实现超越”。</p>
                    </div>  
                </div>
            );
        }else if(this.props.id == '2'){
            return (
                <div className="detail">
                    <div className="detail-header">
                        <h3>变压器生产项目环境影响评价公众意见调查第一次公示</h3>
                        <span>浏览次数：284 发布时间：2017-6-22 10:07:07</span>
                    </div>
                    <div className="detail-cnt">
                        <p>骄阳似火的七月，热浪灼人，但却阻止不了瑞恩人从全国各地汇聚海安。2017年7月26日，江苏瑞恩电气股份有限公司召开了主题为“趁势而上 实现超越”的2017年年中营销工作会议。公司领导、全体营销经理以及生产、品质、技术、商务等部门负责人参加了此次会议。</p>
                        <p><span>按照《环境影响评价公众参与暂行办法》（环发</span><span>2006</span><span>【</span><span  >28</span><span>号</span><span >】</span><span>）、《建设项目环境影响评价技术导则</span> 
                        <span >总纲（</span>
                        <span  >HJ2.1 2016</span><span >）》等文件的有关规定，</span>
                        <span >江苏瑞恩电气股份有限公司将变压器生产项目进行网上公示，</span>
                        <span >欢迎公众提出看法和意见。公示内容如下：</span></p>
                        <p><b><span>1. </span></b><b><span>建设项目名称及概况</span></b></p>
                        <p><b><span>项目名称</span></b><span>：变压器生产项目</span></p>
                        <p><b><span>建设单位：</span></b><span>江苏瑞恩电气股份有限公司</span></p>
                        <p><b><span>建设地点</span></b><span>：</span><span>海安县海安镇田庄村二十一组（海安高新区新材料产业园内）</span></p><p><b><span>项目投资</span></b><span >：总投资</span><span  >20000</span><span >万元</span></p>
                        <p><b><span >建设性质：</span></b><span>扩建</span></p><p><b><span>建设规模：</span></b><span>现有项目生产规模为干式变压器</span><span  >4000</span>
                        <span>台</span><span>/a</span><span >、油浸式变压器</span><span>1500</span>
                        <span>台</span><span>/a</span><span>、箱式变压器</span><span  >500</span>
                        <span>套</span><span>/a</span><span >，本次仅仅在原有生产规模基础上新增喷涂工序，本次建成后不突破原有规模。</span></p>
                        <p><b><span  >2. </span></b><b><span >建设单位名称及联系方式</span></b></p><p><b><span >单位名称：</span></b>
                        <span>江苏瑞恩电气股份有限公司</span></p><p><b><span >单位地址：</span></b>
                        <span>海安县海安镇田庄村二十一组（海安高新区新材料产业园内）</span></p><p><b><span >邮编：</span></b><b>
                        <span>226600</span></b></p><p><b><span >联系人：</span></b><span>曹工</span></p>
                        <p><b><span>联系电话：</span></b><b><span  >18912859809</span></b></p><p><b><span  >E-Mail</span></b>
                        <b><span>：</span></b><b><span  >530021316@qq.com</span></b></p><p><b><span>3.</span></b><b>
                        <span>环境影响评价的工作程序和主要工作内容</span></b></p>
                        <p>
                        <span>在调查项目所在地环境质量现状的基础上，通过工程分析，识别该项目污染因子和环境影响因素，确定“三废”排放量，预测该项目建成投产后对周围环境的影响范围和程度，论证该项目实施的环境可行性，并对该项目选址及总体布局的合理性、环保措施的可行性作出评价，提出减轻和防治污染的具体对策及建议，为该项目的工程设计、环保决策提供科学依据。</span></p>
                        <p><b><span  >4.</span></b>
                        <b><span>征求公众意见的主要事项</span></b></p>
                        <p><span>(1) </span><span >请公众提供个人准确信息，主要包括：姓名、职业、文化程度、家庭具体住址及联系电话；</span></p>
                        <p><span>(2) </span><span >根据您掌握的情况，认为该项目对当地环境的哪些方面（地表水、空气、声、土壤、地下水等），可能会造成污染危害</span><span  >/</span>
                        <span >影响及程度；</span></p><p><span  >(3) </span><span >您对该项目在环境保护方面有何具体建议和要求；</span></p><p><span  >(4) </span><span >您对环保主管部门审批该项目时有何具体建议和要求；</span></p>
                        <p><span>(5) </span><span >从环保角度出发，您对该项目的建设持何种态度（支持或反对），并简要说明原因。</span></p><p><b><span  >5. </span></b><b><span>公众提出意见的主要方式</span></b></p>
                        <p><span>公众可以在信息公开后，以信函、传真、电子邮件或者按照有关公告要求的其他方式，向建设单位机构提交书面意见。</span></p><p><span >本公示自张贴之日起保留十日。</span></p><p></p> 
                    </div>  
                </div>    
            );
        }else {
            return (
                <div className="detail">
                    <div className="detail-header">
                        <h3>近日，瑞恩电气接受国家安全标准化示范企业评审专家检查，并通过验收。</h3>
                        <span>浏览次数：49 发布时间：2017-11-20 16:21:30</span>
                    </div>
                    <div className="detail-cnt">
                        <p>近日，瑞恩电气接受国家安全标准化示范企业评审专家检查，并通过验收。</p><p>江苏瑞恩电气股份有限公司坚持“安全第一，预防为主，综合治理，全员参与”的安全生产方针，全面落实安全生产责任制，加强安全生产的教育、培训、管理，坚持“抓生产必须管安全”、“谁主管，谁负责”的原则，正确处理好生产经营与安全的关系，确保公司生产经营活动的正常运行，实现各类事故为零的目标，改进和提升安全管理工作的水平，创建国内同行业一流、具有国际先进水平的安全生产管理示范企业。</p>
                        <p><img src={require('../../images/detail_1.jpg')} /></p>
                        <p>专家听取总经理冯斌的工作汇报</p>
                        <p><img src={require('../../images/detail_2.jpg')} /></p>
                        <p>专家检查指导车间操作规程</p>
                        <p><img src={require('../../images/detail_3.jpg')} /></p>
                        <p>专家检查指导车间设备安全使用工作</p>
                        <p><img src={require('../../images/detail_4.jpg')} /></p>
                        <p><span>专家检查指导车间设备安全使用工作</span></p>
                        <p><img src={require('../../images/detail_5.jpg')} /></p>
                        <p><span>专家检查指导车间设备安全使用工作</span></p> 
                    </div>  
                </div> 
            )
        }
    }
    render(){
        return(
            <div>{this.renderInfo()}</div>     
        );
    }
}



