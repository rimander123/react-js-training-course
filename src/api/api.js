export const mockRequest = (
	onSuccess,
	onError,
	timeout = 350,
	successFactor = 75,
) => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			let random = Math.floor(Math.random() * 100);
			console.log("[mockRequest] response:", random <= successFactor ? "success" : "fail");
			if (random <= successFactor) {
				resolve();
			} else {
				reject();
			}
		}, timeout);
	})
	.then(onSuccess)
	.catch(onError);
}
