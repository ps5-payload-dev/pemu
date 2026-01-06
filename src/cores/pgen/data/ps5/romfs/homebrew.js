async function main() {
    const WORKDIR = window.workingDir;
    const PAYLOAD = WORKDIR + '/pgen';

    return {
        mainText: "pGEN",
        secondaryText: 'Portable Genesis',
	onclick: async () => {
	    return {
		path: PAYLOAD,
                cwd: WORKDIR
	    };
        }
    };
}
