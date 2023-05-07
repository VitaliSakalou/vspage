import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';

export type FormType = {
	name: string;
	email: string;
	message: string;
};
export type ContactPropType = {
	contactGreeting: string;
};

const initialValues: FormType = {
	name: '',
	email: '',
	message: '',
};

function Contact({ contactGreeting }: ContactPropType) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showMessage, setShowMessage] = useState<boolean>(false);

	useEffect(() => {
		if (showMessage) {
			setTimeout(() => {
				setShowMessage(false);
			}, 3000);
		}
	}, [showMessage]);

	const onSubmit = (values: Record<string, unknown> | undefined) => {
		setIsLoading(true);
		emailjs
			.send(
				'service_x74g9us',
				'template_5d00g2n',
				values,
				'ccSaP-njjibYOB2jp'
			)
			.then(
				(result) => {
					setIsLoading(false);
					setShowMessage(true);
					console.log(result.text);
				},
				(error) => {
					setIsLoading(false);
					console.log(error.text);
				}
			);
	};
	const validate = (values: {
		name: any;
		email: string;
		message: string | any[];
	}) => {
		let errors: any = {};
		if (!values.name) {
			errors.name = 'Please fill out this field.';
		}
		if (!values.email) {
			errors.email = 'Please fill out this field.';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email format';
		}
		if (!values.message) {
			errors.message = 'Please fill out this field.';
		} else if (values.message.length > 500) {
			errors.message = 'Value must be less than 500 characters';
		}

		return errors;
	};
	const formik = useFormik({
		initialValues,
		onSubmit,
		validate,
		validateOnBlur: false,
	});

	const fillDefaultContent = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		formik.setFieldValue(
			'message',
			'Hi Vitali! I Have an opportunity for you'
		);
	};
	return (
		<div className="w-[75%] mx-auto relative h-[400px] flex justify-center">
			<div className="w-[50%] px-6">{contactGreeting}</div>
			<div className="w-[50%] px-6">
				<form onSubmit={formik.handleSubmit}>
					<div className="py-4">
						<input
							type="text"
							id="name"
							name="name"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-600"
							placeholder="name"
						/>
						{formik.touched.name && formik.errors.name && (
							<p className="text-xs absolute text-red-500">
								{formik.errors.name}
							</p>
						)}
					</div>
					<div className="py-4">
						<input
							type="email"
							id="email"
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-600"
							placeholder="email"
						/>
						{formik.touched.email && formik.errors.email && (
							<p className="text-xs absolute text-red-500">
								{formik.errors.email}
							</p>
						)}
					</div>
					<div className="py-4">
						<textarea
							id="message"
							name="message"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.message}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-600 resize-none"
							placeholder="message"
						/>
						{formik.touched.message && formik.errors.message && (
							<p className="text-xs absolute text-red-500">
								{formik.errors.message}
							</p>
						)}
					</div>
					<div className="flex justify-between">
						<button
							className="bg-cyan-600 text-light p-2.5 px-6 rounded-lg text-lg font-semibold my-4 w-24
					hover:bg-light hover:text-cyan-600 border-2 border-solid border-transparent hover:border-cyan-600"
							type="submit"
						>
							{isLoading ? (
								<div role="status">
									<svg
										aria-hidden="true"
										className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-cyan-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
								</div>
							) : (
								'Send'
							)}
						</button>
						{showMessage && (
							<div
								id="tooltip-no-arrow"
								role="tooltip"
								className="absolute z-10 bg-white border border-gray-200  inline-block px-3 py-2 mx-4 text-sm font-medium text-dark rounded-lg shadow-sm tooltip dark:bg-gray-700"
							>
								Message sent
							</div>
						)}
						<button
							className=" p-2.5 px-6 rounded-lg text-lg font-semibold my-4  ml-4 border-gray-200
					bg-light text-cyan-600 border-2 border-solid border-transparent hover:border-cyan-600"
							onClick={fillDefaultContent}
						>
							I Have an opportunity for you ...
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
