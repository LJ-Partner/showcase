import React from 'react';
import UnFound from '../components/Error/notfound';
export default class NotFound extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="wrap notfound">
                <UnFound />
            </div>
        )
    }
}