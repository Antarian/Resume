# Resume (personal website)

Project is build with Ionic and Angular and automatically sourced to AWS CI/CD pipeline from GitHub default branch.
After build process is complete, files are deployed to S3 bucket. Cloudfront is in charge of serving files and SSL
(HTTPS) setup. Route 53 handling DNS setup for domain of project [peterlabos.info](https://peterlabos.info).

[buildspec.yml](buildspec.yml) is main file used in AWS CodePipeline.

### Manual upload of project to S3 bucket (without CI/CD)

Run build on local system
```bash
npm run build:prod
```

And copy files to S3
```bash
aws s3 cp ./www s3://BUCKETNAME --recursive --acl public-read
```

### License

MIT, see file [LICENSE.md](LICENSE.md)
