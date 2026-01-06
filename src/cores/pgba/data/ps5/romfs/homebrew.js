async function main() {
    const WORKDIR = window.workingDir;
    const PAYLOAD = WORKDIR + '/pgba';

    return {
        mainText: "pGBA",
        secondaryText: 'Portable GameBoy Advance',
	onclick: async () => {
	    return {
		path: PAYLOAD,
                cwd: WORKDIR
	    };
        }
    };
}
