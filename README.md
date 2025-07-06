# CSCH on Next + Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/076322a1-ac5f-457f-8028-9e33d088fba0/deploy-status)](https://app.netlify.com/sites/cscareerhub-next/deploys)

We are a community of software engineers on a mission of lifelong learning.

CS Career Hub was created to help guide engineers at any point in their career. Over 36,000 users have joined our community, ranging from first-year students to hiring managers. In the past few years, we've facilitated thousands of mock interviews and resume reviews with candidates. With plenty of plans on the roadmap, you can expect even more to come.

And [this is our website](https://cscareerhub.com/)! You'll find information about CSCH, the staff that runs it, links to the Wiki & FAQ, and ways to contact us.

Interested in seeing what's next or contributing? Take a look at our [roadmap](https://github.com/cscareerhub/csch-web/projects/1).

## Information About Our Tools

We are using: NextJS, Netlify, and Airtable.

- NextJS is a React-based static site generator (SSG).
- Netlify autodeploys (and builds website) on master commits. We also use it to store recieves our form data.
- Airtable is a no-code database that comes with an API (and API reference for our tables) and is easily integrated into apps. It is especially easy to integrate with NextJS and other popular JS-based SSGs.

### A Note About Airtable on NextJS

For our data, we've integrated Airtable with NextJS, but updates won't automatically be shown on website. We will need to bump Netlify to build and deploy by committing so that most up-to-date Airtable data shows up on website since NextJS is an SSG. We can automate this through Airtable webhooks, but it may be for paid plans only. An alternative may be to write a script. For now, we will have to bump Netlify by pushing a commit to master.

## Contributing

0. Optional: Join us on the CSCH Discord server where we will give you access to the website dev channel where we discuss and test the website.

1. Clone (or fork) the repository.

2. Install dependencies with `yarn install`.

3. Create a `.env` to store environment variables needed for Airtable. If you need credentials, please ask the code owners.

4. Make sure you are on the correct node version using nvm. Run `nvm install` to make sure you are on the repository's configured node version.

5. Run the development server with `yarn dev`.

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit any file.

7. Once you've made change, create a pull request to the this repo's `master` branch with the type of change, which should correspond to the first part of your branch name, in the PR title.

```
branch name: docs/change
PR title: [docs] Changed this and that in the docs
```

All PRs will require at least one review from CSCH staff. If it's been over a week, feel free to ping us once in the Discord.
