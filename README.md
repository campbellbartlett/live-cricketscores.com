[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dd088750ebbc49f284a3afcc6b901223)](https://www.codacy.com/app/campbellb/cricket-realtime-scores?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=campbellbartlett/cricket-realtime-scores&amp;utm_campaign=Badge_Grade)

[![Netlify Status](https://api.netlify.com/api/v1/badges/2034dcc4-05e9-4129-972a-1215cb3b485b/deploy-status)](https://app.netlify.com/sites/tender-galileo-bceeff/deploys)

# Live-CricketScores.com

A website for viewing Live Cricket scores from around the globe.
You can view a running copy of the project [here](https://live-cricketscores.com/)

Created and maintained by Campbell Bartlett but I am keen for more contributors - so if you are into Cricket and love Angular, please get in touch.

## Installing
You will need Node.Js and NPM to run this project.

Once they are installed on your machine, clone this repository and navigate via terminal to the repository directory.
Run:
`npm install`
to install all the required dependencies.

## Development server
You can run the project by running `ionic serve` from within the repository directory. 

A browser window will open and connect to the site. Any changes detected will be automatically rebuilt and shown in the browser as you make them.

## Build

Run `ng build --aot --prod` to build the project. 
The build artifacts will be stored in the `dist/` directory.


## Deplopyment

Any changes made to the branch Master will be automatically picked up by Netlify, which will perform a build and deploy to live-cricketscores.com.

However changes cannot be made directlyon the Master branch - instead you will need to raise a PR against Master. This will trigger the following

* Codacy will perform analysis of the changes and highlight any syntax or style issues.
* Netlify will deploy a preview of the merge and perform checks to ensure there are no errors. You can view the deployed site by clicking on the Netlify deploy preview [here](https://app.netlify.com/sites/tender-galileo-bceeff/deploys)
* If all checks are succesfull, then you will require a review from a maintainer of the project before merging. Please be in touch to get your review.


## Contributing

I am looking for contributers. If you are interested, please reach out. I welcome anyone of any experience level.

## License

Packaged under the MIT License.
