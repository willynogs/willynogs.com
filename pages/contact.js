import Grid from '@material-ui/core/Grid'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

const Contact = () => {
  return (
    <Grid container spacing={2}>
      <Grid container justify='center' item sm={4}>
        <GitHubIcon />
      </Grid>
      <Grid container justify='center' item sm={4}>
        <LinkedInIcon />
      </Grid>
      <Grid container justify='center' item sm={4}>
        <EmailIcon />
      </Grid>
    </Grid>
  )
}

export default Contact
