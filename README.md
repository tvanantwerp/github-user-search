# GitHub User Search

This is a [Next.js](https://nextjs.org) app that uses [Apollo](https://www.apollographql.com) to query [GitHub](https://github.com)'s [GraphQL API](https://docs.github.com/en/graphql/overview/explorer) to search for users and organizations. See it in action [here](https://tva-github-user-search.netlify.app/).

## Authentication

Queries to the GitHub API are currently handled with a Personal Access Token with the minimum permissions required to access information about users and organizations returned from search queries.

## App Structure

While Next.js has some very useful server-side generation abilities, this app does not use them. Queries to the GitHub API are instead made client-side. The primary reason for this approach is that there are 72,800,732 possible results (as of writing), and I do not wish to statically render that many pages. Nor do I wish to have a Next.js app running on a server to render pages as requested, as this app is meant to be deployed to a static host like Netlify.

## User Details

A user's details can be viewed at `/user/:username`, which is linked to from the individual search results.

Contribution history queries cannot exceed a year's worth of time, so only the latest year is currently displayed. I may update this to simply query every possible year separately, but it's not so terribly important right now.

## Aesthetics

Design inspired by [each](https://dribbble.com/shots/15841277-Health-Monitoring-App) [of](https://dribbble.com/shots/15804498-SmartHome-App-Platform) [these](https://dribbble.com/shots/15797237-Health-Monitoring-App) three Dribbble shots.