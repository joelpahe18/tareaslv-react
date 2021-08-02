import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#22a9c5',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#22a9c5',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
			borderColor: '#22a9c5',
			},
			'&:hover fieldset': {
			borderColor: '#22a9c5',
			},
			'&.Mui-focused fieldset': {
			borderColor: '#22a9c5',
			},
		},
	},
})(TextField);

export default CssTextField;