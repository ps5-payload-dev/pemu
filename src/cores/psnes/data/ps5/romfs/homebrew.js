async function main() {
    const WORKDIR = window.workingDir;
    const PAYLOAD = WORKDIR + '/psnes';

    return {
        mainText: "pSNES",
        secondaryText: 'Portable Snes9x',
	onclick: async () => {
	    return {
		path: PAYLOAD,
                cwd: WORKDIR
	    };
        }
    };
}
