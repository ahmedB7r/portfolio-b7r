import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Course extends Component {
  render() {
    return (
      <Cell col={12}>
        <a
          style={{ textDecoration: 'none' }}
          href={this.props.link}
          rel='noopener noreferrer'
          target='_blank'
          className='course-link'
        >
          <h5 style={{ margin: '0px' }}>{this.props.name}</h5>
        </a>
      </Cell>
    );
  }
}

export default Course;
