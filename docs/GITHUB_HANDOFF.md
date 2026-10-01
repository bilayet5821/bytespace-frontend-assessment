# GitHub handoff (pending)

The repository has not been created or pushed. The proposed public repository name is `bytespace-frontend-assessment` under `bilayet5821`.

After creating an empty **public** GitHub repository without initializing a README, license or `.gitignore`, publish the existing clean base and verified feature branch:

```bash
git remote add origin https://github.com/bilayet5821/bytespace-frontend-assessment.git
git push -u origin main
git push -u origin feature/bytespace-landing
```

`main` has only the clean `.gitignore` base. All application work remains on `feature/bytespace-landing`. Publishing the base is necessary to establish the PR target; it does not merge implementation into `main`.

Open a PR from `feature/bytespace-landing` to `main`. Use the title and body in `docs/PULL_REQUEST.md`. Leave it open for review. Do not merge, deploy to Vercel or submit to the employer until instructed.
