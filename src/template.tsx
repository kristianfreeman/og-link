import React from 'react';

export default (text: string, domain: string) => (
	<div
		style={{
			alignItems: 'center',
			background: 'black',
			borderRadius: '10px',
			boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
			color: 'white',
			display: 'flex',
			flexDirection: 'column',
			fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
			fontSize: '32px',
			fontWeight: '600',
			height: '627px',
			justifyContent: 'flex-start',
			padding: '20px',
			position: 'relative',
			textAlign: 'center',
			width: '1200px',
		}}
	>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				justifyContent: 'center',
			}}
		>
			<h1
				style={{
					fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
					fontSize: '48px',
					fontWeight: '700',
					maxWidth: '90%',
					wordWrap: 'break-word',
				}}
			>
				{text}
			</h1>
		</div>
		<p
			style={{
				bottom: '20px',
				color: '#ccc',
				fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
				fontSize: '24px',
				position: 'absolute',
			}}
		>
			{domain}
		</p>
	</div>
);

