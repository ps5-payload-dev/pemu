async function main() {
    const WORKDIR = window.workingDir;
    const PAYLOAD = WORKDIR + '/pnes';

    return {
        mainText: "pNES",
        secondaryText: 'Portable NES',
	onclick: async () => {
	    return {
		path: PAYLOAD,
                cwd: WORKDIR
	    };
        }
    };
}
