export const formatForkedRepoData = data =>
  data.map(event => ({
    id: event.repo.id,
    name: event.repo.name,
    url: `https://github.com/${event.repo.name}`
  }));

export const formatPullRequestData = data =>
  data.map(event => {
    const isMerged = event.payload.pull_request.merged;
    const state = event.payload.pull_request.state;
    return {
      id: event.id,
      name: event.payload.pull_request.title,
      url: event.payload.pull_request.html_url,
      status: isMerged ? 'merged' : state
    };
  });
