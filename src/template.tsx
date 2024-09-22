import React from 'react';

export default (text: string, domain: string) => (
	<div
		style={{
			width: '1200px',
			height: '627px',
			padding: '20px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-start',
			background: 'black',
			color: 'white',
			fontSize: '32px',
			fontWeight: '600',
			textAlign: 'center',
			boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
			borderRadius: '10px',
			position: 'relative',
			fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
		}}
	>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				flexGrow: 1,
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
				fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
				fontSize: '24px',
				color: '#ccc',
				position: 'absolute',
				bottom: '20px',
			}}
		>
			{domain}
		</p>
	</div>
);

