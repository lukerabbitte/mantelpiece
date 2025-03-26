Mantelpiece is a complete authenticated CMS for journalists with statically rendered MDX articles, built using the latest and greatest in NextJS (App Router), Supabase Postgres and Auth, and Tailwind+ShadCN.

At the moment, this is being used as a private CMS, but anybody is able to create an account and view their page. It will thus be easy to rearrange things to make this a platform for journalism portfolios, rather than a once-off.

It is designed to be snappy, simple, and charming. I am particularly proud of the `FloatingText` component, which I may publish as a standalone NPM package. It is a fun full-page animation, with easing and throttling, that scatters hero heading text into its constituent characters and moves them around as we scroll down the page, assigning each character its own depth of field via background blur and size. I was inspired by the insightful posts by [Emil Kowalski](https://emilkowal.ski/) and had fun using [Motion.dev](https://motion.dev/).

Upcoming:

- Adding finalised support for markdown editing in-app.
- Allowing users to customise their pages according to a given set of theme colours.
- Publish `FloatingText` component as a fun standalone package.
