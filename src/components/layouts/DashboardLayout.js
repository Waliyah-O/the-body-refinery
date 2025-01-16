import { ErrorBoundary } from "react-error-boundary";
import { ErrorUI } from "../index.js";
import { useGuard } from "../../../../LMS-FE/src/hooks/useGuard.js";
export const DashboardLayout = ({
	children,
}) => {
	useGuard();
	return (
		<div>
			<ErrorBoundary 
				FallbackComponent={ErrorUI}
				onReset={() => {
					// reset the state of your app so the error doesn't happen again
				}}
			>{children}</ErrorBoundary>
		</div>
	);
};


