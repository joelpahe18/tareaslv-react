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
 * Componentes encargados de realizar la petición
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

const RegisterForm = () => {
	const classes = useStyles();
	let history = useHistory();

	const [datos, setDatos] = useState({
		nombres: '',
		apellidos: '',
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

		const usuario = {
			name		:	datos.nombres + datos.apellidos,
			email		:	datos.email,
			password	:	datos.password
		}

		MatrixApi.register( usuario ).then( ({ data }) => {
			Swal.fire({
				title: 'Registro Correcto',
				text: data.message,
				icon: 'success',
				confirmButtonText: 'Ok'
			});

			window.setTimeout(function() {
				history.push('/login')
			}, 2000);
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
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<CssTextField
								autoComplete="Nombres"
								name="nombres"
								variant="outlined"
								required
								fullWidth
								id="nombres"
								label="Nombres"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CssTextField
								variant="outlined"
								required
								fullWidth
								id="apellidos"
								label="Apellidos"
								name="apellidos"
								autoComplete="Apellidos"
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<CssTextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Correo Electrónico"
								name="email"
								autoComplete="Correo Electrónico"
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<CssTextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								id="password"
								autoComplete="Contraseña"
								onChange={handleInputChange}
							/>
						</Grid>
					</Grid>
					<CssButton
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Resgistrar
					</CssButton>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link to="/login" variant="body2" className={classes.linkSpacing}>
								¿Ya tienes una cuenta? Ingresa
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
			</Box>
		</Container>
	);
}

export default RegisterForm;