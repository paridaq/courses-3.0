
        import React from 'react';

        const Course = () => {
            return (
                <div style={{ display: 'flex', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '100%', maxWidth: '600px', margin: '20px 0 0 0' }}>
                    <img src="course-image.jpg" alt="Course" style={{ width: '200px', height: 'auto' }} />
                    <div style={{ padding: '16px', flex: '1' }}>
                        <h2 style={{ fontSize: '24px' }}>Course Title</h2>
                        <p style={{ fontSize: '16px' }}>Course description goes here. It provides an overview of the course content and objectives.</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>$99.99</span>
                            <div>
                                <button style={{ marginRight: '8px', backgroundColor: 'blue', color: 'white', padding: '8px 16px' }}>Buy</button>
                                <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px 16px' }}>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>          );
        };

        export default Course;
      
   