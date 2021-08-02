import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

import CssTextField from '../Root.Componentes/TextField.Css';
import CssButton from '../Root.Componentes/Button.Css';

import logo from '../Imagenes/Matrix.png';

/**
 * Modulo encargados de realizar la petición
 * al back end
*/
import MatrixApi from '../Servicios/matrixServicios';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	botonColorsAuna: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: '#22a9c5',
		color: '#fafafa'
	},
	linkSpacing: {
		marginTop: theme.spacing(8),
		color: '#22a9c5',
	},
	submit: {
		marginTop: theme.spacing(1)
	}
}));

const LoginForm = () => {
	const classes = useStyles();
	let history = useHistory();

	const [datos, setDatos] = useState({
		email: '',
		password: ''
	})

	const handleInputChange = (event) => {
		setDatos({
			...datos,
			[event.target.name] : event.target.value
		})
	}

	const enviarDatos = (event) => {
		event.preventDefault()

		MatrixApi.login( datos ).then( ({ data:{access_token, token_type} }) => {

				localStorage.setItem( "token", access_token )
				localStorage.setItem( "token_type", token_type )

				history.push('/taskList')
			}, ({ response : { status, statusText } }) => {
				if( status === 400 )
				{
					Swal.fire({
						title: 'Error!',
						text: 'Credenciales erradas, ' + statusText,
						icon: 'error',
						confirmButtonText: 'Ok'
					});
				}
			}
		)
	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<img src={logo} alt="Matrix Auna" />
				<form className={classes.form} noValidate onSubmit={enviarDatos}>
					<CssTextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Correo Electrónico"
						name="email"
						autoComplete="Correo Electrónico"
						autoFocus
						onChange={handleInputChange}
					/>
					<CssTextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Contraseña"
						type="password"
						id="password"
						autoComplete="Contraseña"
						onChange={handleInputChange}
					/>
					<CssButton
						variant="contained"
						color="primary"
						type="submit"
						className={classes.submit}
						fullWidth
					>
						Iniciar Sesión
					</CssButton>
					<Grid container>
						<Grid item>
							<Link to="/register" variant="body2" className={classes.linkSpacing}>
								{"¿No tienes cuenta? - Registrate"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
			</Box>
		</Container>
	);
}

export default LoginForm;