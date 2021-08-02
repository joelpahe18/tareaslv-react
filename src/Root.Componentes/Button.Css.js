import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
	root: {
		color: 'white',
		backgroundColor: '#22a9c5',
		'&:hover': {
			backgroundColor: '#09b7dc',
		},
	},
}))(Button);

export default ColorButton;