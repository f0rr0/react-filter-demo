import './styles.css';
import React, {PropTypes} from 'react';
import classnames from 'classnames';
export default class ModelCard extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    };
    static defaultProps = {
        name: 'Jane Doe',
        rate: 99,
        link: `http://meriad.co/`,
        thumb: "fill this",
        username: "jane-doe"
    };
    constructor() {
        super();
        this.state = {
            show_info: false,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleMouseEnter(event) {
        this.setState({show_info: true});
    }
    handleMouseLeave(event) {
        this.setState({show_info: false});
    }
    render() {
        const {name, rate, link, thumb, username, height} = this.props;
        const infoClasses = 'absolute bottom-0 col-12 fit p1 border-box info overflow-hidden animated ' + classnames({
            'display-none': !this.state.show_info
        });
        const mainClasses = 'col-3 border-box p1';
        return (
            <li key={username} className={mainClasses}>
                <div className='relative' style={{
                    backgroundImage: `url(${thumb})`
                }} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
                    <div className={infoClasses}>
                        {name}<br/>
                        ${rate}/shoot hour<br/>
                        {height}m
                    </div>
                </div>
            </li>
        );
    }
}
