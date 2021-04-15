---
author: James Perkins
date: "2021-04-14"
title: "Using jsconfig for faster nextjs development"
excerpt: "I spend a lot of time in NextJS projects, my whole YouTube channel is built around it. One small change to my workflow is adding a jsconfig.json file to each project."
hero_image: "https://res.cloudinary.com/dub20ptvt/image/upload/v1618489777/jsconfig_u00b8m.png"
tags: ["nextjs", "tutorial"]
---

I spend a lot of time in NextJS projects, my whole YouTube channel is built around it. One small change to my workflow is adding a `jsconfig.json` file to each project.

### What does jsconfig.json do?

The `jsconfig.json` file allows you to denote things such what module system you are using, enabling type checking, baseUrl, and paths.

### How to speed up NextJS development?

Everytime I set up a NextJS project I create a `jsconfig.json` in the root of my directory and use the baseUrl and paths option to create absolute paths to all my important folders. This allows you to stop doing `../../../components/cool.js` and type just `@/components/cool.js` regardless to how deep you are in the directory.

#### Creating your jsconfig.json

Below is an example of how I create a `jsonconfig.json` I set the `baseUrl` to `.` which means any folder or directory can be used as that is the root of the project.

I then set the `paths` for each of my folders I use frequently such as components or lib folders.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"]
    }
  }
}
```

Now that this is setup you can reference your components or lib folder from any directory no matter how deep by just using `@/components/cool.js`. This allows you to speed up your development as you no longer need to remember how deep you are in the directory tree!
