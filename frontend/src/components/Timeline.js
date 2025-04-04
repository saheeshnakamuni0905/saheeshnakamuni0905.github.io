import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import '../design/TimelineDesign.css';

const Timeline = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleClickOpen = (content, title) => {
    setModalContent(content);
    setModalTitle(title);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const timelineData = [
    {
      type: 'education',
      heading: "Master's",
      title: 'Master of Science in Information Systems',
      subtitle: 'Northeastern University, Boston, MA',
      date: 'Expected May 2025',
      info: 'Coursework',
      description: (
        <>
          <Typography variant="body1" gutterBottom>
            Application Engineering and Development
          </Typography>
          <Typography variant="body1" gutterBottom>
            Data Management and Database Design
          </Typography>
          <Typography variant="body1" gutterBottom>
            Web Development Tools and Methods
          </Typography>
          <Typography variant="body1" gutterBottom>
            Web Design and User Experience
          </Typography>
          <Typography variant="body1" gutterBottom>
            Program Structures and Algorithms
          </Typography>
          <Typography variant="body1" gutterBottom>
            User Experience and Design Testing
          </Typography>
        </>
      ),
    },
    {
      type: 'work',
      heading: 'Work Experience',
      title: 'Software Engineer',
      subtitle: 'Accenture, India',
      date: 'July 2021 - Feb 2023',
      info: 'Roles and Responsibilities',
      description: (
        <>
          <Typography variant="body1" gutterBottom>
            Addressed 150+ customer issues for Chanel using Jira, Confluence, and ServiceNow, reducing P1 incidents by 70% through documentation.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Leveraged Amazon EC2 to manage and process over 10,000 fashion week event images, ensuring timely content delivery to the website.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Managed SAP Hybris based order processing solutions for Chanel’s B2C and B2B clients, managing an average of 5,000 orders per month.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Applied Agile methodologies, leading to a 30% improvement in project collaboration and a 25% increase in delivery speed for Chanel’s digital projects.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Initiated and scheduled cross-functional meetings with clients to resolve critical tickets promptly, showcasing strong communication skills and fostering collaboration across borders.
          </Typography>
        </>
      ),
    },
    {
      type: 'education',
      heading: "Bachelor's",
      title: 'Bachelor of Engineering in Information Technology',
      subtitle: 'Vasavi College of Engineering, India',
      date: 'July 2021',
      info: 'Coursework',
      description: 'Data Structures and Algorithms, Design and Analysis of Algorithms, Operating Systems, Computer Networks',
    },
  ];

  return (
    <div id="timeline" className="timeline">
      {timelineData.map((item, index) => (
        <Fade key={index} direction="up" triggerOnce={false}>
          <div
            className={`timeline-item ${item.type}`}
            onClick={() => handleClickOpen(item.description, item.info)}
          >
            {item.heading && <h3>{item.heading}</h3>}
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <time>{item.date}</time>
            </div>
          </div>
        </Fade>
      ))}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{modalTitle}</DialogTitle>
        <DialogContent>
          <Typography>{modalContent}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Timeline;
