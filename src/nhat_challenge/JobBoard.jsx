import React from 'react';
import JobsList from '../components/JobsList';
const PAGE_SIZE = 6;

function JobBoard(){
    const [isFetching, setIsFetching] = React.useState(false);
    const [jobIds, setJobIds] = React.useState(null);
    const [jobs, setJobs] = React.useState([]);
    const [page, setPage] = React.useState(0);

    async function fetchJobIds(currPage) {
        let jobs = jobIds;
        if (!jobs) {
          const res = await fetch(
            "https://hacker-news.firebaseio.com/v0/jobstories.json"
          );
          jobs = await res.json();
          setJobIds(jobs);
        }
    
        const start_currPage = currPage * PAGE_SIZE;
        const end_currPage = start_currPage + PAGE_SIZE;
        return jobs.slice(start_currPage, end_currPage);
      }

    async function fetchJobs(currPage) {
        const jobIdsForPage = await fetchJobIds(currPage);
    
        setIsFetching(true);
        const jobsForPage = await Promise.all(
          jobIdsForPage.map((jobId) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
              (res) => res.json()
            )
          )
        );
        setJobs([...jobs, ...jobsForPage]);
    
        setIsFetching(false);
      }

    React.useEffect(() => {
        fetchJobs(page);
      }, [page]);

    return (
        <div>
            <h1 className="title">Jobs Board</h1>
            {
                jobIds? (<div className="jobs">
                    {jobs.map((job) => (
                        <JobsList key={job.id} job={job}/>
                    ))}
                </div>) : (<p className="loading">Loading ...</p>)
            }
            
            {jobs.length > 0 && page * PAGE_SIZE + PAGE_SIZE < jobIds.length && (
                <button
                    className="load-more-button"
                    disabled={isFetching}
                    onClick={() => setPage(page + 1)}
                >
                    {isFetching ? "Loading ..." : "Load more jobs"}
                </button>
            )}
                
            
            
        </div>
    )
}
export default JobBoard;