import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const CourseButtons = () => {
  return (
    <div className='choose-buttons' style={{ marginTop: '50px' }}>
      <Button className='lesson-button' component={Link} to="/course/beginner" variant="contained" color="primary">Beginner</Button>
      <Button className='lesson-button' component={Link} to="/course/intermediate" variant="contained" color="primary">Intermediate</Button>
      <Button className='lesson-button' component={Link} to="/course/advanced" variant="contained" color="primary">Advanced</Button>
    </div>
  );
};

export default CourseButtons;
