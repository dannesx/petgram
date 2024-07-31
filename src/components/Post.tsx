import Likes from './Likes'
import Comment from './Comment'
import NewComment from './NewComment'

function Post() {
	return (
		<div>
			<img
				src="https://picsum.photos/id/237/800"
				alt=""
				className="aspect-square rounded-lg max-w-lg mb-2"
        width={512}
			/>
			<Likes />
			<figcaption className='space-x-1'>
				<span className="text-primary font-medium">dannesx</span>
        <span>asdasdasdadasd</span>
			</figcaption>
      <hr className='border-primary/50 my-1'/>
      <div className='mb-2'>
        <Comment username="ss" text="aaaaaa"/>
        <Comment username="ss" text="aaaaaa"/>
        <Comment username="ss" text="aaaaaa"/>
      </div>
      <NewComment />
		</div>
	)
}

export default Post
