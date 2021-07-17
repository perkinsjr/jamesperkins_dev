import { useEffect } from 'react';

export const useUtterances = (commentNodeId) => {
	useEffect(() => {
                 const scriptParentNode = document.getElementById(commentNodeId);
		if (!scriptParentNode) return;
		const script = document.createElement('script');
		script.src = 'https://utteranc.es/client.js';
		script.async = true;
		script.setAttribute('repo', 'perkinsjr/jamesperkins_dev_comments');
		script.setAttribute('issue-term', 'pathname');
		script.setAttribute('label', 'comment :speech_balloon:');
		script.setAttribute('theme', 'github-light');
		script.setAttribute('crossorigin', 'anonymous');

		
		scriptParentNode.appendChild(script);

		return () => {
			// cleanup - remove the older script with previous theme
			scriptParentNode.removeChild(scriptParentNode.firstChild);
		};
	}, [commentNodeId]);
};