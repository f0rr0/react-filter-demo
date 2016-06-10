import React from 'react';
import Slider from 'rc-slider';
import R from 'ramda';
import models from './models.js';
import './styles.css';
import ModelCard from './../ModelCard/component.jsx';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            height: [
                1.6, 1.7
            ],
            rate: [
                200, 300
            ],
            eye_color: ["blue"],
            hair_color: ["light brown"]
        };
        this.handleHeight = this.handleHeight.bind(this);
    }
    handleHeight(vals) {
        this.setState(R.merge(this.state, {height: vals}));
    }
    withinBounds(models) {
        return R.filter(R.propSatisfies((h) => (h >= R.head(this.state.height)) && (h <= R.tail(this.state.height)), "height"))(models);
    }
    render() {
        const filtered = R.map((model) => <ModelCard key={model.thumb} height={model.height} name={model.name} thumb={model.thumb}/>, this.withinBounds(models));
        return (
            <div>
                <div className='col-12 center h4'>Filter by height (meters)</div>
                <div className='flex justify-center border-box p1'>
                    <div className='col-1 right-align pr1'>{R.head(this.state.height)}</div>
                    <div className='col-3 p1'>
                        <Slider range allowCross={false} min={1.5} max={2} step={0.1} value={this.state.height} onChange={this.handleHeight}/>
                    </div>
                    <div className='col-1 left-align pl1'>{R.tail(this.state.height)}</div>
                </div>
                <ul className='flex flex-wrap pt1 list-reset'>{filtered}</ul>
            </div>
        )
    }
}
