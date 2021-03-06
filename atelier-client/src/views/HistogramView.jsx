import * as React from 'react';
import * as styles from './HistogramView.scss';
import Histogram from '../components/Histogram';
import {i18n} from '../i18n';
import * as reduxActions from '../reduxActions';
import {connect} from 'react-redux';

export class HistogramView extends React.Component {

    render() {
        return <div className="view-container">
            <h2>{i18n('HistogramView.Title')}</h2>
            <div className={styles.histogramContainer}>
                <button onClick={this.props.fetchData}>get data</button>
                <Histogram data={this.props.data.histogram}/>
            </div>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        data: state.get('data').toJS()
    };
}
export default connect(mapStateToProps, reduxActions)(HistogramView);
