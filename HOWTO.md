# A11y Workflow How To

- [A11y Workflow How To](#a11y-workflow-how-to)
  - [Configuring axe DevTools Linter](#configuring-axe-devtools-linter)
  - [Git pre-commit hook](#git-pre-commit-hook)
  - [Github Action for axe DevTools Linter](#github-action-for-axe-devtools-linter)
  - [Setup Github Pages](#setup-github-pages)
  - [Developer Hub](#developer-hub)

## Configuring axe DevTools Linter

- configuration
  https://docs.deque.com/linter/4.0.0/en/axe-linter-configuration
- custom components
  https://docs.deque.com/linter/4.0.0/en/vs-code-jetbrains-custom-components
- rules and tags
  https://docs.deque.com/linter/4.0.0/en/axe-linter-rules

## Git pre-commit hook

- pre commit hook https://docs.deque.com/linter/4.0.0/en/axe-linter-git-pre-commit-hook
- connector install
  https://docs.deque.com/linter/4.0.0/en/agora-npm-connector
- add API key to environment  
  `export AXE_LINTER_API_KEY=######`

Create pre-commit hook script file in `.git/hooks/pre-commit`:

```bash
#!/bin/bash
# axe DevTools Linter pre-commit
# This script will setup the environment variables needed for axe-linter-connector
# and execute axe-linter-connector. The output file will be reviewed and call back with exit codes:
## 0 - No Accessibility Defects
## 1 - axe DevTools Linter Detected Accessibility Defects
## 2 - Execution problem, or axe DevTools Linter unavailable.

echo "axe DevTools Linter Starting $(date)"

# Setup variables for axe DevTools Linter
export AXE_LINTER_SERVER_URL=https://axe-linter.deque.com/
StatusCode=0

if [[ -z "${AXE_LINTER_API_KEY}" ]]; then
   echo "AXE_LINTER_API_KEY must be set"
   exit 2
fi
# Configure verbose output.
VerboseOutput="true"
# Configure outfile: output in Generic Issue Import Format for in execution directory.
OutFile="axe-linter-report.json"
for i in $(git status --porcelain | sed s/^...//); do
   rm -f $OutFile
   TempCode=0
   shopt -s nocasematch;
   if [[ $i == *.html ]] || [[ $i == *.js ]] || [[ $i == *.jsx ]] || [[ $i == *.tsx ]] || [[ $i == *.vue ]] || [[ $i == *.htm ]] || [[$i == *.liquid]] || [[ $i == *.md ]] || [[ $i == *.markdown ]];
   then
      if $VerboseOutput; then
         echo "Accessibility check: file: $i"
      fi
      # execute axe DevTools Linter Connector
      axe-linter-connector -s $i -d . --api-key $AXE_LINTER_API_KEY --config ./axe-linter.yml --url $AXE_LINTER_SERVER_URL

      if [ ! -f "$OutFile" ];then
         echo "$OutFile Does Not Exist"
         exit 2
      elif cat "$OutFile" | grep -q "BUG"; then
         if $VerboseOutput; then
            cat $OutFile
         fi
         echo "**axe DevTools Linter Accessibility Issues Detected: $i"
         TempCode=1
      else
         echo "No axe DevTools Linter Connector Issues Detected in: $i"
      fi
      if [ "$TempCode" != "0" ]; then
         StatusCode=1
      fi
      rm $OutFile
   fi
done

if [ "$StatusCode" != "0" ]; then
   echo "Commit Failed due to Accessibility Issues"
fi
exit $StatusCode
```

## Github Action for axe DevTools Linter

- https://docs.deque.com/linter/4.0.0/en/axe-linter-github-action
- create `AXE_LINTER_API_KEY` secret in your Github repository
  > Settings > Secrets and variables > Repository secrets
  >
  > add `AXE_LINTER_API_KEY` secret key with your axe Linter API key as secret value

## Setup Github Pages

- General Setip https://blog.logrocket.com/gh-pages-react-apps/

## Developer Hub

- create `AXE_DEVHUB_API_KEY` secret in your Github repository
  > Settings > Secrets and variables > Repository secrets
  >
  > add `AXE_DEVHUB_API_KEY` secret key with your axe Developer Hub API key as secret value
