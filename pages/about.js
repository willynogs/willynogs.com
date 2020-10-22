import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const About = () => (
  <div>
    <Box mb={2}>
      <Typography component='p' variant='h6'>
        I live in Columbus, Ohio with my girlfriend Sarah and our two dogs Merlin and Penelope. I enjoy running, hiking, and cooking.
      </Typography>
    </Box>
    <Box mb={2}>
      <img style={{ maxWidth: '100%' }} src='/images/Us.JPG' />
    </Box>
    <Box mb={2}>
      <Typography component='p' variant='h6'>
        I began my career in 2016 as a ServiceNow developer at the Ohio State University, learning the foundations of technologies like Angular JS, React, React Native,
        and Ruby on Rails.
      </Typography>
    </Box>
    <Box mb={2}>
      <Typography component='p' variant='h6'>
        In 2019 I joined <a href='https://beam.dental/'>Beam Dental</a> as a Software Engineer working extensively with React and Ruby on Rails. In my time at Beam
        I gained skills across the stack and gained experience leading both small and large scale projects. The projects that I was involved with were mainly
        around claims processing and the companies dental perks program. I also spent some time on the infrastructure team.
      </Typography>
    </Box>
    <Box mb={2}>
      <Typography component='p' variant='h6'>
        In 2020 I moved to <a href='https://www.upstart.com/'>Upstart</a>, where I now work as a Software Engineer. At Upstart I am building software for our
        banking partners using React and Ruby on Rails.
      </Typography>
    </Box>
  </div>
)

export default About
