import PropTypes from 'prop-types';
export default function JobsList({job}) {

    return (
        <div className="post">
                            <h2 className="post__title">
                                {job.title}
                            </h2>
                            <p className="post__metadata">Posted by {job.by} on {new Date(job.time * 1000).toLocaleDateString()}</p>
                        </div>
    )
}
JobsList.propTypes = {
    job: PropTypes.object,
  };
  