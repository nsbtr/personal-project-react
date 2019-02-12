import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/Login';

const data = [
  {
    id: '9015045671',
    type: 'PushEvent',
    actor: {
      id: 20432291,
      login: 'nsbtr',
      display_login: 'nsbtr',
      gravatar_id: '',
      url: 'https://api.github.com/users/nsbtr',
      avatar_url: 'https://avatars.githubusercontent.com/u/20432291?'
    },
    repo: {
      id: 169333636,
      name: 'hmstephens/bridge-git-tac-toe',
      url: 'https://api.github.com/repos/hmstephens/bridge-git-tac-toe'
    },
    payload: {
      push_id: 3278358028,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '6b88642e610de9e43cf3570cced95540180f4491',
      before: '9ef9f93e2f10e8c730b7a78ab1e176529db688d0',
      commits: [
        {
          sha: '6b88642e610de9e43cf3570cced95540180f4491',
          author: {
            email: 'ngsabater@gmail.com',
            name: 'nsbtr'
          },
          message: 'Nicole: Move 1',
          distinct: true,
          url:
            'https://api.github.com/repos/hmstephens/bridge-git-tac-toe/commits/6b88642e610de9e43cf3570cced95540180f4491'
        }
      ]
    },
    public: true,
    created_at: '2019-02-06T00:47:49Z'
  },
  {
    id: '8989904267',
    type: 'PushEvent',
    actor: {
      id: 20432291,
      login: 'nsbtr',
      display_login: 'nsbtr',
      gravatar_id: '',
      url: 'https://api.github.com/users/nsbtr',
      avatar_url: 'https://avatars.githubusercontent.com/u/20432291?'
    },
    repo: {
      id: 168624938,
      name: 'nsbtr/personal-project-react',
      url: 'https://api.github.com/repos/nsbtr/personal-project-react'
    },
    payload: {
      push_id: 3264719644,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '033919a2f2dc145528f6a4f6ca9cb5a5bfca5d54',
      before: '684ae6d2609dee989b85cfec1f3142c0b281f1bd',
      commits: [
        {
          sha: '033919a2f2dc145528f6a4f6ca9cb5a5bfca5d54',
          author: {
            email: 'ngsabater@gmail.com',
            name: 'nsbtr'
          },
          message: 'initial commit',
          distinct: true,
          url:
            'https://api.github.com/repos/nsbtr/personal-project-react/commits/033919a2f2dc145528f6a4f6ca9cb5a5bfca5d54'
        }
      ]
    },
    public: true,
    created_at: '2019-02-01T02:02:07Z'
  },
  {
    id: '8989832324',
    type: 'ForkEvent',
    actor: {
      id: 20432291,
      login: 'nsbtr',
      display_login: 'nsbtr',
      gravatar_id: '',
      url: 'https://api.github.com/users/nsbtr',
      avatar_url: 'https://avatars.githubusercontent.com/u/20432291?'
    },
    repo: {
      id: 168412238,
      name: 'bridge-school/personal-project-react',
      url: 'https://api.github.com/repos/bridge-school/personal-project-react'
    },
    payload: {
      forkee: {
        id: 168624938,
        node_id: 'MDEwOlJlcG9zaXRvcnkxNjg2MjQ5Mzg=',
        name: 'personal-project-react',
        full_name: 'nsbtr/personal-project-react',
        private: false,
        owner: {
          login: 'nsbtr',
          id: 20432291,
          node_id: 'MDQ6VXNlcjIwNDMyMjkx',
          avatar_url: 'https://avatars0.githubusercontent.com/u/20432291?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/nsbtr',
          html_url: 'https://github.com/nsbtr',
          followers_url: 'https://api.github.com/users/nsbtr/followers',
          following_url:
            'https://api.github.com/users/nsbtr/following{/other_user}',
          gists_url: 'https://api.github.com/users/nsbtr/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/nsbtr/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/nsbtr/subscriptions',
          organizations_url: 'https://api.github.com/users/nsbtr/orgs',
          repos_url: 'https://api.github.com/users/nsbtr/repos',
          events_url: 'https://api.github.com/users/nsbtr/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/nsbtr/received_events',
          type: 'User',
          site_admin: false
        },
        html_url: 'https://github.com/nsbtr/personal-project-react',
        description: null,
        fork: true,
        url: 'https://api.github.com/repos/nsbtr/personal-project-react',
        forks_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/forks',
        keys_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/teams',
        hooks_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/hooks',
        issue_events_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/events',
        assignees_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/tags',
        blobs_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/languages',
        stargazers_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/stargazers',
        contributors_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/contributors',
        subscribers_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/subscribers',
        subscription_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/subscription',
        commits_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/merges',
        archive_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/downloads',
        issues_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/labels{/name}',
        releases_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/nsbtr/personal-project-react/deployments',
        created_at: '2019-02-01T01:40:35Z',
        updated_at: '2019-01-31T16:15:11Z',
        pushed_at: '2019-01-31T16:15:09Z',
        git_url: 'git://github.com/nsbtr/personal-project-react.git',
        ssh_url: 'git@github.com:nsbtr/personal-project-react.git',
        clone_url: 'https://github.com/nsbtr/personal-project-react.git',
        svn_url: 'https://github.com/nsbtr/personal-project-react',
        homepage: null,
        size: 4,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        public: true
      }
    },
    public: true,
    created_at: '2019-02-01T01:40:35Z',
    org: {
      id: 30509997,
      login: 'bridge-school',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/bridge-school',
      avatar_url: 'https://avatars.githubusercontent.com/u/30509997?'
    }
  },
  {
    id: '8734830991',
    type: 'PushEvent',
    actor: {
      id: 20432291,
      login: 'nsbtr',
      display_login: 'nsbtr',
      gravatar_id: '',
      url: 'https://api.github.com/users/nsbtr',
      avatar_url: 'https://avatars.githubusercontent.com/u/20432291?'
    },
    repo: {
      id: 161289955,
      name: 'nsbtr/giphy-search-tool',
      url: 'https://api.github.com/repos/nsbtr/giphy-search-tool'
    },
    payload: {
      push_id: 3127439099,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '4e66eec12e667be1aeaa6663ea521c4577e72311',
      before: '0438e1732f66e6e02fe2b32d43f9aa9e9a756e8f',
      commits: [
        {
          sha: '4e66eec12e667be1aeaa6663ea521c4577e72311',
          author: {
            email: 'nicole.sabater@climaxmedia.com',
            name: 'Nicole Sabater'
          },
          message: 'Update README.md',
          distinct: true,
          url:
            'https://api.github.com/repos/nsbtr/giphy-search-tool/commits/4e66eec12e667be1aeaa6663ea521c4577e72311'
        }
      ]
    },
    public: true,
    created_at: '2018-12-11T15:25:33Z'
  },
  {
    id: '8731864799',
    type: 'PushEvent',
    actor: {
      id: 20432291,
      login: 'nsbtr',
      display_login: 'nsbtr',
      gravatar_id: '',
      url: 'https://api.github.com/users/nsbtr',
      avatar_url: 'https://avatars.githubusercontent.com/u/20432291?'
    },
    repo: {
      id: 161289955,
      name: 'nsbtr/giphy-search-tool',
      url: 'https://api.github.com/repos/nsbtr/giphy-search-tool'
    },
    payload: {
      push_id: 3125908292,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '0438e1732f66e6e02fe2b32d43f9aa9e9a756e8f',
      before: 'e78439e5f2aaf8f152ee21542e83c2e2f1312a4b',
      commits: [
        {
          sha: '0438e1732f66e6e02fe2b32d43f9aa9e9a756e8f',
          author: {
            email: 'nicole.sabater@climaxmedia.com',
            name: 'Nicole Sabater'
          },
          message: 'Update README.md',
          distinct: true,
          url:
            'https://api.github.com/repos/nsbtr/giphy-search-tool/commits/0438e1732f66e6e02fe2b32d43f9aa9e9a756e8f'
        }
      ]
    },
    public: true,
    created_at: '2018-12-11T06:54:02Z'
  },
  {
    id: '8731850439',
    type: 'CreateEvent',
    actor: {
      id: 20432291,
      login: 'nsbtr',
      display_login: 'nsbtr',
      gravatar_id: '',
      url: 'https://api.github.com/users/nsbtr',
      avatar_url: 'https://avatars.githubusercontent.com/u/20432291?'
    },
    repo: {
      id: 161289955,
      name: 'nsbtr/giphy-search-tool',
      url: 'https://api.github.com/repos/nsbtr/giphy-search-tool'
    },
    payload: {
      ref: 'master',
      ref_type: 'branch',
      master_branch: 'master',
      description: null,
      pusher_type: 'user'
    },
    public: true,
    created_at: '2018-12-11T06:50:12Z'
  },
  {
    id: '8731848580',
    type: 'CreateEvent',
    actor: {
      id: 20432291,
      login: 'nsbtr',
      display_login: 'nsbtr',
      gravatar_id: '',
      url: 'https://api.github.com/users/nsbtr',
      avatar_url: 'https://avatars.githubusercontent.com/u/20432291?'
    },
    repo: {
      id: 161289955,
      name: 'nsbtr/giphy-search-tool',
      url: 'https://api.github.com/repos/nsbtr/giphy-search-tool'
    },
    payload: {
      ref: null,
      ref_type: 'repository',
      master_branch: 'master',
      description: null,
      pusher_type: 'user'
    },
    public: true,
    created_at: '2018-12-11T06:49:43Z'
  },

  {
    id: '9048595388',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3296408778,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/redux-solution',
      head: 'bda1106521753fdfedbc20656006a891b6c2fb2e',
      before: 'ce9e7a8f321085460d854c658711388e33a75c5e',
      commits: [
        {
          sha: 'bda1106521753fdfedbc20656006a891b6c2fb2e',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'switched event items to lists',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/bda1106521753fdfedbc20656006a891b6c2fb2e'
        }
      ]
    },
    public: true,
    created_at: '2019-02-12T00:44:36Z'
  },
  {
    id: '9048552033',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3296385278,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/redux-solution',
      head: 'ce9e7a8f321085460d854c658711388e33a75c5e',
      before: '76f95172845b6dda68f96225db430aa16cd2fd27',
      commits: [
        {
          sha: 'ce9e7a8f321085460d854c658711388e33a75c5e',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'basic functionaity working',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/ce9e7a8f321085460d854c658711388e33a75c5e'
        }
      ]
    },
    public: true,
    created_at: '2019-02-12T00:33:17Z'
  },
  {
    id: '9047622581',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3295890739,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/redux-solution',
      head: '76f95172845b6dda68f96225db430aa16cd2fd27',
      before: 'd02090670c38e4fa9a764818ef6b729858d8ea18',
      commits: [
        {
          sha: '76f95172845b6dda68f96225db430aa16cd2fd27',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'Refactoring reducers',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/76f95172845b6dda68f96225db430aa16cd2fd27'
        }
      ]
    },
    public: true,
    created_at: '2019-02-11T21:25:57Z'
  },
  {
    id: '9041100422',
    type: 'WatchEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 107678987,
      name: 'russellgoldenberg/scrollama',
      url: 'https://api.github.com/repos/russellgoldenberg/scrollama'
    },
    payload: {
      action: 'started'
    },
    public: true,
    created_at: '2019-02-10T21:38:47Z'
  },
  {
    id: '9040921236',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3292286006,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/redux-solution',
      head: 'd02090670c38e4fa9a764818ef6b729858d8ea18',
      before: '4463d8b6f2e56b30a02b0ec8269710220a608337',
      commits: [
        {
          sha: 'd02090670c38e4fa9a764818ef6b729858d8ea18',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'Connected components to Redux',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/d02090670c38e4fa9a764818ef6b729858d8ea18'
        }
      ]
    },
    public: true,
    created_at: '2019-02-10T20:17:09Z'
  },
  {
    id: '9040832318',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3292227826,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/redux-solution',
      head: '4463d8b6f2e56b30a02b0ec8269710220a608337',
      before: '832e785196675bdf2b4fa5b68aa3088b22758480',
      commits: [
        {
          sha: '4463d8b6f2e56b30a02b0ec8269710220a608337',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'Added Header and Footer components',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/4463d8b6f2e56b30a02b0ec8269710220a608337'
        }
      ]
    },
    public: true,
    created_at: '2019-02-10T19:34:39Z'
  },
  {
    id: '9040786224',
    type: 'WatchEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 169638990,
      name: 'AbdellaToronto/component-writing-and-redux',
      url:
        'https://api.github.com/repos/AbdellaToronto/component-writing-and-redux'
    },
    payload: {
      action: 'started'
    },
    public: true,
    created_at: '2019-02-10T19:11:54Z'
  },
  {
    id: '9040665583',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3292120665,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/redux-solution',
      head: '832e785196675bdf2b4fa5b68aa3088b22758480',
      before: '80e14771525e7d0990d981cc2ee1723ffc2a7813',
      commits: [
        {
          sha: '832e785196675bdf2b4fa5b68aa3088b22758480',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'implementing redux',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/832e785196675bdf2b4fa5b68aa3088b22758480'
        }
      ]
    },
    public: true,
    created_at: '2019-02-10T18:13:16Z'
  },
  {
    id: '9040338257',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3291911591,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/redux-solution',
      head: '80e14771525e7d0990d981cc2ee1723ffc2a7813',
      before: '5f0389fd27877fec8c0961bb1bfc82a3c8139ba2',
      commits: [
        {
          sha: '80e14771525e7d0990d981cc2ee1723ffc2a7813',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'beginning redux implementation',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/80e14771525e7d0990d981cc2ee1723ffc2a7813'
        }
      ]
    },
    public: true,
    created_at: '2019-02-10T15:33:15Z'
  },
  {
    id: '9040336112',
    type: 'CreateEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      ref: 'redux-solution',
      ref_type: 'branch',
      master_branch: 'master',
      description: null,
      pusher_type: 'user'
    },
    public: true,
    created_at: '2019-02-10T15:32:13Z'
  },
  {
    id: '9036981041',
    type: 'PullRequestEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 134622274,
      name: 'team-jlo/kithub',
      url: 'https://api.github.com/repos/team-jlo/kithub'
    },
    payload: {
      action: 'closed',
      number: 70,
      pull_request: {
        url: 'https://api.github.com/repos/team-jlo/kithub/pulls/70',
        id: 250960108,
        node_id: 'MDExOlB1bGxSZXF1ZXN0MjUwOTYwMTA4',
        html_url: 'https://github.com/team-jlo/kithub/pull/70',
        diff_url: 'https://github.com/team-jlo/kithub/pull/70.diff',
        patch_url: 'https://github.com/team-jlo/kithub/pull/70.patch',
        issue_url: 'https://api.github.com/repos/team-jlo/kithub/issues/70',
        number: 70,
        state: 'closed',
        locked: false,
        title: 'Update Home.js -- Testing Github API',
        user: {
          login: 'lauralouiset',
          id: 35981662,
          node_id: 'MDQ6VXNlcjM1OTgxNjYy',
          avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/lauralouiset',
          html_url: 'https://github.com/lauralouiset',
          followers_url: 'https://api.github.com/users/lauralouiset/followers',
          following_url:
            'https://api.github.com/users/lauralouiset/following{/other_user}',
          gists_url:
            'https://api.github.com/users/lauralouiset/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/lauralouiset/subscriptions',
          organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
          repos_url: 'https://api.github.com/users/lauralouiset/repos',
          events_url:
            'https://api.github.com/users/lauralouiset/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/lauralouiset/received_events',
          type: 'User',
          site_admin: false
        },
        body: '',
        created_at: '2019-02-07T00:50:47Z',
        updated_at: '2019-02-09T05:15:43Z',
        closed_at: '2019-02-09T05:15:43Z',
        merged_at: null,
        merge_commit_sha: 'c44d7d5aa75fbe505c5e047fe9ad67af25ab5ac3',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/70/commits',
        review_comments_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/70/comments',
        review_comment_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/team-jlo/kithub/issues/70/comments',
        statuses_url:
          'https://api.github.com/repos/team-jlo/kithub/statuses/e11dc82e60579af02345cadc33c43dc8c85889c8',
        head: {
          label: 'lauralouiset:master',
          ref: 'master',
          sha: 'e11dc82e60579af02345cadc33c43dc8c85889c8',
          user: {
            login: 'lauralouiset',
            id: 35981662,
            node_id: 'MDQ6VXNlcjM1OTgxNjYy',
            avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/lauralouiset',
            html_url: 'https://github.com/lauralouiset',
            followers_url:
              'https://api.github.com/users/lauralouiset/followers',
            following_url:
              'https://api.github.com/users/lauralouiset/following{/other_user}',
            gists_url:
              'https://api.github.com/users/lauralouiset/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/lauralouiset/subscriptions',
            organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
            repos_url: 'https://api.github.com/users/lauralouiset/repos',
            events_url:
              'https://api.github.com/users/lauralouiset/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/lauralouiset/received_events',
            type: 'User',
            site_admin: false
          },
          repo: {
            id: 134624183,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjQxODM=',
            name: 'kithub',
            full_name: 'lauralouiset/kithub',
            private: false,
            owner: {
              login: 'lauralouiset',
              id: 35981662,
              node_id: 'MDQ6VXNlcjM1OTgxNjYy',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/35981662?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/lauralouiset',
              html_url: 'https://github.com/lauralouiset',
              followers_url:
                'https://api.github.com/users/lauralouiset/followers',
              following_url:
                'https://api.github.com/users/lauralouiset/following{/other_user}',
              gists_url:
                'https://api.github.com/users/lauralouiset/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/lauralouiset/subscriptions',
              organizations_url:
                'https://api.github.com/users/lauralouiset/orgs',
              repos_url: 'https://api.github.com/users/lauralouiset/repos',
              events_url:
                'https://api.github.com/users/lauralouiset/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/lauralouiset/received_events',
              type: 'User',
              site_admin: false
            },
            html_url: 'https://github.com/lauralouiset/kithub',
            description: null,
            fork: true,
            url: 'https://api.github.com/repos/lauralouiset/kithub',
            forks_url: 'https://api.github.com/repos/lauralouiset/kithub/forks',
            keys_url:
              'https://api.github.com/repos/lauralouiset/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/lauralouiset/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/lauralouiset/kithub/teams',
            hooks_url: 'https://api.github.com/repos/lauralouiset/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/lauralouiset/kithub/events',
            assignees_url:
              'https://api.github.com/repos/lauralouiset/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/lauralouiset/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/lauralouiset/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/lauralouiset/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/lauralouiset/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/lauralouiset/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/lauralouiset/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/lauralouiset/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/lauralouiset/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/lauralouiset/kithub/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/lauralouiset/kithub/merges',
            archive_url:
              'https://api.github.com/repos/lauralouiset/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/lauralouiset/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/lauralouiset/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/lauralouiset/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/lauralouiset/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/lauralouiset/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/lauralouiset/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/lauralouiset/kithub/deployments',
            created_at: '2018-05-23T20:51:36Z',
            updated_at: '2019-02-07T00:50:16Z',
            pushed_at: '2019-02-07T00:50:15Z',
            git_url: 'git://github.com/lauralouiset/kithub.git',
            ssh_url: 'git@github.com:lauralouiset/kithub.git',
            clone_url: 'https://github.com/lauralouiset/kithub.git',
            svn_url: 'https://github.com/lauralouiset/kithub',
            homepage: null,
            size: 448,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
          }
        },
        base: {
          label: 'team-jlo:master',
          ref: 'master',
          sha: 'a06a59df060bf1088d329aeac406acfbcc7ac82f',
          user: {
            login: 'team-jlo',
            id: 39570555,
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
            avatar_url: 'https://avatars0.githubusercontent.com/u/39570555?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/team-jlo',
            html_url: 'https://github.com/team-jlo',
            followers_url: 'https://api.github.com/users/team-jlo/followers',
            following_url:
              'https://api.github.com/users/team-jlo/following{/other_user}',
            gists_url: 'https://api.github.com/users/team-jlo/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/team-jlo/subscriptions',
            organizations_url: 'https://api.github.com/users/team-jlo/orgs',
            repos_url: 'https://api.github.com/users/team-jlo/repos',
            events_url:
              'https://api.github.com/users/team-jlo/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/team-jlo/received_events',
            type: 'Organization',
            site_admin: false
          },
          repo: {
            id: 134622274,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjIyNzQ=',
            name: 'kithub',
            full_name: 'team-jlo/kithub',
            private: false,
            owner: {
              login: 'team-jlo',
              id: 39570555,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/39570555?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/team-jlo',
              html_url: 'https://github.com/team-jlo',
              followers_url: 'https://api.github.com/users/team-jlo/followers',
              following_url:
                'https://api.github.com/users/team-jlo/following{/other_user}',
              gists_url:
                'https://api.github.com/users/team-jlo/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/team-jlo/subscriptions',
              organizations_url: 'https://api.github.com/users/team-jlo/orgs',
              repos_url: 'https://api.github.com/users/team-jlo/repos',
              events_url:
                'https://api.github.com/users/team-jlo/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/team-jlo/received_events',
              type: 'Organization',
              site_admin: false
            },
            html_url: 'https://github.com/team-jlo/kithub',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/team-jlo/kithub',
            forks_url: 'https://api.github.com/repos/team-jlo/kithub/forks',
            keys_url:
              'https://api.github.com/repos/team-jlo/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/team-jlo/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/team-jlo/kithub/teams',
            hooks_url: 'https://api.github.com/repos/team-jlo/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/events{/number}',
            events_url: 'https://api.github.com/repos/team-jlo/kithub/events',
            assignees_url:
              'https://api.github.com/repos/team-jlo/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/team-jlo/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/team-jlo/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/team-jlo/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/team-jlo/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/team-jlo/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/team-jlo/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/team-jlo/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/team-jlo/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/team-jlo/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/team-jlo/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/team-jlo/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/team-jlo/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/team-jlo/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/team-jlo/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/team-jlo/kithub/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/team-jlo/kithub/merges',
            archive_url:
              'https://api.github.com/repos/team-jlo/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/team-jlo/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/team-jlo/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/team-jlo/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/team-jlo/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/team-jlo/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/team-jlo/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/team-jlo/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/team-jlo/kithub/deployments',
            created_at: '2018-05-23T20:30:55Z',
            updated_at: '2019-02-07T00:46:30Z',
            pushed_at: '2019-02-07T00:50:48Z',
            git_url: 'git://github.com/team-jlo/kithub.git',
            ssh_url: 'git@github.com:team-jlo/kithub.git',
            clone_url: 'https://github.com/team-jlo/kithub.git',
            svn_url: 'https://github.com/team-jlo/kithub',
            homepage: null,
            size: 449,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 3,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: null,
            forks: 3,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
          }
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/team-jlo/kithub/pulls/70'
          },
          html: {
            href: 'https://github.com/team-jlo/kithub/pull/70'
          },
          issue: {
            href: 'https://api.github.com/repos/team-jlo/kithub/issues/70'
          },
          comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/issues/70/comments'
          },
          review_comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/70/comments'
          },
          review_comment: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}'
          },
          commits: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/70/commits'
          },
          statuses: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/statuses/e11dc82e60579af02345cadc33c43dc8c85889c8'
          }
        },
        author_association: 'CONTRIBUTOR',
        merged: false,
        mergeable: true,
        rebaseable: true,
        mergeable_state: 'clean',
        merged_by: null,
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 3,
        deletions: 1,
        changed_files: 1
      }
    },
    public: true,
    created_at: '2019-02-09T05:15:43Z',
    org: {
      id: 39570555,
      login: 'team-jlo',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/team-jlo',
      avatar_url: 'https://avatars.githubusercontent.com/u/39570555?'
    }
  },
  {
    id: '9036973549',
    type: 'WatchEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 10270250,
      name: 'facebook/react',
      url: 'https://api.github.com/repos/facebook/react'
    },
    payload: {
      action: 'started'
    },
    public: true,
    created_at: '2019-02-09T05:10:08Z',
    org: {
      id: 69631,
      login: 'facebook',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/facebook',
      avatar_url: 'https://avatars.githubusercontent.com/u/69631?'
    }
  },
  {
    id: '9029881960',
    type: 'WatchEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 141910387,
      name: 'Jaredk3nt/laserwave',
      url: 'https://api.github.com/repos/Jaredk3nt/laserwave'
    },
    payload: {
      action: 'started'
    },
    public: true,
    created_at: '2019-02-08T00:53:31Z'
  },
  {
    id: '9029856530',
    type: 'WatchEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 105782124,
      name: 'leveluptuts/level-up-vscode-theme',
      url: 'https://api.github.com/repos/leveluptuts/level-up-vscode-theme'
    },
    payload: {
      action: 'started'
    },
    public: true,
    created_at: '2019-02-08T00:46:11Z',
    org: {
      id: 16696387,
      login: 'leveluptuts',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/leveluptuts',
      avatar_url: 'https://avatars.githubusercontent.com/u/16696387?'
    }
  },
  {
    id: '9027869901',
    type: 'CreateEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 169626995,
      name: 'lauralouiset/reduxtagram',
      url: 'https://api.github.com/repos/lauralouiset/reduxtagram'
    },
    payload: {
      ref: 'master',
      ref_type: 'branch',
      master_branch: 'master',
      description: "Working along with Wes Bos' Redux course",
      pusher_type: 'user'
    },
    public: true,
    created_at: '2019-02-07T19:18:04Z'
  },
  {
    id: '9027835216',
    type: 'CreateEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 169626995,
      name: 'lauralouiset/reduxtagram',
      url: 'https://api.github.com/repos/lauralouiset/reduxtagram'
    },
    payload: {
      ref: null,
      ref_type: 'repository',
      master_branch: 'master',
      description: "Working along with Wes Bos' Redux course",
      pusher_type: 'user'
    },
    public: true,
    created_at: '2019-02-07T19:12:24Z'
  },
  {
    id: '9027446955',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3284844975,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '5f0389fd27877fec8c0961bb1bfc82a3c8139ba2',
      before: '3eb4e0b154e01e71e6347954285edd1e89ddf8b1',
      commits: [
        {
          sha: '5f0389fd27877fec8c0961bb1bfc82a3c8139ba2',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'added update prop',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/5f0389fd27877fec8c0961bb1bfc82a3c8139ba2'
        }
      ]
    },
    public: true,
    created_at: '2019-02-07T18:09:31Z'
  },
  {
    id: '9022737690',
    type: 'WatchEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 135786093,
      name: 'sw-yx/react-typescript-cheatsheet',
      url: 'https://api.github.com/repos/sw-yx/react-typescript-cheatsheet'
    },
    payload: {
      action: 'started'
    },
    public: true,
    created_at: '2019-02-07T03:13:01Z'
  },
  {
    id: '9022599826',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3282312001,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '3eb4e0b154e01e71e6347954285edd1e89ddf8b1',
      before: 'dd4430161cd962585e0353ec9423536ded3ea4de',
      commits: [
        {
          sha: '3eb4e0b154e01e71e6347954285edd1e89ddf8b1',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'Step One finished - Functional in React',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/3eb4e0b154e01e71e6347954285edd1e89ddf8b1'
        }
      ]
    },
    public: true,
    created_at: '2019-02-07T02:26:24Z'
  },
  {
    id: '9022577300',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3282299676,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: 'dd4430161cd962585e0353ec9423536ded3ea4de',
      before: '0a82c2e578905a3373fa95bb1be80f1d8068d9b1',
      commits: [
        {
          sha: 'dd4430161cd962585e0353ec9423536ded3ea4de',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'Pull Request function working, plus Error Handling',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/dd4430161cd962585e0353ec9423536ded3ea4de'
        }
      ]
    },
    public: true,
    created_at: '2019-02-07T02:18:54Z'
  },
  {
    id: '9022312402',
    type: 'WatchEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 148172621,
      name: 'Coding-Coach/coding-coach',
      url: 'https://api.github.com/repos/Coding-Coach/coding-coach'
    },
    payload: {
      action: 'started'
    },
    public: true,
    created_at: '2019-02-07T00:59:04Z',
    org: {
      id: 43143751,
      login: 'Coding-Coach',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/Coding-Coach',
      avatar_url: 'https://avatars.githubusercontent.com/u/43143751?'
    }
  },
  {
    id: '9022282717',
    type: 'PullRequestEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 134622274,
      name: 'team-jlo/kithub',
      url: 'https://api.github.com/repos/team-jlo/kithub'
    },
    payload: {
      action: 'opened',
      number: 70,
      pull_request: {
        url: 'https://api.github.com/repos/team-jlo/kithub/pulls/70',
        id: 250960108,
        node_id: 'MDExOlB1bGxSZXF1ZXN0MjUwOTYwMTA4',
        html_url: 'https://github.com/team-jlo/kithub/pull/70',
        diff_url: 'https://github.com/team-jlo/kithub/pull/70.diff',
        patch_url: 'https://github.com/team-jlo/kithub/pull/70.patch',
        issue_url: 'https://api.github.com/repos/team-jlo/kithub/issues/70',
        number: 70,
        state: 'open',
        locked: false,
        title: 'Update Home.js -- Testing Github API',
        user: {
          login: 'lauralouiset',
          id: 35981662,
          node_id: 'MDQ6VXNlcjM1OTgxNjYy',
          avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/lauralouiset',
          html_url: 'https://github.com/lauralouiset',
          followers_url: 'https://api.github.com/users/lauralouiset/followers',
          following_url:
            'https://api.github.com/users/lauralouiset/following{/other_user}',
          gists_url:
            'https://api.github.com/users/lauralouiset/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/lauralouiset/subscriptions',
          organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
          repos_url: 'https://api.github.com/users/lauralouiset/repos',
          events_url:
            'https://api.github.com/users/lauralouiset/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/lauralouiset/received_events',
          type: 'User',
          site_admin: false
        },
        body: '',
        created_at: '2019-02-07T00:50:47Z',
        updated_at: '2019-02-07T00:50:47Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: null,
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/70/commits',
        review_comments_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/70/comments',
        review_comment_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/team-jlo/kithub/issues/70/comments',
        statuses_url:
          'https://api.github.com/repos/team-jlo/kithub/statuses/e11dc82e60579af02345cadc33c43dc8c85889c8',
        head: {
          label: 'lauralouiset:master',
          ref: 'master',
          sha: 'e11dc82e60579af02345cadc33c43dc8c85889c8',
          user: {
            login: 'lauralouiset',
            id: 35981662,
            node_id: 'MDQ6VXNlcjM1OTgxNjYy',
            avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/lauralouiset',
            html_url: 'https://github.com/lauralouiset',
            followers_url:
              'https://api.github.com/users/lauralouiset/followers',
            following_url:
              'https://api.github.com/users/lauralouiset/following{/other_user}',
            gists_url:
              'https://api.github.com/users/lauralouiset/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/lauralouiset/subscriptions',
            organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
            repos_url: 'https://api.github.com/users/lauralouiset/repos',
            events_url:
              'https://api.github.com/users/lauralouiset/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/lauralouiset/received_events',
            type: 'User',
            site_admin: false
          },
          repo: {
            id: 134624183,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjQxODM=',
            name: 'kithub',
            full_name: 'lauralouiset/kithub',
            private: false,
            owner: {
              login: 'lauralouiset',
              id: 35981662,
              node_id: 'MDQ6VXNlcjM1OTgxNjYy',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/35981662?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/lauralouiset',
              html_url: 'https://github.com/lauralouiset',
              followers_url:
                'https://api.github.com/users/lauralouiset/followers',
              following_url:
                'https://api.github.com/users/lauralouiset/following{/other_user}',
              gists_url:
                'https://api.github.com/users/lauralouiset/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/lauralouiset/subscriptions',
              organizations_url:
                'https://api.github.com/users/lauralouiset/orgs',
              repos_url: 'https://api.github.com/users/lauralouiset/repos',
              events_url:
                'https://api.github.com/users/lauralouiset/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/lauralouiset/received_events',
              type: 'User',
              site_admin: false
            },
            html_url: 'https://github.com/lauralouiset/kithub',
            description: null,
            fork: true,
            url: 'https://api.github.com/repos/lauralouiset/kithub',
            forks_url: 'https://api.github.com/repos/lauralouiset/kithub/forks',
            keys_url:
              'https://api.github.com/repos/lauralouiset/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/lauralouiset/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/lauralouiset/kithub/teams',
            hooks_url: 'https://api.github.com/repos/lauralouiset/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/lauralouiset/kithub/events',
            assignees_url:
              'https://api.github.com/repos/lauralouiset/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/lauralouiset/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/lauralouiset/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/lauralouiset/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/lauralouiset/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/lauralouiset/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/lauralouiset/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/lauralouiset/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/lauralouiset/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/lauralouiset/kithub/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/lauralouiset/kithub/merges',
            archive_url:
              'https://api.github.com/repos/lauralouiset/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/lauralouiset/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/lauralouiset/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/lauralouiset/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/lauralouiset/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/lauralouiset/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/lauralouiset/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/lauralouiset/kithub/deployments',
            created_at: '2018-05-23T20:51:36Z',
            updated_at: '2019-02-07T00:50:16Z',
            pushed_at: '2019-02-07T00:50:15Z',
            git_url: 'git://github.com/lauralouiset/kithub.git',
            ssh_url: 'git@github.com:lauralouiset/kithub.git',
            clone_url: 'https://github.com/lauralouiset/kithub.git',
            svn_url: 'https://github.com/lauralouiset/kithub',
            homepage: null,
            size: 460,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
          }
        },
        base: {
          label: 'team-jlo:master',
          ref: 'master',
          sha: 'a06a59df060bf1088d329aeac406acfbcc7ac82f',
          user: {
            login: 'team-jlo',
            id: 39570555,
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
            avatar_url: 'https://avatars0.githubusercontent.com/u/39570555?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/team-jlo',
            html_url: 'https://github.com/team-jlo',
            followers_url: 'https://api.github.com/users/team-jlo/followers',
            following_url:
              'https://api.github.com/users/team-jlo/following{/other_user}',
            gists_url: 'https://api.github.com/users/team-jlo/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/team-jlo/subscriptions',
            organizations_url: 'https://api.github.com/users/team-jlo/orgs',
            repos_url: 'https://api.github.com/users/team-jlo/repos',
            events_url:
              'https://api.github.com/users/team-jlo/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/team-jlo/received_events',
            type: 'Organization',
            site_admin: false
          },
          repo: {
            id: 134622274,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjIyNzQ=',
            name: 'kithub',
            full_name: 'team-jlo/kithub',
            private: false,
            owner: {
              login: 'team-jlo',
              id: 39570555,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/39570555?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/team-jlo',
              html_url: 'https://github.com/team-jlo',
              followers_url: 'https://api.github.com/users/team-jlo/followers',
              following_url:
                'https://api.github.com/users/team-jlo/following{/other_user}',
              gists_url:
                'https://api.github.com/users/team-jlo/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/team-jlo/subscriptions',
              organizations_url: 'https://api.github.com/users/team-jlo/orgs',
              repos_url: 'https://api.github.com/users/team-jlo/repos',
              events_url:
                'https://api.github.com/users/team-jlo/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/team-jlo/received_events',
              type: 'Organization',
              site_admin: false
            },
            html_url: 'https://github.com/team-jlo/kithub',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/team-jlo/kithub',
            forks_url: 'https://api.github.com/repos/team-jlo/kithub/forks',
            keys_url:
              'https://api.github.com/repos/team-jlo/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/team-jlo/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/team-jlo/kithub/teams',
            hooks_url: 'https://api.github.com/repos/team-jlo/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/events{/number}',
            events_url: 'https://api.github.com/repos/team-jlo/kithub/events',
            assignees_url:
              'https://api.github.com/repos/team-jlo/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/team-jlo/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/team-jlo/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/team-jlo/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/team-jlo/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/team-jlo/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/team-jlo/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/team-jlo/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/team-jlo/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/team-jlo/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/team-jlo/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/team-jlo/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/team-jlo/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/team-jlo/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/team-jlo/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/team-jlo/kithub/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/team-jlo/kithub/merges',
            archive_url:
              'https://api.github.com/repos/team-jlo/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/team-jlo/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/team-jlo/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/team-jlo/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/team-jlo/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/team-jlo/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/team-jlo/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/team-jlo/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/team-jlo/kithub/deployments',
            created_at: '2018-05-23T20:30:55Z',
            updated_at: '2019-02-07T00:46:30Z',
            pushed_at: '2019-02-07T00:46:29Z',
            git_url: 'git://github.com/team-jlo/kithub.git',
            ssh_url: 'git@github.com:team-jlo/kithub.git',
            clone_url: 'https://github.com/team-jlo/kithub.git',
            svn_url: 'https://github.com/team-jlo/kithub',
            homepage: null,
            size: 462,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 3,
            mirror_url: null,
            archived: false,
            open_issues_count: 1,
            license: null,
            forks: 3,
            open_issues: 1,
            watchers: 0,
            default_branch: 'master'
          }
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/team-jlo/kithub/pulls/70'
          },
          html: {
            href: 'https://github.com/team-jlo/kithub/pull/70'
          },
          issue: {
            href: 'https://api.github.com/repos/team-jlo/kithub/issues/70'
          },
          comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/issues/70/comments'
          },
          review_comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/70/comments'
          },
          review_comment: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}'
          },
          commits: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/70/commits'
          },
          statuses: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/statuses/e11dc82e60579af02345cadc33c43dc8c85889c8'
          }
        },
        author_association: 'CONTRIBUTOR',
        merged: false,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: null,
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: true,
        commits: 1,
        additions: 3,
        deletions: 1,
        changed_files: 1
      }
    },
    public: true,
    created_at: '2019-02-07T00:50:47Z',
    org: {
      id: 39570555,
      login: 'team-jlo',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/team-jlo',
      avatar_url: 'https://avatars.githubusercontent.com/u/39570555?'
    }
  },
  {
    id: '9022280812',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 134624183,
      name: 'lauralouiset/kithub',
      url: 'https://api.github.com/repos/lauralouiset/kithub'
    },
    payload: {
      push_id: 3282136427,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: 'e11dc82e60579af02345cadc33c43dc8c85889c8',
      before: 'fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
      commits: [
        {
          sha: 'e11dc82e60579af02345cadc33c43dc8c85889c8',
          author: {
            email: 'lauralouise@lauraloui.se',
            name: 'Laura-Louise'
          },
          message: 'Update Home.js',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/kithub/commits/e11dc82e60579af02345cadc33c43dc8c85889c8'
        }
      ]
    },
    public: true,
    created_at: '2019-02-07T00:50:15Z'
  },
  {
    id: '9022267312',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 134622274,
      name: 'team-jlo/kithub',
      url: 'https://api.github.com/repos/team-jlo/kithub'
    },
    payload: {
      push_id: 3282129112,
      size: 3,
      distinct_size: 3,
      ref: 'refs/heads/master',
      head: 'a06a59df060bf1088d329aeac406acfbcc7ac82f',
      before: '4f97e1c3b19411c12640f93c9d2bde46518d668d',
      commits: [
        {
          sha: '32619c023e8b0e426088ce06988166a21665980e',
          author: {
            email: '35981662+lauralouiset@users.noreply.github.com',
            name: 'Laura-Louise'
          },
          message: 'Update README.md',
          distinct: true,
          url:
            'https://api.github.com/repos/team-jlo/kithub/commits/32619c023e8b0e426088ce06988166a21665980e'
        },
        {
          sha: 'fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
          author: {
            email: 'lauralouise@lauraloui.se',
            name: 'Laura-Louise'
          },
          message: 'Update README.md',
          distinct: true,
          url:
            'https://api.github.com/repos/team-jlo/kithub/commits/fd0564b1c0c4cb022ac0981a9a23f1e1136d0203'
        },
        {
          sha: 'a06a59df060bf1088d329aeac406acfbcc7ac82f',
          author: {
            email: 'lauralouise@lauraloui.se',
            name: 'Laura-Louise'
          },
          message:
            'Merge pull request #69 from lauralouiset/master\n\nTesting Github API',
          distinct: true,
          url:
            'https://api.github.com/repos/team-jlo/kithub/commits/a06a59df060bf1088d329aeac406acfbcc7ac82f'
        }
      ]
    },
    public: true,
    created_at: '2019-02-07T00:46:29Z',
    org: {
      id: 39570555,
      login: 'team-jlo',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/team-jlo',
      avatar_url: 'https://avatars.githubusercontent.com/u/39570555?'
    }
  },
  {
    id: '9022267263',
    type: 'PullRequestEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 134622274,
      name: 'team-jlo/kithub',
      url: 'https://api.github.com/repos/team-jlo/kithub'
    },
    payload: {
      action: 'closed',
      number: 69,
      pull_request: {
        url: 'https://api.github.com/repos/team-jlo/kithub/pulls/69',
        id: 250959151,
        node_id: 'MDExOlB1bGxSZXF1ZXN0MjUwOTU5MTUx',
        html_url: 'https://github.com/team-jlo/kithub/pull/69',
        diff_url: 'https://github.com/team-jlo/kithub/pull/69.diff',
        patch_url: 'https://github.com/team-jlo/kithub/pull/69.patch',
        issue_url: 'https://api.github.com/repos/team-jlo/kithub/issues/69',
        number: 69,
        state: 'closed',
        locked: false,
        title: 'Testing Github API',
        user: {
          login: 'lauralouiset',
          id: 35981662,
          node_id: 'MDQ6VXNlcjM1OTgxNjYy',
          avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/lauralouiset',
          html_url: 'https://github.com/lauralouiset',
          followers_url: 'https://api.github.com/users/lauralouiset/followers',
          following_url:
            'https://api.github.com/users/lauralouiset/following{/other_user}',
          gists_url:
            'https://api.github.com/users/lauralouiset/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/lauralouiset/subscriptions',
          organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
          repos_url: 'https://api.github.com/users/lauralouiset/repos',
          events_url:
            'https://api.github.com/users/lauralouiset/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/lauralouiset/received_events',
          type: 'User',
          site_admin: false
        },
        body: '',
        created_at: '2019-02-07T00:45:12Z',
        updated_at: '2019-02-07T00:46:29Z',
        closed_at: '2019-02-07T00:46:28Z',
        merged_at: '2019-02-07T00:46:28Z',
        merge_commit_sha: 'a06a59df060bf1088d329aeac406acfbcc7ac82f',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/69/commits',
        review_comments_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/69/comments',
        review_comment_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/team-jlo/kithub/issues/69/comments',
        statuses_url:
          'https://api.github.com/repos/team-jlo/kithub/statuses/fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
        head: {
          label: 'lauralouiset:master',
          ref: 'master',
          sha: 'fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
          user: {
            login: 'lauralouiset',
            id: 35981662,
            node_id: 'MDQ6VXNlcjM1OTgxNjYy',
            avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/lauralouiset',
            html_url: 'https://github.com/lauralouiset',
            followers_url:
              'https://api.github.com/users/lauralouiset/followers',
            following_url:
              'https://api.github.com/users/lauralouiset/following{/other_user}',
            gists_url:
              'https://api.github.com/users/lauralouiset/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/lauralouiset/subscriptions',
            organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
            repos_url: 'https://api.github.com/users/lauralouiset/repos',
            events_url:
              'https://api.github.com/users/lauralouiset/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/lauralouiset/received_events',
            type: 'User',
            site_admin: false
          },
          repo: {
            id: 134624183,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjQxODM=',
            name: 'kithub',
            full_name: 'lauralouiset/kithub',
            private: false,
            owner: {
              login: 'lauralouiset',
              id: 35981662,
              node_id: 'MDQ6VXNlcjM1OTgxNjYy',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/35981662?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/lauralouiset',
              html_url: 'https://github.com/lauralouiset',
              followers_url:
                'https://api.github.com/users/lauralouiset/followers',
              following_url:
                'https://api.github.com/users/lauralouiset/following{/other_user}',
              gists_url:
                'https://api.github.com/users/lauralouiset/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/lauralouiset/subscriptions',
              organizations_url:
                'https://api.github.com/users/lauralouiset/orgs',
              repos_url: 'https://api.github.com/users/lauralouiset/repos',
              events_url:
                'https://api.github.com/users/lauralouiset/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/lauralouiset/received_events',
              type: 'User',
              site_admin: false
            },
            html_url: 'https://github.com/lauralouiset/kithub',
            description: null,
            fork: true,
            url: 'https://api.github.com/repos/lauralouiset/kithub',
            forks_url: 'https://api.github.com/repos/lauralouiset/kithub/forks',
            keys_url:
              'https://api.github.com/repos/lauralouiset/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/lauralouiset/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/lauralouiset/kithub/teams',
            hooks_url: 'https://api.github.com/repos/lauralouiset/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/lauralouiset/kithub/events',
            assignees_url:
              'https://api.github.com/repos/lauralouiset/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/lauralouiset/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/lauralouiset/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/lauralouiset/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/lauralouiset/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/lauralouiset/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/lauralouiset/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/lauralouiset/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/lauralouiset/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/lauralouiset/kithub/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/lauralouiset/kithub/merges',
            archive_url:
              'https://api.github.com/repos/lauralouiset/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/lauralouiset/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/lauralouiset/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/lauralouiset/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/lauralouiset/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/lauralouiset/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/lauralouiset/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/lauralouiset/kithub/deployments',
            created_at: '2018-05-23T20:51:36Z',
            updated_at: '2019-02-07T00:44:43Z',
            pushed_at: '2019-02-07T00:44:42Z',
            git_url: 'git://github.com/lauralouiset/kithub.git',
            ssh_url: 'git@github.com:lauralouiset/kithub.git',
            clone_url: 'https://github.com/lauralouiset/kithub.git',
            svn_url: 'https://github.com/lauralouiset/kithub',
            homepage: null,
            size: 460,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
          }
        },
        base: {
          label: 'team-jlo:master',
          ref: 'master',
          sha: '4f97e1c3b19411c12640f93c9d2bde46518d668d',
          user: {
            login: 'team-jlo',
            id: 39570555,
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
            avatar_url: 'https://avatars0.githubusercontent.com/u/39570555?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/team-jlo',
            html_url: 'https://github.com/team-jlo',
            followers_url: 'https://api.github.com/users/team-jlo/followers',
            following_url:
              'https://api.github.com/users/team-jlo/following{/other_user}',
            gists_url: 'https://api.github.com/users/team-jlo/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/team-jlo/subscriptions',
            organizations_url: 'https://api.github.com/users/team-jlo/orgs',
            repos_url: 'https://api.github.com/users/team-jlo/repos',
            events_url:
              'https://api.github.com/users/team-jlo/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/team-jlo/received_events',
            type: 'Organization',
            site_admin: false
          },
          repo: {
            id: 134622274,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjIyNzQ=',
            name: 'kithub',
            full_name: 'team-jlo/kithub',
            private: false,
            owner: {
              login: 'team-jlo',
              id: 39570555,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/39570555?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/team-jlo',
              html_url: 'https://github.com/team-jlo',
              followers_url: 'https://api.github.com/users/team-jlo/followers',
              following_url:
                'https://api.github.com/users/team-jlo/following{/other_user}',
              gists_url:
                'https://api.github.com/users/team-jlo/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/team-jlo/subscriptions',
              organizations_url: 'https://api.github.com/users/team-jlo/orgs',
              repos_url: 'https://api.github.com/users/team-jlo/repos',
              events_url:
                'https://api.github.com/users/team-jlo/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/team-jlo/received_events',
              type: 'Organization',
              site_admin: false
            },
            html_url: 'https://github.com/team-jlo/kithub',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/team-jlo/kithub',
            forks_url: 'https://api.github.com/repos/team-jlo/kithub/forks',
            keys_url:
              'https://api.github.com/repos/team-jlo/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/team-jlo/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/team-jlo/kithub/teams',
            hooks_url: 'https://api.github.com/repos/team-jlo/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/events{/number}',
            events_url: 'https://api.github.com/repos/team-jlo/kithub/events',
            assignees_url:
              'https://api.github.com/repos/team-jlo/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/team-jlo/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/team-jlo/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/team-jlo/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/team-jlo/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/team-jlo/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/team-jlo/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/team-jlo/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/team-jlo/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/team-jlo/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/team-jlo/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/team-jlo/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/team-jlo/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/team-jlo/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/team-jlo/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/team-jlo/kithub/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/team-jlo/kithub/merges',
            archive_url:
              'https://api.github.com/repos/team-jlo/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/team-jlo/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/team-jlo/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/team-jlo/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/team-jlo/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/team-jlo/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/team-jlo/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/team-jlo/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/team-jlo/kithub/deployments',
            created_at: '2018-05-23T20:30:55Z',
            updated_at: '2018-06-14T17:36:12Z',
            pushed_at: '2019-02-07T00:46:28Z',
            git_url: 'git://github.com/team-jlo/kithub.git',
            ssh_url: 'git@github.com:team-jlo/kithub.git',
            clone_url: 'https://github.com/team-jlo/kithub.git',
            svn_url: 'https://github.com/team-jlo/kithub',
            homepage: null,
            size: 462,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 3,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: null,
            forks: 3,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
          }
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/team-jlo/kithub/pulls/69'
          },
          html: {
            href: 'https://github.com/team-jlo/kithub/pull/69'
          },
          issue: {
            href: 'https://api.github.com/repos/team-jlo/kithub/issues/69'
          },
          comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/issues/69/comments'
          },
          review_comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/69/comments'
          },
          review_comment: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}'
          },
          commits: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/69/commits'
          },
          statuses: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/statuses/fd0564b1c0c4cb022ac0981a9a23f1e1136d0203'
          }
        },
        author_association: 'CONTRIBUTOR',
        merged: true,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: {
          login: 'lauralouiset',
          id: 35981662,
          node_id: 'MDQ6VXNlcjM1OTgxNjYy',
          avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/lauralouiset',
          html_url: 'https://github.com/lauralouiset',
          followers_url: 'https://api.github.com/users/lauralouiset/followers',
          following_url:
            'https://api.github.com/users/lauralouiset/following{/other_user}',
          gists_url:
            'https://api.github.com/users/lauralouiset/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/lauralouiset/subscriptions',
          organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
          repos_url: 'https://api.github.com/users/lauralouiset/repos',
          events_url:
            'https://api.github.com/users/lauralouiset/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/lauralouiset/received_events',
          type: 'User',
          site_admin: false
        },
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 2,
        additions: 4,
        deletions: 65,
        changed_files: 1
      }
    },
    public: true,
    created_at: '2019-02-07T00:46:29Z',
    org: {
      id: 39570555,
      login: 'team-jlo',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/team-jlo',
      avatar_url: 'https://avatars.githubusercontent.com/u/39570555?'
    }
  },
  {
    id: '9022262577',
    type: 'PullRequestEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 134622274,
      name: 'team-jlo/kithub',
      url: 'https://api.github.com/repos/team-jlo/kithub'
    },
    payload: {
      action: 'opened',
      number: 69,
      pull_request: {
        url: 'https://api.github.com/repos/team-jlo/kithub/pulls/69',
        id: 250959151,
        node_id: 'MDExOlB1bGxSZXF1ZXN0MjUwOTU5MTUx',
        html_url: 'https://github.com/team-jlo/kithub/pull/69',
        diff_url: 'https://github.com/team-jlo/kithub/pull/69.diff',
        patch_url: 'https://github.com/team-jlo/kithub/pull/69.patch',
        issue_url: 'https://api.github.com/repos/team-jlo/kithub/issues/69',
        number: 69,
        state: 'open',
        locked: false,
        title: 'Testing Github API',
        user: {
          login: 'lauralouiset',
          id: 35981662,
          node_id: 'MDQ6VXNlcjM1OTgxNjYy',
          avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/lauralouiset',
          html_url: 'https://github.com/lauralouiset',
          followers_url: 'https://api.github.com/users/lauralouiset/followers',
          following_url:
            'https://api.github.com/users/lauralouiset/following{/other_user}',
          gists_url:
            'https://api.github.com/users/lauralouiset/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/lauralouiset/subscriptions',
          organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
          repos_url: 'https://api.github.com/users/lauralouiset/repos',
          events_url:
            'https://api.github.com/users/lauralouiset/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/lauralouiset/received_events',
          type: 'User',
          site_admin: false
        },
        body: '',
        created_at: '2019-02-07T00:45:12Z',
        updated_at: '2019-02-07T00:45:12Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: null,
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/69/commits',
        review_comments_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/69/comments',
        review_comment_url:
          'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/team-jlo/kithub/issues/69/comments',
        statuses_url:
          'https://api.github.com/repos/team-jlo/kithub/statuses/fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
        head: {
          label: 'lauralouiset:master',
          ref: 'master',
          sha: 'fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
          user: {
            login: 'lauralouiset',
            id: 35981662,
            node_id: 'MDQ6VXNlcjM1OTgxNjYy',
            avatar_url: 'https://avatars1.githubusercontent.com/u/35981662?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/lauralouiset',
            html_url: 'https://github.com/lauralouiset',
            followers_url:
              'https://api.github.com/users/lauralouiset/followers',
            following_url:
              'https://api.github.com/users/lauralouiset/following{/other_user}',
            gists_url:
              'https://api.github.com/users/lauralouiset/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/lauralouiset/subscriptions',
            organizations_url: 'https://api.github.com/users/lauralouiset/orgs',
            repos_url: 'https://api.github.com/users/lauralouiset/repos',
            events_url:
              'https://api.github.com/users/lauralouiset/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/lauralouiset/received_events',
            type: 'User',
            site_admin: false
          },
          repo: {
            id: 134624183,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjQxODM=',
            name: 'kithub',
            full_name: 'lauralouiset/kithub',
            private: false,
            owner: {
              login: 'lauralouiset',
              id: 35981662,
              node_id: 'MDQ6VXNlcjM1OTgxNjYy',
              avatar_url:
                'https://avatars1.githubusercontent.com/u/35981662?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/lauralouiset',
              html_url: 'https://github.com/lauralouiset',
              followers_url:
                'https://api.github.com/users/lauralouiset/followers',
              following_url:
                'https://api.github.com/users/lauralouiset/following{/other_user}',
              gists_url:
                'https://api.github.com/users/lauralouiset/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/lauralouiset/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/lauralouiset/subscriptions',
              organizations_url:
                'https://api.github.com/users/lauralouiset/orgs',
              repos_url: 'https://api.github.com/users/lauralouiset/repos',
              events_url:
                'https://api.github.com/users/lauralouiset/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/lauralouiset/received_events',
              type: 'User',
              site_admin: false
            },
            html_url: 'https://github.com/lauralouiset/kithub',
            description: null,
            fork: true,
            url: 'https://api.github.com/repos/lauralouiset/kithub',
            forks_url: 'https://api.github.com/repos/lauralouiset/kithub/forks',
            keys_url:
              'https://api.github.com/repos/lauralouiset/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/lauralouiset/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/lauralouiset/kithub/teams',
            hooks_url: 'https://api.github.com/repos/lauralouiset/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/lauralouiset/kithub/events',
            assignees_url:
              'https://api.github.com/repos/lauralouiset/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/lauralouiset/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/lauralouiset/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/lauralouiset/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/lauralouiset/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/lauralouiset/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/lauralouiset/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/lauralouiset/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/lauralouiset/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/lauralouiset/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/lauralouiset/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/lauralouiset/kithub/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/lauralouiset/kithub/merges',
            archive_url:
              'https://api.github.com/repos/lauralouiset/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/lauralouiset/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/lauralouiset/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/lauralouiset/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/lauralouiset/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/lauralouiset/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/lauralouiset/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/lauralouiset/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/lauralouiset/kithub/deployments',
            created_at: '2018-05-23T20:51:36Z',
            updated_at: '2019-02-07T00:44:43Z',
            pushed_at: '2019-02-07T00:44:42Z',
            git_url: 'git://github.com/lauralouiset/kithub.git',
            ssh_url: 'git@github.com:lauralouiset/kithub.git',
            clone_url: 'https://github.com/lauralouiset/kithub.git',
            svn_url: 'https://github.com/lauralouiset/kithub',
            homepage: null,
            size: 460,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
          }
        },
        base: {
          label: 'team-jlo:master',
          ref: 'master',
          sha: '4f97e1c3b19411c12640f93c9d2bde46518d668d',
          user: {
            login: 'team-jlo',
            id: 39570555,
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
            avatar_url: 'https://avatars0.githubusercontent.com/u/39570555?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/team-jlo',
            html_url: 'https://github.com/team-jlo',
            followers_url: 'https://api.github.com/users/team-jlo/followers',
            following_url:
              'https://api.github.com/users/team-jlo/following{/other_user}',
            gists_url: 'https://api.github.com/users/team-jlo/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/team-jlo/subscriptions',
            organizations_url: 'https://api.github.com/users/team-jlo/orgs',
            repos_url: 'https://api.github.com/users/team-jlo/repos',
            events_url:
              'https://api.github.com/users/team-jlo/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/team-jlo/received_events',
            type: 'Organization',
            site_admin: false
          },
          repo: {
            id: 134622274,
            node_id: 'MDEwOlJlcG9zaXRvcnkxMzQ2MjIyNzQ=',
            name: 'kithub',
            full_name: 'team-jlo/kithub',
            private: false,
            owner: {
              login: 'team-jlo',
              id: 39570555,
              node_id: 'MDEyOk9yZ2FuaXphdGlvbjM5NTcwNTU1',
              avatar_url:
                'https://avatars0.githubusercontent.com/u/39570555?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/team-jlo',
              html_url: 'https://github.com/team-jlo',
              followers_url: 'https://api.github.com/users/team-jlo/followers',
              following_url:
                'https://api.github.com/users/team-jlo/following{/other_user}',
              gists_url:
                'https://api.github.com/users/team-jlo/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/team-jlo/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/team-jlo/subscriptions',
              organizations_url: 'https://api.github.com/users/team-jlo/orgs',
              repos_url: 'https://api.github.com/users/team-jlo/repos',
              events_url:
                'https://api.github.com/users/team-jlo/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/team-jlo/received_events',
              type: 'Organization',
              site_admin: false
            },
            html_url: 'https://github.com/team-jlo/kithub',
            description: null,
            fork: false,
            url: 'https://api.github.com/repos/team-jlo/kithub',
            forks_url: 'https://api.github.com/repos/team-jlo/kithub/forks',
            keys_url:
              'https://api.github.com/repos/team-jlo/kithub/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/team-jlo/kithub/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/team-jlo/kithub/teams',
            hooks_url: 'https://api.github.com/repos/team-jlo/kithub/hooks',
            issue_events_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/events{/number}',
            events_url: 'https://api.github.com/repos/team-jlo/kithub/events',
            assignees_url:
              'https://api.github.com/repos/team-jlo/kithub/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/team-jlo/kithub/branches{/branch}',
            tags_url: 'https://api.github.com/repos/team-jlo/kithub/tags',
            blobs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/team-jlo/kithub/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/team-jlo/kithub/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/team-jlo/kithub/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/team-jlo/kithub/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/team-jlo/kithub/languages',
            stargazers_url:
              'https://api.github.com/repos/team-jlo/kithub/stargazers',
            contributors_url:
              'https://api.github.com/repos/team-jlo/kithub/contributors',
            subscribers_url:
              'https://api.github.com/repos/team-jlo/kithub/subscribers',
            subscription_url:
              'https://api.github.com/repos/team-jlo/kithub/subscription',
            commits_url:
              'https://api.github.com/repos/team-jlo/kithub/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/team-jlo/kithub/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/team-jlo/kithub/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/team-jlo/kithub/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/team-jlo/kithub/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/team-jlo/kithub/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/team-jlo/kithub/merges',
            archive_url:
              'https://api.github.com/repos/team-jlo/kithub/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/team-jlo/kithub/downloads',
            issues_url:
              'https://api.github.com/repos/team-jlo/kithub/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/team-jlo/kithub/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/team-jlo/kithub/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/team-jlo/kithub/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/team-jlo/kithub/labels{/name}',
            releases_url:
              'https://api.github.com/repos/team-jlo/kithub/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/team-jlo/kithub/deployments',
            created_at: '2018-05-23T20:30:55Z',
            updated_at: '2018-06-14T17:36:12Z',
            pushed_at: '2018-06-14T17:36:10Z',
            git_url: 'git://github.com/team-jlo/kithub.git',
            ssh_url: 'git@github.com:team-jlo/kithub.git',
            clone_url: 'https://github.com/team-jlo/kithub.git',
            svn_url: 'https://github.com/team-jlo/kithub',
            homepage: null,
            size: 462,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 3,
            mirror_url: null,
            archived: false,
            open_issues_count: 1,
            license: null,
            forks: 3,
            open_issues: 1,
            watchers: 0,
            default_branch: 'master'
          }
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/team-jlo/kithub/pulls/69'
          },
          html: {
            href: 'https://github.com/team-jlo/kithub/pull/69'
          },
          issue: {
            href: 'https://api.github.com/repos/team-jlo/kithub/issues/69'
          },
          comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/issues/69/comments'
          },
          review_comments: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/69/comments'
          },
          review_comment: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/comments{/number}'
          },
          commits: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/pulls/69/commits'
          },
          statuses: {
            href:
              'https://api.github.com/repos/team-jlo/kithub/statuses/fd0564b1c0c4cb022ac0981a9a23f1e1136d0203'
          }
        },
        author_association: 'CONTRIBUTOR',
        merged: false,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: null,
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: true,
        commits: 2,
        additions: 4,
        deletions: 65,
        changed_files: 1
      }
    },
    public: true,
    created_at: '2019-02-07T00:45:12Z',
    org: {
      id: 39570555,
      login: 'team-jlo',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/team-jlo',
      avatar_url: 'https://avatars.githubusercontent.com/u/39570555?'
    }
  },
  {
    id: '9022260819',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 134624183,
      name: 'lauralouiset/kithub',
      url: 'https://api.github.com/repos/lauralouiset/kithub'
    },
    payload: {
      push_id: 3282125654,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: 'fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
      before: '32619c023e8b0e426088ce06988166a21665980e',
      commits: [
        {
          sha: 'fd0564b1c0c4cb022ac0981a9a23f1e1136d0203',
          author: {
            email: 'lauralouise@lauraloui.se',
            name: 'Laura-Louise'
          },
          message: 'Update README.md',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/kithub/commits/fd0564b1c0c4cb022ac0981a9a23f1e1136d0203'
        }
      ]
    },
    public: true,
    created_at: '2019-02-07T00:44:42Z'
  },
  {
    id: '9022177113',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3282080545,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '0a82c2e578905a3373fa95bb1be80f1d8068d9b1',
      before: '49aa974c49eb565309c21bfbd298845e04839922',
      commits: [
        {
          sha: '0a82c2e578905a3373fa95bb1be80f1d8068d9b1',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'Authentication and Forks working',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/0a82c2e578905a3373fa95bb1be80f1d8068d9b1'
        }
      ]
    },
    public: true,
    created_at: '2019-02-07T00:21:44Z'
  },
  {
    id: '9020654244',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 168623969,
      name: 'lauralouiset/personal-project-react',
      url: 'https://api.github.com/repos/lauralouiset/personal-project-react'
    },
    payload: {
      push_id: 3281285875,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '49aa974c49eb565309c21bfbd298845e04839922',
      before: 'f22d5a686d512f95b4e20ed74a16b70f2702504b',
      commits: [
        {
          sha: '49aa974c49eb565309c21bfbd298845e04839922',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'Forks section working',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/personal-project-react/commits/49aa974c49eb565309c21bfbd298845e04839922'
        }
      ]
    },
    public: true,
    created_at: '2019-02-06T19:35:02Z'
  },
  {
    id: '9015060650',
    type: 'PushEvent',
    actor: {
      id: 35981662,
      login: 'lauralouiset',
      display_login: 'lauralouiset',
      gravatar_id: '',
      url: 'https://api.github.com/users/lauralouiset',
      avatar_url: 'https://avatars.githubusercontent.com/u/35981662?'
    },
    repo: {
      id: 169333708,
      name: 'lauralouiset/git-tac-toe',
      url: 'https://api.github.com/repos/lauralouiset/git-tac-toe'
    },
    payload: {
      push_id: 3278366098,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '399c7e2fc6380d7917d70e34b628232069f94f35',
      before: '2d79daadc65699c073a2b4e5c000e7ef27c0ed0c',
      commits: [
        {
          sha: '399c7e2fc6380d7917d70e34b628232069f94f35',
          author: {
            email: 'lauralouisetobin@gmail.com',
            name: 'Laura-Louise Tobin'
          },
          message: 'test',
          distinct: true,
          url:
            'https://api.github.com/repos/lauralouiset/git-tac-toe/commits/399c7e2fc6380d7917d70e34b628232069f94f35'
        }
      ]
    },
    public: true,
    created_at: '2019-02-06T00:52:14Z'
  }
];

