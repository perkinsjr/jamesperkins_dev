---
author: James Perkins
date: "2021-10-04"
title: "Force Reload Next.js Pages"
excerpt: "I will show how to retrieve the last 10 videos from YouTube, so people never have to leave your digital garden. I have been retrieving the data from YouTube for a while, I have a live stat update on my site so you can see the latest subscriber and view count"
hero_image: "https://res.cloudinary.com/dub20ptvt/image/upload/v1619300077/jsconfig_for_faster_NextJS_development_1_d14bul.png"
tags: ["tutorial"]
published: false  
---

In some circumstances, you might need to force refresh a page, maybe you have data that needs to be refetched from the server but aren't using a Stale While Revalidating method. For example a user profile page, where a user might update a password or email. 
### When in a component 

When you are in a component, Next.js has the "useRouter" hook that allows you to, well, hook into the router functionality. When using the hook you can do the following
```javascript
import { useRouter } from 'next/router'

export default function myComponent() {

const router = useRouter()

router.reload(window.location.pathname)
}
```

### When you aren't in a component

There are on occasion where you might be out of a component, such as a utlity or something similar. You can still force the reload, but you can't use the hook to do this. Instead you can still use the router functionality: 
```javascript
import Router from 'next/router'

Router.reload(window.location.pathname)
```
This will force the reload but without the hook, allowing you to do it wherever you need it outside of component function. 
