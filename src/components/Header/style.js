import { makeStyles, createStyles } from '@material-ui/core/styles'

export default makeStyles(theme => createStyles({
  avatarRoot: {
    height: '150px',
    width: '150px',
  },
  h1Root: {
    fontWeight: '600',
  },
  linkContainerRoot: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  linkRoot: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'black',
  },
}));
