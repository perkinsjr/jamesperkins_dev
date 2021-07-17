import { useUtterances } from '../lib/useUtterances';

const commentNodeId = 'comments';

const Comments = () => {
	useUtterances(commentNodeId);
	return <div id={commentNodeId} />;
};

export default Comments;