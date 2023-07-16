import React, { SVGProps } from 'react'

export const Logo: React.FC<SVGProps<SVGSVGElement>> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 595.28 554.99"
		xmlSpace="preserve"
		{...props}
	>
		<path d="M220.79 250.74v9.62h-22.1v44.27h-9.62v-44.27h-22.1v-9.62h53.82zm95.54-.08v53.9h-9.62v-24.72h-34.65v24.72h-9.62v-53.9h9.62v19.56h34.65v-19.56h9.62zm51.19 14.55v5h34.65v9.62h-34.65V290c0 2.69 2.23 4.93 4.93 4.93h39.34v9.62h-39.34c-8.01 0-14.47-6.54-14.47-14.55v-24.79c0-8.01 6.47-14.55 14.47-14.55h39.34v9.62h-39.34c-2.69 0-4.93 2.24-4.93 4.93zm139.74-14.47v53.9l-9.62-7.39-34.65-26.72v34.11h-9.62V250.9l9.62 7.39L497.63 285v-34.34l9.63.08zm-360.72 54.32H88.02l29.26-55.12 29.26 55.12zm-44.3-8.55h30.09l-15.04-28.34-15.05 28.34z" />
	</svg>
)