class App extends Component {
  state = {
    forkEvents: [],
    pullRequestEvents: []
  };

  handleSubmit = username => {
    const eventData = data.reduce((acc, event) => {
      return {
        ...acc,
        [event.type]: acc[event.type]
          ? [...acc[event.type], { ...event }]
          : [{ ...event }]
      };
    }, {});

    this.setState({
      forkEvents: eventData.ForkEvent || [],
      pullRequestEvents: eventData.PullRequestEvent || []
    });

    // fetch(`https://api.github.com/users/${username}/events`)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     const eventData = data.reduce((acc, event) => {
    //       return {
    //         ...acc,
    //         [event.type]: acc[event.type]
    //           ? [...acc[event.type], { ...event }]
    //           : [{ ...event }]
    //       };
    //     }, {});

    //     this.setState({ eventData });
    //   });
  };

  render() {
    return (
      <div>
        My amazing app
        <Login onSubmit={this.handleSubmit} />
        <h2>Forked Repos</h2>
        <ul>
          {this.state.forkEvents &&
            this.state.forkEvents.map(event => (
              <li>
                <a href={`https://github.com/${event.repo.name}`}>
                  {event.repo.name}
                </a>
              </li>
            ))}
        </ul>
        <h2>Pull Requests</h2>
        <ul>
          {this.state.pullRequestEvents &&
            this.state.pullRequestEvents.map(event => (
              <li>
                <a href={event.payload.pull_request.html_url}>
                  {event.payload.pull_request.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
